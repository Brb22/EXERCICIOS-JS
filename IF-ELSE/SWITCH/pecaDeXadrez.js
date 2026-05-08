/*Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez
e retorne os movimentos que ela pode fazer.
*/

const pecaXadrez = "Rainha";

switch (pecaXadrez) {
    case "Rei":
        console.log("Rei -> Uma casa para qualquer direção");
        break;
    case "Bispo":
        console.log("Bispo -> Diagonais.");
        break;
    case "Rainha":
        console.log("Rainha -> Diagonais, horizontal e vertical.");
        break;
    case "Cavalo":
        console.log("Cavalo -> Anda em L e pode pular sobre  peças.");
        break;
    case "Torre":
        console.log("Torre -> Horizontal e vertical");
        break;
    case "Peão":
        console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log("Erro -> Peça inválida!")
    
} 