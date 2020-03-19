//son igual que los maps, no existe key ni value y no se puede repetir debe ser un valor unico
// se usan en array para evitar usar un for y validar todos los elementos del array si hay alguno que sea similar a otro
const set = new Set();

set.add("blue");
set.add("red");
set.add("true");
set.add(() => {});
set.add(12333); 

console.log(set.values()); //output{'blue','red',true,[function],12333}

//otra forma de obtener los valores

set.forEach(e => {
    console.log(e)
});
/*output 
blue
red
true
[function]
12333
*/


