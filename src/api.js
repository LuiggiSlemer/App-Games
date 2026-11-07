const CONSOLES_MOCK = [
  {
    id: 'ps5', nome: 'PlayStation 5', fabricante: 'Sony',
    jogos: [
      { id: 'ps5-1', titulo: 'Marvel\'s Spider-Man 2', ano: 2023, metascore: 90, genero: 'Ação e aventura', sinopse: 'Peter Parker e Miles Morales precisam unir forças para proteger Nova York de novas ameaças.' },
      { id: 'ps5-2', titulo: 'God of War Ragnarök', ano: 2022, metascore: 94, genero: 'Ação e aventura', sinopse: 'Kratos e Atreus atravessam os nove reinos enquanto se aproximam os eventos do Ragnarök.' },
      { id: 'ps5-3', titulo: 'Horizon Forbidden West', ano: 2022, metascore: 88, genero: 'RPG de ação', sinopse: 'Aloy explora terras desconhecidas para descobrir a origem de uma nova ameaça ao planeta.' },
      { id: 'ps5-4', titulo: 'Ghost of Tsushima Director\'s Cut', ano: 2021, metascore: 87, genero: 'Ação', sinopse: 'Jin Sakai luta para proteger sua terra durante a invasão mongol do Japão.' },
      { id: 'ps5-5', titulo: 'Gran Turismo 7', ano: 2022, metascore: 87, genero: 'Corrida', sinopse: 'Uma experiência de automobilismo com carros, pistas e modos para diferentes estilos de piloto.' }
    ]
  },
  {
    id: 'xbox', nome: 'Xbox Series X|S', fabricante: 'Microsoft',
    jogos: [
      { id: 'xbox-1', titulo: 'Forza Horizon 5', ano: 2021, metascore: 92, genero: 'Corrida', sinopse: 'Explore um grande mapa inspirado no México em festivais de corrida e desafios.' },
      { id: 'xbox-2', titulo: 'Halo Infinite', ano: 2021, metascore: 87, genero: 'Tiro em primeira pessoa', sinopse: 'Master Chief enfrenta uma nova ameaça em uma aventura ambientada no universo Halo.' },
      { id: 'xbox-3', titulo: 'Starfield', ano: 2023, metascore: 83, genero: 'RPG', sinopse: 'Viaje pelo espaço, explore planetas e descubra os mistérios de uma galáxia extensa.' },
      { id: 'xbox-4', titulo: 'Microsoft Flight Simulator', ano: 2020, metascore: 90, genero: 'Simulação', sinopse: 'Pilote aeronaves e explore cenários do mundo em uma experiência de voo realista.' },
      { id: 'xbox-5', titulo: 'Gears 5', ano: 2019, metascore: 84, genero: 'Ação e tiro', sinopse: 'Kait Diaz parte em uma jornada para descobrir a ligação de sua família com o inimigo.' }
    ]
  },
  {
    id: 'switch', nome: 'Nintendo Switch', fabricante: 'Nintendo',
    jogos: [
      { id: 'switch-1', titulo: 'The Legend of Zelda: Tears of the Kingdom', ano: 2023, metascore: 96, genero: 'Ação e aventura', sinopse: 'Link explora Hyrule e os céus em uma aventura para enfrentar uma nova ameaça.' },
      { id: 'switch-2', titulo: 'Super Mario Odyssey', ano: 2017, metascore: 97, genero: 'Plataforma', sinopse: 'Mario viaja por diferentes reinos para resgatar a Princesa Peach.' },
      { id: 'switch-3', titulo: 'Mario Kart 8 Deluxe', ano: 2017, metascore: 92, genero: 'Corrida', sinopse: 'Dispute corridas divertidas com personagens clássicos da Nintendo.' },
      { id: 'switch-4', titulo: 'Animal Crossing: New Horizons', ano: 2020, metascore: 90, genero: 'Simulação', sinopse: 'Construa e personalize sua ilha enquanto convive com vizinhos animais.' },
      { id: 'switch-5', titulo: 'Pokémon Scarlet', ano: 2022, metascore: 72, genero: 'RPG', sinopse: 'Explore uma região aberta, capture Pokémon e participe de novas aventuras.' }
    ]
  },
  {
    id: 'pc', nome: 'PC', fabricante: 'Computador',
    jogos: [
      { id: 'pc-1', titulo: 'Cyberpunk 2077', ano: 2020, metascore: 86, genero: 'RPG de ação', sinopse: 'Explore Night City como V, um mercenário em busca de um implante ligado à imortalidade.' },
      { id: 'pc-2', titulo: 'Baldur\'s Gate 3', ano: 2023, metascore: 96, genero: 'RPG', sinopse: 'Monte seu grupo e tome decisões que moldam uma aventura fantástica.' },
      { id: 'pc-3', titulo: 'Counter-Strike 2', ano: 2023, metascore: 83, genero: 'Tiro tático', sinopse: 'Enfrente equipes adversárias em partidas táticas de ataque e defesa.' },
      { id: 'pc-4', titulo: 'Minecraft', ano: 2011, metascore: 93, genero: 'Sandbox', sinopse: 'Construa, explore e sobreviva em mundos feitos de blocos.' },
      { id: 'pc-5', titulo: 'The Witcher 3: Wild Hunt', ano: 2015, metascore: 93, genero: 'RPG', sinopse: 'Acompanhe Geralt de Rívia em uma jornada por um mundo de fantasia.' }
    ]
  },
  {
    id: 'ps4', nome: 'PlayStation 4', fabricante: 'Sony',
    jogos: [
      { id: 'ps4-1', titulo: 'The Last of Us Part II', ano: 2020, metascore: 93, genero: 'Ação e aventura', sinopse: 'Ellie atravessa um mundo devastado em uma história sobre perda e consequências.' },
      { id: 'ps4-2', titulo: 'Bloodborne', ano: 2015, metascore: 92, genero: 'RPG de ação', sinopse: 'Explore a cidade sombria de Yharnam e enfrente criaturas em uma caçada misteriosa.' },
      { id: 'ps4-3', titulo: 'Uncharted 4: A Thief\'s End', ano: 2016, metascore: 93, genero: 'Ação e aventura', sinopse: 'Nathan Drake retorna à aventura em busca de um lendário tesouro pirata.' },
      { id: 'ps4-4', titulo: 'Red Dead Redemption 2', ano: 2018, metascore: 97, genero: 'Ação e aventura', sinopse: 'Arthur Morgan e a gangue Van der Linde tentam sobreviver no fim da era do Velho Oeste.' },
      { id: 'ps4-5', titulo: 'Horizon Zero Dawn', ano: 2017, metascore: 89, genero: 'RPG de ação', sinopse: 'Aloy desvenda os segredos de um mundo dominado por máquinas.' }
    ]
  }
];

// Simula uma chamada assíncrona para carregar os consoles e seus jogos.
export const buscarConsoles = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CONSOLES_MOCK), 1000);
  });
};
