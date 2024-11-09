/**
 * 1° percorra um array de 10 caracteres e encontre o número maior
 * 2° percorra um array de 10 caracteres e verifique se existe o número 5 e se existir sua posição
 */
//11 elementos - 10 posições
let vetor = [6, 3, 1, 4, 2, 5, 8, 7, 2, 9, 21]
// let maiorNumero = 0
// let menorNumero = 30

// for(let i = 0; i < vetor.length; i++ ){
//     if(vetor[i] > maiorNumero ){
//         maiorNumero = vetor[i]
//     }
    
//     if(vetor[i] < menorNumero){
//         menorNumero = vetor[i]
//     }
// }
// console.log(`O maior número do vetor é ${maiorNumero}`)
// console.log(`O menor número do vetor é ${menorNumero}`)

//encontrar o numero 5 e o mostrar seu indice
vetor = [7, 3, 1, 4, 2, 5, 8, 7, 6, 9, 21]

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === 5){
        console.log(`Numero encontrado ${vetor[i]} e sua posição é ${i}°`)
    }

}