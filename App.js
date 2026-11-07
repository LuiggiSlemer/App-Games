import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import FavoritesScreen from './src/screen/FavoriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { backgroundColor: '#171827' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#10111b' }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Game Catalog' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes do jogo' }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Meus favoritos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
