var foo = "hola mundo";
foo = 500;
console.log(foo) //Output 500
//exiten variables locales y globales

//forma global 
var animal = 'perro';

//forma local : es cuando la declaramos dentro de una función
function hello(){
    var nombre = "paul";
    console.log(nombre);
}

//otro ejemplo donde acortamos operadores, puede ser con +,-,* etc

var numero = 1;
numero += 1;

console.log(numero);//output 2