function ordenarNumeros(numeros, ordem = 'asc') {
    if (!Array.isArray(numeros)) {
        throw new Error('A entrada deve ser um array de números.');
    }

    if (ordem !== 'asc' && ordem !== 'desc') {
        throw new Error('A ordem deve ser "asc" (crescente) ou "desc" (decrescente).');
    }

    const numerosOrdenados = numeros.slice().sort((a, b) => {
        if (ordem === 'asc') {
            return a - b;
        } else {
            return b - a;
        }
    });

    return numerosOrdenados;
}

module.exports = ordenarNumeros;