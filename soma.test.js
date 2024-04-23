const somar = require('./soma.js')
test('A soma está correta', () =>{
    expect(somar(1,2)).toBe(3)
})

const { adicao, subtracao, multiplicacao, divisao } = require('./calculadora');
test('Teste de adição 11 + 12', () => {
  expect(adicao(11, 12)).toBe(23);
});

test('Teste de subtração 5 - 5', () => {
  expect(subtracao(5, 5)).toBe(0);
});

test('Teste de multiplicação 1 * 6', () => {
  expect(multiplicacao(1, 6)).toBe(6);
});

test('Teste de divisão 100 / 2', () => {
  expect(divisao(100, 2)).toBe(50);
});


const Palindromo = require('./palindromo');
test('Teste para palíndromo "arara"', () => {
  expect(Palindromo('arara')).toBe(true);
});

test('Teste para não palíndromo "banana"', () => {
  expect(Palindromo('banana')).toBe(false);
});


const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./convertemp');
test('Conversão de 0°C para Fahrenheit', () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('Conversão de 32°F para Celsius', () => {
  expect(fahrenheitParaCelsius(32)).toBe(0);
});



const validcpf = require('./validcpf');
test('CPF válido: 123.456.789-09', () => {
  expect(validcpf('123.456.789-09')).toBe(true);
});

test('CPF inválido: 123.456.789-10', () => {
  expect(validcpf('123.456.789-10')).toBe(false);
});


const isPrime = require('./numprimo.js');
test('Números primos', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
});

test('Números não primos', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
});


const ordenarNumeros = require('./ordemlist');

describe('Função ordenarNumeros', () => {
    test('ordena números em ordem crescente', () => {
        const numeros = [5, 2, 9, 1, 7];
        expect(ordenarNumeros(numeros)).toEqual([1, 2, 5, 7, 9]);
    });

    test('ordena números em ordem decrescente', () => {
        const numeros = [5, 2, 9, 1, 7];
        expect(ordenarNumeros(numeros, 'desc')).toEqual([9, 7, 5, 2, 1]);
    });

    test('lança um erro se a entrada não for um array', () => {
        const entradaInvalida = 'não é um array';
        expect(() => ordenarNumeros(entradaInvalida)).toThrow('A entrada deve ser um array de números.');
    });

    test('lança um erro se a ordem não for "asc" ou "desc"', () => {
        const numeros = [5, 2, 9, 1, 7];
        const ordemInvalida = 'invalida';
        expect(() => ordenarNumeros(numeros, ordemInvalida)).toThrow('A ordem deve ser "asc" (crescente) ou "desc" (decrescente).');
    });
});