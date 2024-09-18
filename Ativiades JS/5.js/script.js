var valor1 = prompt('Digite o primeiro valor:') * 1;
var valor2 = prompt('Digite o segundo valor:') * 1;
var valor3 = prompt('Digite o terceiro valor:') * 1;

var maiorValor;

if (valor1 >= valor2 && valor1 >= valor3) {
    maiorValor = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
    maiorValor = valor2;
} else {
    maiorValor = valor3;
}

alert('O maior valor é: ' + maiorValor);
