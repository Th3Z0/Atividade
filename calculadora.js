module.exports = {
adicao: function(num1, num2){
    return num1 + num2;
},

subtracao: function(num1, num2){
    return num1 - num2;
},

multiplicacao: function(num1, num2){
    return num1 * num2;
},

divisao: function(num1, num2){
    if (num2 === 0) {
        return "Não existe divisão por 0";
    } else {
    return num1 / num2;
    }
}
};