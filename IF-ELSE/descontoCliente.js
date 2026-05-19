// Uma loja dá desconto baseado no valor da compra e no tipo de cliente.
//
// Regras:
//
// Cliente VIP:
// - acima de 500 reais -> 20% de desconto
// - acima de 200 reais -> 10%
// - abaixo disso -> sem desconto
//
// Cliente comum:
// - acima de 500 reais -> 10%
// - acima de 200 reais -> 5%
// - abaixo disso -> sem desconto
//
// O programa deve mostrar:
//
// - tipo do cliente
// - valor original
// - porcentagem do desconto
// - valor final
//
// Use if else
//
// Exemplo:
//
// tipoCliente = "vip"
// valorCompra = 650
//
// Cliente: vip
// Valor original: 650
// Desconto: 20%
// Valor final: 520

/*
const voltas = 20;

for(let i = 1; i <= voltas; i++){
    console.log(`Voltas número ${i}`);
}




const arr = [ 1, "Banana", 3.5, 7]


console.log(arr[2])
*/
let array = [10, 20, 30, 40, 50, 60, 70, 80, 80, 90, 100]
let soma = 0;

for(let i = 0; i < array.length; i ++){
    soma += array[i]; // Acumulador    
}
console.log(soma)

