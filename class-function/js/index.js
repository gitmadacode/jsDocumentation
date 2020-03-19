function Person(name,lastname){
    this.name = name || 'nombre por defecto';
    this.lastname = lastname || 'apellido por defecto';

    this.greet = function () {
      return 'hola '+ this.name + ' tu apellido es ' + this.lastname;
    };
}
var marluan = new Person('juan','blanco');
var ernesto = new Person();

console.log(marluan.greet());
console.log(ernesto.greet());
/*en la version 6 existen los constructores */

class Person {
    constructor(){
        
    }
}