function sayHello() {
  return "hola";
}

console.log(sayHello());

/*Un ejemplo de suma */
function Sum(n1, n2) {
  return n1 + n2;
}

var result = Sum(4, 5);
console.log(result); //Output 9

/*Funcion anonima*/
var sayMyFavoriteColor = function(){
    return 'black';
}
console.log(sayMyFavoriteColor());

/*Las funciones pueden retornar otras funciones */
function sayMyColor(color){
    return function(fruit){
        return 'color' + color + 'fruit' + fruit;
    }
}

var valor1 = sayMyColor('Green')('Apple');
console.log(valor1);

/*Funcion anonima autoejecutada */
var myAge = (function(age){
    return age;
})(22); //Input myAge - Output 22

/*Una función puede recibir como parametro otra función*/
function execute(fn){
    fn();
}
execute(function(){
    console.log('Ejecutando una funcion')
})