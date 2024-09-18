var nota1 = prompt('Digite a primeira nota:') * 1;
var peso1 = prompt('Digite o peso da primeira nota:') * 1;

var nota2 = prompt('Digite a segunda nota:') * 1;
var peso2 = prompt('Digite o peso da segunda nota:') * 1;

var nota3 = prompt('Digite a terceira nota:') * 1;
var peso3 = prompt('Digite o peso da terceira nota:') * 1;

var somaNotas = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
var somaPesos = peso1 + peso2 + peso3;

var mediaPonderada = somaNotas / somaPesos;

console.log('A média ponderada é: ' + mediaPonderada);
