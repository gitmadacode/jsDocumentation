//el scope de una variable hace referencia del lugar donde va vivir esta o de donde podra ser accesible
//tenemos 3 tipos:  global-local(solo viviran en el scope de la funcion donde son creadas)-bloque

var bar = "Maruluan";

function getName() {
  //var bar = 'Ernesto'    //si no encuentra en su scope local el sale fuera y si la encuentra en el global la retorna
  return window.bar;
}

console.log(getName());
/*otro ejemplo donde usamos this para hacer referencia al scope de un objeto*/

var name_ = 'Juan';

var Person = {
    name_: 'Pedro',
    lastname: 'popipa',
    age: 22,
    getCompleteName(){
        return this.name_+' '+this.lastname;
    }
}

console.log(Person.getCompleteName());

//para retornar la propiedad usamos this , pero tambien se puede usar el nombre del object en este caso Person

/*Problemas con los scopes(perdida de referencia)*/

var myObj ={
  bar: 'foo',
  func: function() {
    console.log(this.bar);
    //creamos una funcion anonima autoejecutable, cuando hacemos una fun anonima esta pierde la referencia del objeto en la que se encuentra
    //esto se soluciona con arrow function de ecma
    (function(){
    console.log(this.bar);
    })();
  }
}
myObj.func();



