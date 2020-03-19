//Tipos: Son tipos de datos que se pueden almacenar en memoria
//Valores: Son los valores que pueden almacenar los tipos de datos
//Operadores: Son los elementos de un programa que nos sirven para asignar o producir un nuevo valor

//Existen 6 tipos básicos de valores en JS:
// 1-Numeros   (Numbers)
// 2-Cadenas   (String)
// 3-Boleanos  (Boolean)
// 4-Objetos   (Object)
// 5-Funciones (Function)
// 6-Valores indefinidos (undefined y null)

/*Numbers: familia de numeros*/
15,-30,0.50
NaN, Infinity

(5 + 5)     //10
(10 - 5)    // 5
(5 * 5)     //25
(10 / 5)    //2
(10 % 2)    //0
(10 % 3)    //1

/*String: Cadenas de texto */
"",''
"Kasumi",'Sayo'
'Hola, ' + 'que deseas comer?'

/*Boolean: 0,1 - si,no - alto,bajo - encendido,apagado - true,false */
// &&,||,<,>,<=,>=,==,!=

(1 == 1)           //true
("Perro" == 2)     //false
(5 < 10)           //true
(2 == 2 && 5 < 10) //true, puede usarse para hacer referencia a varias condiciones, sera true cuando todas sus condiciones se cumplan
(true || false)    //true, basta que una de las condiciones sea verdadera para dar true 
(false || 5 < 55)  //true

/*Objects: Unidad dentro de un programa de computadora que consta de un estado y de un comportamiento */
{key: value}
//{id:1,run: function(){console.log('Los objetos pueden almacenar funciones');}}

/*Functions: Es una sección del programa que calcula o ejecuta algo independiente al resto del programa */
function myFunction() {/*Codigo */}

function SayMyName(name){
    console.log('Hello' + name);
}
SayMyName('Juan'); //Helo juan

//Valores indefinidos : ausencia de valor
undefined, null

/*typeof: nos retorna el tipo de valor */
typeof 1        //number
typeof 'hola'   //string
typeof {id:1}   //object