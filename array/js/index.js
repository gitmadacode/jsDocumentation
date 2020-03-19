//Array coleccion de strings valores object funciones o incluso otro array

var frutas =['manzana','pera', true, function(){},[],{}];
console.log(frutas[0])

//si deseamos saber la cantidad de elementos
console.log('Cantidad de elementos: ', frutas.length)
//ver el ultimo elemento
console.log('ultimo elemento',frutas[frutas.length - 1])
//agregar un elemento con push
frutas.push('Mango');
//pop elimina el ultimo elemento
frutas.pop();