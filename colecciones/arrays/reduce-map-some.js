//Array.map, recibe como argumento un callback donde va a arecebir instrucciones para evitar elementos
const numbers = [2,4,6,8,10,12,14,16,18,20,22,24];
//A cada numero que tu me analices , sumale 1
const impars = numbers.map((number) => number + 1); //Output 3,5,7,9,11,13,15,17,19,21,23,25


//Array.some valida de que varios elementos de una determina coleccion cumplan con una condicion , no retorna un boleano
console.log(numbers.some(number => number >16))//Output true


//Array.reduce
//todos los argumentos que les envie a mi function sum, no importa la cantidad , el me los transforamara en un array llamado args
function sum(...args){
    return args.reduce((prev,next) => prev + next);
}

console.log(sum(1,2,3,4,5,6));//Output 21

//en caso de que no le pasemos argumentos debemos poner un 0 , sirve como default
function sum(...args){
    return args.reduce((prev,next) => prev + next);
}
console.log(sum());//Output 0
