var nota1 = Number(prompt('Digite a primeira nota:'))
var peso1 = Number(prompt('Digite o peso da primeira nota:'))

var nota2 = Number(prompt('Digite a segunda nota:'))
var peso2 = Number(prompt('Digite o peso da segunda nota:'))

var nota3 = Number(prompt('Digite a terceira nota:'))
var peso3 = Number(prompt('Digite o peso da terceira nota:')) 

var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)
var somaPesos = peso1 + peso2 + peso3

var mediaPonderada = somaNotas / somaPesos

console.log('A média ponderada é: ' + mediaPonderada)
