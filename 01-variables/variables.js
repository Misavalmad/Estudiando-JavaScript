/* Antes de 2015, solo existía la palabra reservada var para declarar variables. 
Esto causaba problemas de alcance (scope) y hoisting, lo que podía llevar a errores difíciles de depurar. 
Con la introducción de ES6 en 2015, se añadieron dos nuevas formas de declarar variables: let y const. 
Estas nuevas palabras reservadas ofrecen un mejor control sobre el alcance y la mutabilidad de las variables. */

//Una variable es un espacio nombrado en la memoria RAM, el cual se utiliza para almacenar, recuperar y manipular datos durante la ejecucion de un programa.

//JavaScript es un lenguaje de programacion de tipado dinamico, es decir, que una variable puede cambiar de tipo de dato en cualquier momento a diferencia de otros lenguajes que estrictamente tienes que poner el tipo de dato que va a almacenar una variable.

//Para definir variables en JavaScript, es tan facil como escribir la palabra reservada const, o let, o var, seguido del nombre que le queramos dar a la variable y luego el signo de = (que significa asignar, no igual a...) para despues almacenar el dato deseado.

//Asi definimos una variable constante, es decir, que su valor no va a cambiar:

const pi = 3.1416;

//es constante porque el valor de pi siempre ha sido asi, no se puede cambiar, y al llevar decimales, es un dato de tipo float.

//Asi definimos una variable que si puede cambiar, que NO es constante:

let edad = 25;

//como la edad puede cambiar con el tiempo, nos sirve de ejemplo. Y como es un numero entero, es un dato de tipo integer.

//Asi definimos la variable antigua de var:

var dueñoDelRepo = 'Misa';

//Como la variable var es de alcance global, uso mi propio nombre, realmente no se me ocurre un escenario donde se siga usando var con fines practicos.
//El dato dentro de esta variable esta entre comillas 'simples', lo que signica que es un dato de tipo string, tambien podemos usar comillas "dobles", pero personalmente me gustan mas las simples por practicidad.
//Aunque hay algunos lenguajes que a fuerza necesitan comillas dobles como Java.

//Vamos a jugar con el alcance de la variable var.
//Esto todavia no lo vemos pero quiero que vean a que me refiero con el alcance o scope.

function miraElVar() {
    var yoSoyVar = 'Estoy en todas partes';
    let yoSoyBart = 'Yo estoy atrapado aqui, ayuda por favor te lo suplico';
}

//Por lo que almacene en esas variables ya sabran que pasara, pero miren como actua si abres la consola (F12 o click derecho y luego Inspeccionar).

console.log(yoSoyBart);
console.log(yoSoyVar);

//Viste? espero que si, si no, pues que aguado eres.

//Bueno, son las 6:20 am, luego le sigo, ya me voy a mimir.
