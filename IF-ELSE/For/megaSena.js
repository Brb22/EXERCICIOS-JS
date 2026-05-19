const fezinha = [2, 4, 7, 23, 32, 54];
const megaSena = [];

for (let i = 0; i < 6; i++){
    let numero = Math.ceil(Math.random() * 60);
    if (megaSena.includes(numero)){
        i--;
    }else {
        megaSena.push(numero);
    }
}
console.log(megaSena)
let quantidadeAcertos = 0;
let acertos = [];

for(let i = 0; i < fezinha.length; i ++){ //Fezinha
    for(let j = 0;  j < fezinha.length; j ++){ // Mega-sena
        if(fezinha[i] === megaSena[j]){
            quantidadeAcertos += 1
            acertos.push(fezinha[i])
        }
    }
}

console.log(`Quantidades de acertos: ${quantidadeAcertos}`);
console.log(`Acertados: ${acertos}`);