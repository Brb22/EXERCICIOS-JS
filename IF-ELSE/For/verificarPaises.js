const nacionalidades = [
    "Brasil", "Espanha", "Italia", "Argentina", "Franca", "Alemanha", 
    "Portugal", "Uruguai", "Holanda", "Inglaterra", "Brasil", "Italia", 
    "Espanha", "Chile", "Colombia", "Mexico", "Estados Unidos", "Japao", "Coreia do Sul", 
    "Australia", "Canada", "Belgica", "Croacia", "Suecia", "Noruega", "Dinamarca", "Brasil", 
    "Argentina", "Portugal", "Italia"];

const paisesUnicos = [];

console.log(paisesUnicos);

for (let i = 0; i < nacionalidades.length; i++){
    if(!paisesUnicos.includes(nacionalidades[i])){
        paisesUnicos.push(nacionalidades[i]);
    }
}

console.log(paisesUnicos)
/*
Desenvolva um algoritmo que percorra todas as strings do array nacionalidades. Você deve criar um array vazio chamado paisesUnicos.
Para cada país encontrado, verifique se ele já não é um novo array. Se não for necessário, adicione-o.

O array paisesUnicosnão deve possuir nenhum nome de país repetido.
*/