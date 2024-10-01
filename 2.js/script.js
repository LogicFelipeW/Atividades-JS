let peso = prompt('Digite o seu peso:');
let h = prompt('Digite a sua altura:');


let imc = peso / (h * h);

let classificacao;

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc < 29.9) {
    classificacao = 'Sobrepeso';
} else if (imc >= 30 && imc < 34.9) {
    classificacao = 'Obesidade de grau 1';
} else if (imc >= 35 && imc < 39.9) {
    classificacao = 'Obesidade de grau 2';
} else {
    classificacao = 'Obesidade de grau 3';
}


alert('Seu IMC é: ' + imc + '\nClassificação: ' + classificacao);