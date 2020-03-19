//forma mas basica de declararlos
const array = [];

//Array.from crea una instancia de array a partir de un objeto iterable
const name = "lucas";
const array = Array.from(name); 

console.log(array); //Output ['l''u''c''a''s']

//Array.isArray  para validar si un elemento es de tipo array 
const array = [1,2,3];

console.log(Array.isArray(array));  //output true

//Array.of crea un nuevo array a partir de un n° de argumentos pasados sin importar el numero o el valor
const array =  Array.of(1,2,3,4,5,null);

console.log(array); //Output [1,2,3,4,5,null]

//Array.concat , crear un array a partir de otros

const array1 = ["a","e","i"];
const array2 = ["o","u"];

const array = array1.concat(array2);
console.log(array);//out [a,e,i,o,u]

//otra forma utilizando el operador spread
const arraySpread = [...array1, ...array2];//out [a,e,i,o,u]

//Array.entries  retorna un nuevo obj array iterator que contiene los pares clave y valor para cada indice de la matriz
const vowels = ["a","e","i","o","u"];

const iterator = vowels.entries();

console.log(iterator.next().value);//Output [0,'a']

//Array.every devuelve un booleano, si todos los elementos pasaron la condicion o si uno de ellos no la paso
//es decir si todos cumplieron con la condicion dada, retorna true , si no false
const numbers = [3,6,19,24,38];

function esMenorDeCincuenta(number){
    return number < 50;
}
console.log(numbers.every(esMenorDeCincuenta)); //Output true
//otra forma con menos code
console.log(numbers.every(e => e < 50));//Output true
