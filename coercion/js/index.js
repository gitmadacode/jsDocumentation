
//coercion es el termino que se usa para el resultado de tipos inesperados en js

//implicita (convierte los valores)
var f = 1 - "22";
console.log(f); //Output 21
//Booleans
var a = 100;
var b = "test";
var c = null;

a || b; //100
a && b; //'test'

//Igualaciones
// == comparando su valor
'a' == 'a' //true
'1' == 1 // 1 == 1 //true
'1' === 1 //false por que js no va a hacer la coerción

