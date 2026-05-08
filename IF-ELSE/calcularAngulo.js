/*
Utilize if...else para escrever um código que defina três variáveis ​​com os valores dos três ângulos internos de um triângulo.
Retorne verdadeiro se os ângulos representamem os ângulos de um triângulo e falso, caso contrário.
Se algum anexo for inválido, você deverá retornar uma mensagem de erro.
*/


let angulo1 = 45;
let angulo2 = 65;
let angulo3 = 70;

const cancularAngulo = angulo1 + angulo2 + angulo3;
const maiorQ = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(maiorQ){
    if(cancularAngulo == 180){
        console.log("True")
    }else{
        console.log("False")
    }
}else{
    console.log("Erro, ângulo invalido!")
}