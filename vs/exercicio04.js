
let vetor01 = [1, 3, 5, 7, 9]
let vetor02 = [2, 4, 6, 8, 10]
//vetor = [v1/0 - v2/0 - v1/1 - v2-1] 
let vetor03 = []
let j = 0 
for(let i = 0 ; i < 5; i++){
vetor03[j] = vetor01[i]
j++
vetor03[j] = vetor02[i]
j++
}
console.log(vetor03)
