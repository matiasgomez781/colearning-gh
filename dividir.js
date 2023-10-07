function dividir(num1, num2) {
    let resultadoOMensaje; 
    if (num1 ==0 || num2 == 0){
        resultadoOMensaje = "No se puede dividir";
    }
    else{
        resultadoOMensaje = num1/num2;
    }
    return resultadoOMensaje;
  }

  module.exports = dividir;
