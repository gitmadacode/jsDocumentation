//Array.find / que te retorne un elemento con una condicion dada , find retorna el primero solamente
const numbers = [1,4,6,2,7,9,8];
// e = elemento , find recorrera el array y el primer numero mayor a 4,lo mostrara
console.log(numbers.find((e) => e > 4 ));//Output 6

//Array filter, filtra los diversos elementos de un array dependiendo de una condicion dada

console.log(numbers.filter((e) => e > 2 ));//Output [4,6,7,9,8]

//Array.forEach, es un bucle , que recibe un callback que manipulara
numbers.forEach((e) => {
    console.log(e + 2);  //Output , le sumara 2 a cada elemento 2,6,8...
})
//otro ejemplo donde impirme el array completo mas el key 
numbers.forEach((e,i,o) => {
    console.log(e,i,o);  
})
