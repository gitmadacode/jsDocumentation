//Los objetos pueden almacenar propiedades y funciones u otro objeto, o funciones con un objeto
var Person = {
  id: 1,
  name: "Chisato",
  talk: function() {
    console.log("Ejecutando una funcion dentro de un objeto");
  },
  isStudent: true,
  cityInfo: {
    name: "new york"
  },
  schoolName: function(){
      return{
          name: "Yudec"
      }
  }
};

console.log(Person.id); //Output 1
Person.talk(); //Output "Ejecutando una funcion dentro de un objeto"
console.log(Person.cityInfo.name); //Output "new york"
console.log(Person.schoolName().name);//Output "Yudec"

//Agregar una propiedad desde afuera al objeto
Person.age = 22;
console.log(Person.age); //Output 22

//Eliminar una propiedad del objeto
delete Person.age;
console.log(Person) // Output no estara person