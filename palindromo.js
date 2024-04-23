function Palindromo(str) {
    const strLimpa = str.toLowerCase().replace(/[\W_]/g, '');
    return strLimpa === strLimpa.split('').reverse().join('');
}

module.exports = Palindromo;