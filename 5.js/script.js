let valor1 = prompt('Digite o primeiro valor:');
let valor2 = prompt('Digite o segundo valor:');
let valor3 = prompt('Digite o terceiro valor:');

let maiorValor;

if (valor1 >= valor2 && valor1 >= valor3) {
    maiorValor = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
    maiorValor = valor2;
} else {
    maiorValor = valor3;
}

alert('O maior valor é: ' + maiorValor);
