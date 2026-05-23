/*Contagem de jogadores por tempo
Gere um relatório com a quantidade de jogadores por cada clube. Exemplo de saída esperada:

[
  ["Real Madrid: 3"],
  ["Barcelona: 4"],
  ["Corinthians: 17"],
  ...
]
*/

// 4 - Contagem de jogadores por time

const times = ["Real Madrid", "Barcelona", "Corinthians", "Milan", "Inter de Milao"];

const jogadoresPorTime = [
  ["Zinedine Zidane", "Ronaldo Fenomeno", "Roberto Carlos"], // Real Madrid
  ["Ronaldinho Gaucho", "Xavi Hernandez", "Carles Puyol", "Rivaldo", "Neymar", "Lionel Messi"], // Barcelona
  ["Socrates", "Rivelino", "Marcelinho Carioca", "Cassio"], // Corinthians
  ["Paolo Maldini", "Kaka"], // Milan
  ["Javier Zanetti", "Adriano", "Zlatan Ibrahimovic"] // Inter de Milao
];

const relatorioJogadores = [];

let quantidades = 0;

for(let i = 0; i < times.length; i ++){
  quantidades = jogadoresPorTime[i].length;
  relatorioJogadores.push(`${times[i]} : ${quantidades}`)
}

console.log(relatorioJogadores);