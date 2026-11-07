import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FavoriteScreen() {
  const [favoritos, setFavoritos] = useState([]);

  const carregarFavoritos = async () => {
    try {
      const dados = await AsyncStorage.getItem('@gamecatalog_favoritos');
      setFavoritos(dados ? JSON.parse(dados) : []);
    } catch (erro) {
      setFavoritos([]);
    }
  };

  useFocusEffect(useCallback(() => {
    carregarFavoritos();
  }, []));

  const limparLista = async () => {
    await AsyncStorage.removeItem('@gamecatalog_favoritos');
    setFavoritos([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus jogos favoritos</Text>
      {favoritos.length === 0 && <Text style={styles.vazio}>Nenhum jogo salvo ainda. Abra um jogo no catálogo e toque em favoritos.</Text>}
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>🎮  {item.titulo}</Text>
            <Text style={styles.detalhe}>{item.consoleNome}  •  {item.ano}</Text>
          </View>
        )}
      />
      {favoritos.length > 0 && <Button title="Limpar favoritos" color="#d94b5b" onPress={limparLista} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#10111b' },
  header: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  vazio: { color: '#a5a6b5', lineHeight: 22 },
  item: { padding: 15, backgroundColor: '#1c1e2b', borderRadius: 10, marginBottom: 10 },
  nome: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  detalhe: { color: '#a5a6b5', marginTop: 6, fontSize: 12 }
});
