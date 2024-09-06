//Teste 1: Calculo do valor da variável SOMA

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1
    SOMA = SOMA + K;

}

console.log(SOMA); 
//  A variável SOMA será igual a 91


//Teste 2: Verificação se um número pertence a sequência de Fibonacci

function pertenceFibonacci(n) {
    let a = 0;
    let b = 1;
    if (n === 0 || n === 1) return true

    while (b < n) {
        let temp = b;
        b = a + b
        a = temp;

    }

    return b === n;


}


const numero = 21; 
if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`)
} else {

    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);

}


//Teste 3: Cálculo do faturamento diário

const faturamento = []

function calcularFaturamento(faturamento) {
    const faturamentoValido = faturamento.filter(valor => valor > 0)
    const menor = Math.min(...faturamentoValido);
    const maior = Math.max(...faturamentoValido)
    const media = faturamentoValido.reduce((a, b) => a + b, 0) / faturamentoValido.length;


    const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > media).length;

    return {

        menorValor: menor,
        maiorValor: maior,
        diasAcimaDaMedia: diasAcimaDaMedia

    }

}

const resultado = calcularFaturamento([100, 200, 300, 0, 50, 10, 400]);
console.log(`Menor valor: R$${resultado.menorValor}`);
console.log(`Maior valor: R$${resultado.maiorValor}`)
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`)



//Teste 4: Cálculo do percentual de representação por estado

const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,

}

function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((a, b) => a + b, 0)
    const percentuais = {}


    for (const estado in faturamento) {

        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + '%';

    }

    return percentuais

}

const percentuais = calcularPercentuais(faturamentoMensal)
console.log(percentuais);

//Teste 5: Inversão de caracteres de uma string

function inverterString(str) {
    let invertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i]

    }

    return invertida;
}


const texto = "exemplo";
const textoInvertido = inverterString(texto)
console.log(textoInvertido)
