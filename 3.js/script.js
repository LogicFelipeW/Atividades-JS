let valor = prompt('Digite o valor em reais (R$):');


let dolar = 5.46; 
let euro = 6.07;  

let valorDolar = valor / dolar;
let valorEuro = valor / euro;


alert('Valor em dólares:  ' + valorDolar.toFixed(2) + '\nValor em euros:  ' + valorEuro.toFixed(2));
