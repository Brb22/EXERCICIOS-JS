/*Crie uma lógica que verifique se o "Real Madrid" possui o patrocinador "Adidas".
Utilize o array patrocinadorese o método include . 
O resultado deve ser exibido no console como um valor booleano.

💡 Teste diferentes nomes de patrocinadores para diferentes clubes.

*/

// 2 - Verificar patrocinador

const times = ["Real Madrid", "Barcelona", "Corinthians", "Milan", "Inter de Milao"];

const patrocinadores = [
  ["Emirates", "Adidas", "HP"],            // Real Madrid
  ["Nike", "Spotify", "Beko"],             // Barcelona
  ["Neo Quimica", "Nike", "LINUXtips"],    // Corinthians
  ["Puma", "Emirates", "MSC"],             // Milan
  ["Nike", "Pirelli", "Lenovo"]            // Inter de Milao
];


console.log(patrocinadores[1].includes("Adidas"));