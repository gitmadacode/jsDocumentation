//Operador tenario es un condicional como el if o el switch pero con una sintaxix menor
if(1<5){
    console.log('Es menor');
}else{
    console.log('Es mayor');
}

(1<5)? console.log('Es menor') : console.log('Es mayor')
/*otro ejemplo con anidados */

((1<5)&& true) ?   // esto da true por lo que pasa a la siguiente linea
(true || false) ? console.log('Se cumplio la segunda condición') : console.log('No se cumplio') //tambien produce true , por lo que responde true
: console.log('Es mayor') // este seria el else de la primera linea en caso de que no se cumpla la condicion