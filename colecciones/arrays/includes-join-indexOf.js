//Array.includes , verificar si un objeto existe o no en un array

const animals = ["dog","cat","horse","fox"];

const exist = animals.includes("fish");

console.log(exist); //Output False (no existe un pez)


//Array.join nos retorna un string de la combinacion de todos nuestros elementos
const joins  = animals.join();

console.log(joins);//dog,cat,horse,fox

//Array.indexOf nos retorna la posicion de un elemento del array

const exist = animals.indexOf("fox");

console.log(exist); //Output 3