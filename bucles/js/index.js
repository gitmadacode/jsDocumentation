//Nos sirven para recorrer un array,ejecutar una sentencia x cantidad de veces etc

//for,  debe tener algo que le indique cuando parar y cuando seguir
//(x es igual a 0,x es menor a 10 por lo tanto ejecuta el codigo hasta que la condicion no se cumpla)
for(var x = 0; x < 10; x++){
    console.log('Practica',x);
}//output practica 1, practica 2 ....

//ahora recorrer un array
var frutas = ['manzana','melon','banana','piña'];

for (var x = 0; x < frutas.length; x++ ){
    console.log(frutas[x])
} // output manzana, melon ....

// queremos agregar 10 estudiantes a un objeto
var students = [];

for(var x = 0; x < 10; x++){
    students.push('estudiante' + x);
}
console.log(students); //output estudiante1,estudiante2,... length 10


/*Bucle while */
var i = 0;
//mientras i sea menor que 10 se ejecute el codigo 
while(i<10){
    students.push('student' + i);
    i++;
}
console.log(students);//output estudiante1,estudiante2,... length 10

/*Bucle do while */
do {
    students.push('student' + i);
    i++;
}   while(i<10);

console.log(students);//output estudiante1,estudiante2,... length 10

/*for in   ,  parecido al for pero con sintaxis menor*/
var animales = ['perro','gato','leon'];
for(var index in animales){ // este bucle se recorrera la cantidad de veces que tenga nuestr bucle
    console.log(animales[index]);
}
//output perro,gato,leon


/*for of */
var miembros = [{
    id: 1,
    name: 'yukina'
},{
    id:2,
    name: 'rinko'
},{
    id:3,
    name:'ako'
}];

for(var index of miembros){ // este bucle se recorrera la cantidad de veces que tenga nuestr bucle
    console.log(index.name); //output yukina,rinko,ako
}

/*Si no quiero imprimir un numero en especifico */

for(var x=0; x<10; x++){ // este bucle se recorrera la cantidad de veces que tenga nuestr bucle
    if(x == 5){
        continue;
        //break; si queremos que se detenga el bucle al llegar a 5 
    }
    console.log(x);
}
//output 0 1 2 3 4 6 7 8 9