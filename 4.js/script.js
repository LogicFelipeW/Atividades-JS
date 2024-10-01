let operacao = prompt('Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão');
let valor1 = prompt('Digite o primeiro valor:');
let valor2 = prompt('Digite o segundo valor:');

let resultado;

if (operacao == '1') {
    resultado = valor1 + valor2;
    alert('Resultado da soma: ' + resultado);
} else if (operacao == '2') {
    resultado = valor1 - valor2;
    alert('Resultado da subtração: ' + resultado);
} else if (operacao == '3') {
    resultado = valor1 * valor2;
    alert('Resultado da multiplicação: ' + resultado);
} else if (operacao == '4') {
    
    if (valor2 !== 0) {
        resultado = valor1 / valor2;
        alert('Resultado da divisão: ' + resultado);
    } else {
        alert('Erro: Divisão por zero!.');
    }
} else {
    alert('Erro! Escolha entre 1, 2, 3 ou 4.');
}
