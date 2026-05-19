/*Desafio: Analisador de notas da turma
Você tem uma turma de alunos. Cada aluno tem nome e nota. Seu sistema tem que:

Percorrer todos os alunos com um for
Pra cada um, usar if/else pra classificar: "Aprovado", "Recuperação" ou "Reprovado"
No final, imprimir quantos foram aprovados, quantos em recuperação e quantos reprovados
Imprimir também a média geral da turma*/

/*
let alunos = [
    {nome: "Bruno", nota: 8},
    {nome: "Ana", nota: 4},
    {nome: "Carlos", nota: 6},
    {nome:  "Julia", nota: 9},
    {nome: "Pedro", nota: 3},
    {nome: "Mariana", nota: 7},
    {nome: "Lucas", nota: 5},    
]

let aprovados = 0;
let reprovados = 0;
let recuperacao = 0;
let mediaDaSala = 0;

for (let i = 0; i < alunos.length; i++) {


  if (alunos[i].nota >= 7) {
    console.log(`${alunos[i].nome} com a nota ${alunos[i].nota} foi APROVADOOOO!`);
    aprovados ++

    
  } else if (alunos[i].nota >= 5) {
    console.log(` ${alunos[i].nome} em Recuperação!`)
    recuperacao++
  } else {
    console.log(`${alunos[i].nome} Reprovado!`)
    reprovados++
  }
}

console.log(`Aprovados ${aprovados}, Reprovados ${reprovados}, Recuperação ${recuperacao}`)
*/
/*
const frutas = ["Limão", "Uva", "Banana", "Peira", "Tomate"];

frutas.push("Maçã", "Kiwi");
frutas.unshift("Melancia")
console.log(frutas);*/



/*
const times = ["Corinthians", "Palmeiras", "São Paulo", "Santos"];

for (let i = 0; i < times.length; i++){
  for(let j = 0; j < times.length; j++){
    if(i !== j){
      console.log(`${times[i]} X ${times[j]}`)
    }
  }
}*/

console.log(Math.ceil(Math.random() * 60));