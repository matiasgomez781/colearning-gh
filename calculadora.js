/* let dividir = require('./dividir.js');
let multiplicar = require('./multiplicar.js');
let restar = require('./restar.js');
let sumar = require('./sumar.js');

console.log(dividir(10, 0));
console.log(dividir(10, 2));
console.log(multiplicar(10, 2));
console.log(restar(10, 2));
console.log(sumar(10, 2)); */

let operaciones = require('./operaciones.js');

//funcion callback
let calculadora = function (num1, num2, operacion) {
    let objeto = {
        operacion: operacion.name,
        valores: [num1, num2],
        resultado: operacion(num1,num2)
    }
    return objeto;
}

console.log(calculadora(10, 3, operaciones.sumar));
console.log(calculadora(10, 3, operaciones.restar));
console.log(calculadora(10, 3, operaciones.multiplicar));
console.log(calculadora(12, 3, operaciones.dividir));



/*console.log(operaciones.dividir(10, 0));
console.log(operaciones.dividir(10, 2));
console.log(operaciones.multiplicar(10, 2));
console.log(operaciones.restar(10, 2));
console.log(operaciones.sumar(10, 2));*/