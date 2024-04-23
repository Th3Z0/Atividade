function validcpf(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
  
    if (cpf.length !== 11) {
      return false;
    }
  
    const todosDigitosIguais = cpf.split('').every(digito => digito === cpf[0]);
    if (todosDigitosIguais) {
      return false;
    }
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
  
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
  

    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
}

module.exports = validcpf;