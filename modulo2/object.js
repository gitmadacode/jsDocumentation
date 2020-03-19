const dog = {
    name: 'tom',
    run: function () {
        console.log("I'm running"); 
    }
}
console.log(dog.name); //Output tom
console.log(dog.run());//Output I'm running

//Que pasa si necesito crear varios objetos?
//Para ello usaremos una "factoria", le destinamos la responsabilidad de crear nuestros objetos

function createDog(name) {
  return {
    name,          //en la  nueva ver de js no es necesario poner name: name
    run: function () {
        console.log("I'm running"); 
    }
  }
}

const pitbull = createDog.name("Bobby");
const bulldog = createDog.name("Iggy");
const fox = createDog.name("Doly");

console.log(pitbull.name);
console.log(bulldog.name);
console.log(fox.name);

