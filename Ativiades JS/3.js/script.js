var valor = prompt('Digite o valor em reais (R$):') * 1;


var dolar = 5.46; 
var euro = 6.07;  

var valorDolar = valor / dolar;
var valorEuro = valor / euro;


alert('Valor em dólares:  ' + valorDolar.toFixed(2) + '\nValor em euros:  ' + valorEuro.toFixed(2));
