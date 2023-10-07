let operaciones = {
    dividir: function (num1, num2) {
        let resultadoOMensaje; 
        if (num1 ==0 || num2 == 0){
            resultadoOMensaje = "No se puede dividir";
        }
        else{
            resultadoOMensaje = num1/num2;
        }
        return resultadoOMensaje;
    },
    multiplicar:  (num1, num2) => num1*num2,
    restar: function (num1, num2) {
        return num1 - num2;
      },
    sumar: function(num1, num2) {
        return num1 + num2;
      }

}

module.exports = operaciones;

