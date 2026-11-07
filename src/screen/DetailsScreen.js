import React from 'react';
import { View, Text, Button, Alert, StyleSheet, ScrollView, Image } from 'react-native';
import { capasJogos } from '../covers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsScreen({ route, navigation }) {
  const { jogo, consoleNome } = route.params;

  const salvarFavorito = async () => {
    try {
      const favoritosAtuais = await AsyncStorage.getItem('@gamecatalog_favoritos');
      const listaSalva = favoritosAtuais ? JSON.parse(favoritosAtuais) : [];
      const jaExiste = listaSalva.find((item) => item.id === jogo.id);

      if (jaExiste) {
        Alert.alert('Aviso', 'Este jogo já está nos favoritos!');
        return;
      }

      listaSalva.push({ ...jogo, consoleNome });
      await AsyncStorage.setItem('@gamecatalog_favoritos', JSON.stringify(listaSalva));
      Alert.alert('Sucesso', 'Jogo salvo nos favoritos!');
      navigation.goBack();
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível salvar o jogo.');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Image source={capasJogos[jogo.id]} style={styles.capa} resizeMode="cover" accessibilityLabel={`Capa ilustrativa de ${jogo.titulo}`} />
      <Text style={styles.plataforma}>{consoleNome}</Text>
      <Text style={styles.titulo}>{jogo.titulo}</Text>
      <View style={styles.linha}><Text style={styles.rotulo}>Lançamento</Text><Text style={styles.valor}>{jogo.ano}</Text></View>
      <View style={styles.linha}><Text style={styles.rotulo}>Gênero</Text><Text style={styles.valor}>{jogo.genero}</Text></View>
      <View style={styles.linha}><Text style={styles.rotulo}>Nota Metacritic (crítica)</Text><Text style={styles.nota}>{jogo.metascore}/100</Text></View>
      <Text style={styles.rotuloSinopse}>SINOPSE</Text>
      <Text style={styles.sinopse}>{jogo.sinopse}</Text>
      <View style={styles.botao}><Button title="★  Salvar nos favoritos" onPress={salvarFavorito} color="#6d5dfc" /></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#10111b' },
  conteudo: { padding: 24 },
  capa: { width: '100%', height: 430, borderRadius: 16, marginBottom: 22, backgroundColor: '#242638' },
  plataforma: { color: '#a99fff', fontWeight: 'bold', fontSize: 13, textTransform: 'uppercase' },
  titulo: { color: '#fff', fontSize: 29, fontWeight: 'bold', marginTop: 8, marginBottom: 25 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#303143' },
  rotulo: { color: '#a5a6b5', fontSize: 14 },
  valor: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  nota: { color: '#9be28f', fontWeight: 'bold', fontSize: 18 },
  rotuloSinopse: { color: '#a99fff', fontSize: 12, fontWeight: 'bold', letterSpacing: 1.5, marginTop: 28, marginBottom: 10 },
  sinopse: { color: '#e1e1e8', fontSize: 16, lineHeight: 25 },
  botao: { marginTop: 30, borderRadius: 10, overflow: 'hidden' }
});
