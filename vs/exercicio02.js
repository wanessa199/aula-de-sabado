/**Escreva um algoritmo que solicite ao usuario a entrda de 5 números, e que exiba a soma, o programa deve mostrar também os números que o usuario digitou. */
let vetor = []
let acumuladora = 0
for(let i = 0; i < 5; i++){
    vetor[i] = Number(prompt("Digite um valor"))
    acumuladora = acumuladora + vetor[i]
}

document.write(`<h3>${vetor}</h3>`)
document.write(`<h4>A soma dos valores ${acumuladora}</h4>`)