import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { buscarConsoles } from '../api';

export default function HomeScreen({ navigation }) {
  const [consoles, setConsoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      const dados = await buscarConsoles();
      setConsoles(dados);
      setLoading(false);
    }
    carregarDados();
  }, []);

  if (loading) {
    return <View style={styles.carregando}><ActivityIndicator size="large" color="#6d5dfc" /><Text style={styles.textoCarregando}>Carregando catálogo...</Text></View>;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.topo}>
        <Text style={styles.subtitulo}>EXPLORE POR PLATAFORMA</Text>
        <Text style={styles.titulo}>Catálogo de Jogos</Text>
        <Text style={styles.descricao}>5 consoles • 25 jogos para descobrir</Text>
      </View>
      <TouchableOpacity style={styles.botaoFavoritos} onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.textoBotao}>★  Ver meus favoritos</Text>
      </TouchableOpacity>

      {consoles.map((consoleItem) => (
        <View key={consoleItem.id} style={styles.secao}>
          <View style={styles.cabecalhoSecao}>
            <View>
              <Text style={styles.nomeConsole}>{consoleItem.nome}</Text>
              <Text style={styles.fabricante}>{consoleItem.fabricante}</Text>
            </View>
            <Text style={styles.contagem}>{consoleItem.jogos.length} jogos</Text>
          </View>
          {consoleItem.jogos.map((jogo) => (
            <TouchableOpacity key={jogo.id} style={styles.card} onPress={() => navigation.navigate('Details', { jogo, consoleNome: consoleItem.nome })}>
              <View style={styles.iconeJogo}><Text style={styles.controle}>🎮</Text></View>
              <View style={styles.infoJogo}>
                <Text style={styles.tituloJogo}>{jogo.titulo}</Text>
                <Text style={styles.detalheJogo}>{jogo.ano}  •  {jogo.genero}</Text>
                <Text style={styles.notaJogo}>Metascore: {jogo.metascore}/100</Text>
              </View>
              <Text style={styles.seta}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Text style={styles.rodape}>Catálogo demonstrativo com dados locais.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#10111b' },
  conteudo: { padding: 18, paddingBottom: 35 },
  topo: { paddingTop: 12, paddingBottom: 18 },
  subtitulo: { color: '#a99fff', fontSize: 11, fontWeight: 'bold', letterSpacing: 2 },
  titulo: { color: '#fff', fontSize: 30, fontWeight: 'bold', marginTop: 7 },
  descricao: { color: '#a5a6b5', marginTop: 6, fontSize: 14 },
  botaoFavoritos: { backgroundColor: '#6d5dfc', padding: 14, borderRadius: 12, alignItems: 'center', marginBottom: 24 },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  secao: { marginBottom: 24 },
  cabecalhoSecao: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#303143', paddingBottom: 10 },
  nomeConsole: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  fabricante: { color: '#9698aa', fontSize: 12, marginTop: 3 },
  contagem: { color: '#b9b2ff', fontSize: 12, backgroundColor: '#292543', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1c1e2b', padding: 12, borderRadius: 12, marginBottom: 8 },
  iconeJogo: { width: 42, height: 42, borderRadius: 10, backgroundColor: '#302d4d', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  controle: { fontSize: 20 },
  infoJogo: { flex: 1 },
  tituloJogo: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  detalheJogo: { color: '#a5a6b5', fontSize: 12, marginTop: 5 },
  notaJogo: { color: '#9be28f', fontSize: 11, fontWeight: 'bold', marginTop: 4 },
  seta: { color: '#a99fff', fontSize: 28, paddingLeft: 8 },
  carregando: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#10111b' },
  textoCarregando: { color: '#fff', marginTop: 12 },
  rodape: { color: '#77798b', textAlign: 'center', fontSize: 12, marginTop: 4 }
});
