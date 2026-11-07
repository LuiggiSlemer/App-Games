# Catálogo de Jogos

Aplicativo demonstrativo em React Native com Expo.

## Conteúdo
- PlayStation 5: 5 jogos
- Xbox Series X|S: 5 jogos
- Nintendo Switch: 5 jogos
- PC: 5 jogos
- PlayStation 4: 5 jogos

## Executar
1. Instale as dependências: `npm install`
2. Inicie o Expo: `npx expo start`
3. Para abrir no navegador: `npx expo start --web`

Os dados são simulados localmente em `src/api.js`. Os favoritos ficam salvos no AsyncStorage.

## Capas dos jogos

O aplicativo inclui 25 capas ilustrativas originais, criadas para este projeto e armazenadas localmente em `assets/covers/`. Elas aparecem na tela de detalhes quando o usuário seleciona um jogo. Não são capas oficiais nem reproduções de artes comerciais protegidas por direitos autorais.

O mapeamento entre o ID de cada jogo e sua imagem fica em `src/covers.js`.


## Notas dos jogos

O campo `metascore` exibe a nota agregada da crítica (0–100) do Metacritic para a plataforma indicada no catálogo. As notas podem variar entre plataformas e devem ser conferidas na página individual do jogo antes de uma publicação definitiva.
