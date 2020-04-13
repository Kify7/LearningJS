// console.log('Funciona'); --> probando que el archivo se encuentra enlazado correctamente al index.html

/* En JS existen tres maneras de crearvariables */
/* CREANDO VARIABLES CON VAR */
var nombre;
var edad;

// definiendo variables
nombre = 'Juan';
edad = '33';

// probando en consola

console.log(nombre);
console.log(edad);

// lo mismo, utilizando solo un "var"

var estatura, peso;

estatura = '1.70m';
peso = '73kg';

// probando en consola

console.log(estatura);
console.log(peso);

// lo mismo, identando correctamente las variables

var curso,
    modulo;

curso = 'WebDev';
modulo = "JS";

// probando en consola

console.log(curso);
console.log(modulo);

// cuando una variable no tiene valor, se llama "indefinida"

var materia;
console.log(materia); /* imprime "undefined en consola" */

// al agregarle valor a la variable, la defines, pero lee primero el código d ela línea indefinida:

materia = 'sintaxis';
console.log(materia); /* imprime "sintaxis", despues de haber impreso "undefined" */
// lo anterior quiere decir que de acuerdo a la ejecución de código, se definen los valores de las variables

/* Consideraciones para Variables */
// que el nombre de la variable sea descriptivo
// se pueden usar números pero siempre empiezan con letras
// carácteres especiales no se usan ni funcionan excepto guión bajo _
 var nombre1 = 'Pedro';
//  var 1nombre = 'Pablo';

 console.log(nombre1); /* bien escrita */
//  console.log(1nombre); Marca error

// para usar más de un nombre, utilizar camelCase, underscore o pascal case:
var nombreAlumno = 'Pablo'; /* esto es camelCase recomendado para JS*/
console.log(nombreAlumno);

var nombre_profesor = 'Paco';/* esto es underscore recomendado para PHP */
console.log(nombre_profesor);

var NombreSalon = 'José Vasconcelos' /* esto es pascal case */
console.log(NombreSalon);

/* CREANDO VARIABLES CON "LET" esto es ES6 */

// let es similar a var , porque no requiere que se defina el valor de la variable inmediatamente:
let apellido;
console.log(apellido); /* imprime undefined en consola */
// después le podemós añadir un valor
apellido = 'Flores';
console.log(apellido);/* imprime el valor de la variable (después de establecerlo como undefined según la ejecución del código) */

// diferencias entre Var y Let
// usamos una misma variable con var dandole diferentes valores y luego imprimimos en consola:
var nombreYapellido = 'Karen Flores';
var nombreYapellido = 'Karla Flores';
console.log(nombreYapellido); /* imprime en consola el último valor definido para esta variable */

// ahora hagamos lo mismo con let
let cursoYmodulo = 'WebDev JS';
/* let cursoYmodulo = 'WebDev HTML5'; */
/* console.log(cursoYmodulo); */ /* imprime error en la consla, indicando que esa variable ya existe */

/* CREANDO CONSTANTES */
// a dferencia de var y let, la constante siempe debe de tener un valor definido:

/* const diplomado: */
/* console.log(diplomado) */; /* sin valor la constante, marca error en consola */

const diplomado = 'FullStack'
console.log(diplomado); /* está constante está bien definida , imprime el valor en consola */

// usar const tampoco permite cambiar su valor durante la ejecución del programa a diferencia de var:

/* const diplomado = 'WebDev Fullstack'; */
/* console.log(diplomado); */ /* imprime error en la consola diciendo que el valor ya ha sido declarado previamente */

//  EJEMPLO PRÁCTICO PARA EMPLEAR CONSTANTES:

// creamos en el index.html un div con id 'mensaje':

const divMensaje = document.getElementById('mensaje');
console.log(divMensaje); /* devuelve en consola, el pedazo de html que contiene el id */
// el id al ser parte del html nunca cambia, pr lo cual es utilizado como valor para una constante determinada


/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
/* ////////// TIPOS DE DATOS EN JS ////////////*/
// son los valores que agregamos a las variables o constantes

/* STRRINGS */ /* Cadenas de texto */
// los strings se definen entre '' (comillas simples o comillas dobles sin mezclarlas)

/* let nombrePadre = Rodrigo; */ /* el estring está mal definido  por no usar comillas*/
let nombreMadre = 'Angélica'; /* el string está bien definido */
let nombreHermano = "Arturo"; /* el estring está bien definido */
/* let nombreHermana = 'Claudia"  */ /* el estring está mal definido  por mezclar comillas*/
/* console.log(nombrePadre); */ /* marca error diciendo que Rodrigo no esta definido, pensando que puede ser una función dentro de la variable */
console.log(nombreMadre); /* imprime el valor 'Angélica' en consola */
console.log(nombreHermano); /* imprime el valor "Arturo" en consola*/

// se puede usar comillas dentro de comillas para imprimir en consola una cita:
let mensaje = 'Entonces dije "hola mundo"';
console.log(mensaje); /* devuelve en consola el valor del string completo, usando las comillas dobles en la cita */
// para evitar errores en apóstrofes en ingles, se usa la diagonal invertida \:
let mensaje2 = 'Don\'t do that'; /* devuelve en consola el valor del string completo, usando el apóstrofe correcto en don't */
console.log(mensaje2);

// Concatenando valores de strings

let aprendiendo = 'Aprendiendo';
    tecnologia = 'JavaScript'

console.log(aprendiendo);/* devuelve Aprendiendo*/
console.log(tecnologia); /* devuelve JavaScript*/
/* console.log(aprendiento,tecnologia); */ /* marca error como no definido */
console.log(aprendiendo + tecnologia);  /* devuelve AprendiendoJavaScrip */
console.log(aprendiendo + ' ' + tecnologia);/* devuelve Aprendiendo JavaScript*/
console.log(aprendiendo + ' Hola ' + tecnologia);/* devuelve Aprendiendo Hola JavaScript */
console.log(`${aprendiendo} ${tecnologia}`); /* devuelve Aprendiendo JavaScript*/

// FUNCIONES PARA STRINGS

let banda = 'Metálica';
    cancion = 'Enter Sandman'

let nombre3;
 nombre3 = banda + ': ' + cancion;

 console.log(banda.length); /* devuelve 8 caracteres */
 
 nombre3 = nombre3.concat(" ", "y es genial");

console.log(nombre3);/* devuelve Metálica: Enter Sandman  y es genial */

// Métodos para Strings:
// Los métodos son funciones que se ejecutan con (), en donde se colocan los parámetros
// una función puede o no tener parámetros
// cuando a un método le hace falta (), en consola se mestra una f() que indica que no se puede ejecutar la función sin los ().

// Algunos Métodos:
// .lenght --> devuelve la longitud de caracteres.
// .concat --> es una función de lenguaje, toma dos parámetros y los concatena
// .toUpperCase --> todas mayúsculas
// .toLowerCase --> todas minúsculas

let bandaFavorita = 'Coldplay';
    cancionFavorita = 'Yellow';

let nombre4 = bandaFavorita + ': ' + cancionFavorita;
    console.log(cancionFavorita.length); /* devuelve 6 caracteres */
    
nombre4 = nombre4.toUpperCase();
console.log(nombre4); /* devuelve COLDPLAY: YELLOW */

// split --> divide una cadena de texto
 let actividad = 'Estoy aprendiendo JavaScript en el curso'

 accion = actividad.split(' ');
 console.log(accion); /* devuelve (6) ["Estoy", "aprendiendo" "JavaScript" "en" "el" "curso"] esto es un arreglo */
 
//  otro ejemplo de .split

let intereses = ('Leer, escribir, escuchar música, aprender código');
hobies = intereses.split(', ');
console.log(hobies); /* devuelve en consola, el arreglo de cada interes dividido por una coma */

// .replace --> reemplazar un valor por otro. Este método usa dos parámetros: el valos que se busca reemplazar y el valor por el cual será reemplazado

let hobby = 'Estoy aprendiendo JavaScript';
cambio = hobby.replace('JavaScript', 'JS');

console.log(cambio); /* devuelve en consola 'estosy aprendiendo JS' */

// .includes --> revisa que algo exista

let tarea = 'Aprender lenguaje de programacion';
    task = tarea.includes('programacion');

    console.log(task); /* devuelve el booleano "true" dado que es verdad que existe esa palabra en el arreglo */

let ecosistema = 'computadora, cafe, plantas, musica ambiental';
    ambiente = ecosistema.includes('aromatizante')
    ambientePerfecto = ecosistema.includes('cafe','plantas');
    ambienteCuasiPerfecto= ecosistema.includes('computadora','internet');
    
    console.log(ambiente);/* devuelve el booleano "false" dado que no existe la palabra aromatizante en el arreglo */
    console.log(ambientePerfecto); /* devuelve el booleano "true" dado que es verdad que existe esa palabra en el arreglo */
    console.log(ambienteCuasiPerfecto); /* devuelve el booleano "true" dado que es verdad al menos para un elemento del método */

// otro ejemplo del método .includes
let email = 'jklh@gnm.com';
    emailCorrect = email.includes('@');

    console.log(emailCorrect); /* devuelve true por que se encuentra una @ en la caden de texto */
    
// .repeat --> repite un elemento el número de veces indicado cómo parámetro

let theMusic = 'takes you let the rithym shakes you ';
    choir = theMusic.repeat(3);

    console.log(choir); /* devuelve la cadena de texto repetida tres veces */
    

/* NÚMEROS */ /* OPERACIONES */

const numero1 = 30,
      numero2 = '20',
      numero3 = 20.20,
      numero4 = -3;
      numero5 = 20
      numero6 = 15.99
    
    console.log(numero1); /* devuelve en consola el número en azul indicando que se trata de un número */
    console.log(numero2); /* devuelve en consola el número en negro indicando que se trata de texto */

    /* NOTA IMPORTANTE : JS ALMACENA EL TIPO DE DATO EN EL VALOR DE LA VARIABLE Y NO EN SU NOMBRE */

// SUMAS
let suma = numero1 +numero5;
console.log(suma); /* devuelve el resultado de la suma = 50 */
// RESTAS
let resta = numero3 - numero5;
console.log(resta); /* devuelve el resultado de la resta 0.199999999999 */
// MULTIPLICACIONES
let multiplicacion = numero4 * numero5;
console.log(multiplicacion); /* devuelve el resultado de la multiplicacion -60 */
// DIVISIONES
let division = numero5 / numero3;
console.log(division); /* devuelve el resultado de la division 0.9900990099009901 */

// LA CLASE MATH --> contiene todos los métodos para hacer cáculos en JS
// --------Redondear números
let redondeo = Math.round(2.5);
console.log(redondeo); /* devuelve el numero 3 redondeo del numero 2.5 */

let redondeoAbajo = Math.floor(numero6);
console.log(redondeoAbajo); /* devuelve el resultado de redondear 15.99 hacia su numero entero que se encuentre a la izquierda de la recta numérica  */

let redondeoArriba = Math.ceil(numero3);
console.log(redondeoArriba); /* devuelve el resultado de redondear el numero 20 hacia su entero proximo a la derecha de la recta numérica */
 
// --------Raíz cuadrada

let raiz = Math.sqrt(366);
console.log(raiz); /* devuelve el resultado de la raiz cuadrada del número en el parámetro */

// --------Valor absoluto
let absoluto = Math.abs(numero4);
console.log(absoluto);

// --------Elevar a la potencia--> este método ocupa dos parámetros() el primero el numero que se va a elevar , el sgundo la potencia a elevar
let potencia = Math.pow(8,3);
console.log(potencia);

// --------Número mínimo y máximo
let minimo = Math.min(numero1, numero3, numero4, numero5, numero6);
console.log(minimo); 

let maximo = Math.max(numero1, numero3, numero4, numero5, numero6);
console.log(maximo);

// --------Incrementos
// ++ -->incrementa en 1
let puntaje = 0;
    incremento1 = puntaje+1;
    console.log(incremento1);
    incremento2 = incremento1+1;
    console.log(incremento2);
    incremento3 = incremento2+1;
    console.log(incremento3);
    
    incremento4 = incremento3++;
    console.log(incremento4);
    
    incremento5 =++ incremento4
    console.log(incremento5);
    
// ===================================================================
// ===================================================================
// ===================================================================

/* DATOS */
let numero7 = 50;
    numero8 = "10";
    numero9 = "tres";
    numero10="20.20"

    console.log(numero7 + numero8); /* devuelve el numeo 5010 y no la operacion */
    console.log(numero7 - numero8);/* devuelve el resultado de operación 50 -10 a pesar de que el segundo dato es string JS lo convierte */
// Funciones para convertir strings a números
    console.log(Number(numero8) + numero7); /* devuelve el resulado de la operacion 10+50 = 60 */
    console.log(parseInt(numero8) + numero7); /* devuelve el resulado de la operacion 10+50 = 60 */
    console.log(parseInt(numero10) + numero7);/* realiza la operacion se suma usando solo enteros*/
    console.log(parseFloat(numero10) + numero7);/* realiza la operacion incluyendo decimales */

// otras conversiones
let dato;
dato = Number("20");/*  20 */
dato = Number("20.20"); /* 20.20 */
dato = parseInt("20.20");/* 20.20 */
dato = Number(true); /* 1 */
dato = Number(false);/* 0 */
dato = Number(null);/* 0 */
dato = Number('Hola mundo');/* NaN -->  no puede convertirse a número pero no marca error */
dato = Number([1,2,3,4,5]);/* NaN --> no marca error pero no puede convertir el arreglo a un numero */

console.log(dato);

// método .toFixed --> tiene un parámetro en el que se le indican el número de decimales a mostrar

let num = "1231323213123.1231231313"
let num2 = "1232314234124.12341324324"

console.log(Number(num).toFixed(4)); /* devuelve el número solo con 4 decimales pedidos en el parámetro del método */
console.log(Number(num2).toFixed(3)); /* devuelve el número solo con 3 decimales pedidos en el parámetro del método */


let datoTc = 2375293872638467;
datoTc = String(2375293872638467);
console.log(datoTc);
console.log(datoTc.length);/* esto solo funciona si el dato es un string, por lo que primero se convierte el numero a string */

let datoB = false;
dotoB = String(datoB);

console.log(datoB);
console.log(datoB.length);

let datox = String([1, 2, 3, 4, 5, 6]);
console.log(datox.length);



// Tipos de datos en JS usando método typeof

// string:
let fecha = '10 de octubre';
console.log(typeof fecha);

let hora = '2';
console.log(typeof hora);


// numero:
const medida = 80.8;
console.log(typeof medida);

// boolean:
let aprendiendoJS = true;
console.log(typeof aprendiendoJS);

let valor;
console.log(typeof valor);

// Ejemplo de JS como lenguaje dinámico respecto a los datos:
valor = 'hola';
console.log(typeof valor);

valor = true;
console.log(typeof valor);

valor = -20
console.log(typeof valor);

valor = '35';
console.log(typeof valor);

// Otros Tipos de Datos

// null --> tomado como objeto
let hijos = null;
console.log(typeof hijos); /* JS lo identifica como un objeto */

// variable no definida:

let playlist;
console.log(typeof playlist); /* su tipo de dato es undefined */

// Arreglos
let lenguajes = ['JS', 'HTML5', 'CSS', 'PHP', 'Java', 'C+' ];
console.log(typeof lenguajes); /* considearado como un objeto */

// Jason -- objeto
let persona = {
    nombre : "Julian",
    ciudad : 'México'
}
console.log(typeof persona);/* JS lo lee como objeto */

// La Fecha

let fecha1 = new Date ();
console.log(fecha1); /* devuelve la fecha y hora actual */
console.log(typeof fecha1);/* JS lo lee como objeto

// //////////////////////////////////////////
//  //////////////////////////////////////////
/* ///////////ARREGLOS///////// */
let numeros = [10, 20, 30, 50, 40];
console.log(numeros);
console.table(numeros); /*  devuelve una tabla del indice con el valor del arreglo */

// Creando arrreglos con -->new array
const meses = new Array('enero', 'febrero', 'marzo','abril','mayo','junio','julio');
console.table(meses); /*  devuelve una tabla del indice con el valor del arreglo */
console.log(meses[4]);/*  devuelve  el valor del índice 4 de acuerdo al arreglo */

const arreglo1 = ['Hola', 10, true, "si", null, undefined, 27, 'Rodrigo']
console.table(arreglo1);
console.log(arreglo1.length);/* para este arreglo, devuelve el numero 8 indicando que se trata de un arreglo de 8 elementos que van del 0 al 7 */
console.log(Array.isArray(arreglo1));/* este método es como preguntar si se trata de un arreglo, en este caso devuelve el valor booleano "true" dado que es cierto */

//  Acceder a un arreglo: se accede a los valore sde un arrego por medio del indice:
const verduras = ['lechuga', 'acelgas','espinacas', 'coles de bruselas',]
    /* 1. preguntamos si la variable verduras es un arreglo */
    console.log(Array.isArray(verduras)); /* true */
    /* 2. preguntamos la longitud del arreglo*/
    console.log(verduras.length);/* 4 (sabemos que hay 4 elementos que van en un índice del 0 al 3) */
    /* accedemos mediante el índice, al valor que queramos recordando que el indice va del 0 al 3 */
    console.log(verduras[3]); /* devuelve el valos del índice solicitado */
    
// Añadiendo elementos al arreglo:
    /* 1. forma sencilla  */
        /* añadimos cebolla al arreglo de verduras */
        verduras[5] = 'cebolla';
        /* volvemos a revisar el arreglo para comprobar que se haya añadido */
        console.table(verduras);
    /* 2. Forma RECOMENDADA */
        /* añadimos zanahoria al arreglo de verduras */
        verduras.push('zanahoria');
        /* revisamos el arreglo nuevamente */
        console.table(verduras); /* se ha añadido zanahoria al final del arreglo */
        /* NOTA: el método .push añade un elemento AL FINAL de un arreglo */
        
        /* añadiendo un elemento a  un arreglo escogiendo su índice */
        /* añadimos coliflor al arreglo de verduras */
        verduras.unshift('coliflor 0');
        /* revisamos el arreglo */
        console.log(verduras);
        /* nos damos cuenta de que re ha recorrido el índice, dejando el valos de coliflor con el índice 0 */
        /* agreguemos brocoli al índice 3 */
        verduras.unshift('brocoli 3');
        /* revisamos el arreglo */
        console.log(verduras); /* nos damos cuenta de que no funciona */
        /* NOTA: el método .unshift añade un elemento a un arreglo AL INICIO únicamente */
        
// Eliminando elementos de un arreglo;
    /* Al inicio */
    verduras.shift();
    console.log(verduras); /* brocoli se ha eliminado */
    
    /* Al final */
    verduras.pop();
    console.log(verduras); /* eliminamos brocoli */

    /* Eliminar de un rango del arreglo */
    /* el método splice toma 2 parámetros : a partir de cuando y cuántos elementos quieres eliminar */
    verduras.splice(1, 2);
    /* revisamos el arreglo */
    console.table(verduras); /* vemos que se eliminó el índice 1 que correspondía a lechuga y el índice 2 que correspondía a acelgas */

 // Cambiar el orden de los elementos de un areglo:
    /* método .reverse */
    let frutas =['manzana', 'pera', 'papaya', 'naranja', 'toronja', 'guayaba', 'fresa'];
    console.log(frutas);
    frutas.reverse();
    console.table(frutas);/* los elementos se colocan al revés, su íncdice cambia */

    /* método .sort */
    frutas.sort();
    console.log(frutas); /* los elemetos se colocan en orden alfabético */
    


// //////////////////////////////////////////////
////////////////////////////////////////////
/* //////////OBJETOS -- JASONS/////////////// */
/* OBJECT LITERAL */

const persona2 = {
    nommbre : 'Karla',
    apellidos : 'Flores Valona',
    año : '1988',
    age : 31,
    trabajo : true,
    musica : ['rock', 'rocakabilly', 'pop'],
    hogar : {
        ciudad : 'CDMX',
        pais : 'México',
    },
};
console.log(persona2);

// Acceder a Jasons mediante las propiedades:
console.log(persona2.age); /* devuelve 31 */
console.log(persona2.trabajo);/* devuelve el booleano true. */
console.log(persona2.apellidos);/* devuelve Flores Valona */

/* NOTA: los Jasons pueden contener todo tipo de datos, incluyendo otros jasons o arreglos dentro del mismo */

// Acceder a Jasons y arreglos dentro del JASON:
console.log(persona2.musica[2]); /* devuelve el valor "pop" */

    /*otra sintaxis para acceder a elementos dentro de objetos:  */
    console.log(persona2['hogar']['pais']);/* devuelve México */

// TEMPLATES STRINGS

let name = 'Kify Flores';
    trabajo = 'Developer'
    /* concatenamos dos lineas de html */
    console.log('Nombre: ' + name + ', Trabajo: ' + trabajo);
    /* concatenando con template string */
    console.log(`Nombre: ${name}, Trabajo: ${trabajo}`);

    const contenedorApp = document.querySelector('#mensaje');
    
/* Ejemplo de uso Template Srings */
    /* contatenamos usando signos de + */
    let html = '<ul>' +
                    '<li> Nombre: ' + name + '</li>' +
                    '<li> Trabajo: ' + trabajo + '</li>' +
                '<ul>';

    // contenedorApp.innerHTML = html;
    /* Concatenamos con Template Strings para ver la diferencia */ 

    let html2 = `<ul>
                    <li>Nombre: ${name}</li>
                    <li>Trabajo: ${trabajo}</li>
                <ul>`;
    
    contenedorApp.innerHTML = html2;

// ///////////////////////////////////////////
// ///////////////////////////////////////////
// /////////////FUNCIONES/////////////////////

/* DECLARANDO FUNCIONES --- Function declaration*/
function saludar(){
    console.log('hola'); /* no devuelve nada aún por que  aun que la función ya fue creada, la funcion no ha sido llamada */  
}
    /* aquí mandamos llamar la funcion */
    saludar();
    saludar();
    saludar();
    saludar();
    /* LAS FUNCIONES SE PUEDEN MANDAR LAMAR MUCHAS VECES */
    /* esto perpite poder reciclar el código */

/* EXPRESION DE FUNCIONES --- Function Expression*/

const suma2 = function(){
    console.log(1+2);
}
    suma2();

/*DIFERENCIA ENTRE EXPRESION DE FUNCIONES Y DECLRACION DE FUNCIONES  */

/* La sintaxis de la declaracion de funciones nos permite porder mandar llamar la función, incluso antes de que la misma función sea declarada */

saludar2();

function saludar2(){
    console.log('hey Arnold!');
}

/* Por el contrario, la expresión de funciones, no permite que la función sea utilizada antes de ser expresada */

// suma3();
// var suma3 = function(){
//     console.log(3+5); /* esto genera error comentando que suma3 no es una funcion */
// }

/* CREANDO FUNCIONES "INTELIGENTES"  y reutilizables*/
/* esto se logra pasándole parámetros a las funciones */
/* otra traducción de esto es, <<colocar código que se encuentra fuera, dentro de las funciones>> */
/* EJEMPLO: añadimos parámetros a a función */

saludar3('Kify', 'web developer');
function saludar3(myName, job){
    console.log('Aloha ' + myName + ' tu trabajo es ' + job);  
}
saludar3('Mariana', 'desarrolladora');
saludar3('Alberto', 'arquitecto');
saludar3('Hugo', 'medico');
saludar3('Alejandra', 'veterinaria');

const suma3 = function(a, b){
    console.log(a + b);
}
    suma3(15, 20);

    suma3(135, 2120);

    suma3(1234, 3240);

/* Parámetros con valor default */   


function aloha(apodo = 'Visitante', color = 'No sabemos'){
    console.log('Tu apodo es: ' + apodo +' '+ 'y ' + 'tu color favorito es: ' + color); 
}
aloha('Kify', 'amarillo');
aloha('Graciela');
aloha('Marco', 'negro');
aloha();

const suma4 = function(a = 0, b = 0){
    console.log(a + b);
}
    suma4(15);

    suma4(135, 2120);

    suma4(3240);

// FUNCIONES IIFE --Funciones que se invocan automáticamente:
/* la siguiente función no necesita llamarse, se invoca ella misma*/
(function(tec) {
console.log('AQUÍ TOY! aprendiendo ' + tec);
    
})('JavaScript');

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// /////MÉTODOS O FUNCIONES DENTRO DE OBJETOS//////////

const musical = {
        reproducir: function(song) {
            console.log('reroduciendo la cancion ' + song);
        },
        pausar: function() {
            console.log('Paused...');
        } 
}

musical.reproducir('Hotel California');
musical.pausar();
musical.reproducir('Yellow');
musical.pausar();
musical.reproducir('Go your way');

// Los métodos también pueden ir por fuera 
musical.borrar = function(id) {
    console.log('Borrando la canción con el id: ' + id);
}
 musical.borrar(121);
 musical.borrar(134);

//  //////////////////////////////////////
//  //////////////////////////////////////
//  /////FUNCIONES QUE RETORNAN UN VALOR///
const add = function(a = 0, b = 0) {
    return a + b
}
const multiplicar = function(a) {
    return a*5;
}
let total;
let resultadoSuma = add(10 + 20);
total = multiplicar(resultadoSuma);

console.log(total);


//////////// ARROW FUNCTIONS//////////////////////
/* quitamos la palabra function y dejamos una arrow despues del paréntesis */
const add2 = (a = 0, b = 0) => {
    return a + b
}
/* si no tenemos más d eun parámetro en los paréntesis, podemos prescindir de estos: */
const multiplicar2 = a => {
    return a*5;
}
let total2;
let resultadoSuma1 = add2(10 + 20);
total2 = multiplicar2(resultadoSuma1);

console.log(total);


/* Otro ejemplo */

let viajando =  function(destino) {
    return 'Viajando a la ciudad de ' + destino;
}
let viaje;
viaje = viajando ('París');
viaje = viajando ('Londres');
console.log(viaje);

/* Ahora usando Arrow Functions: */

let viajando2 = destino =>  'Viajando a la ciudad de ' + destino;

let viaje2;
viaje2 = viajando2 ('París');
/* viaje2 = viajando2 ('Londres'); */
console.log(viaje2);

// /////////////////////////////////////////
// ////////OBJECT CONSTRUCTOR//////////////

/* Esto es Object literal: */
const people = {
    nombres: 'Juan Godinez'
}

/* Esto es Object constructor: */
 /* se usan instancias, pensamos en las instacias como estructuras que son iguales pero almacenan siferente conetenido */
// se utiliza this necesariamente para que pueda funcionar bien
 function Tarea(title, urgency) {
    this.title = title;
    this.urgency = urgency;
}
    // creamos nuevas tareas:

    const task1 = new Tarea('Aprender Js', 'urgent');
    const task2 = new Tarea('Comprar material', 'urgent');
    const task3 = new Tarea('Realizar cartas descriptivas', 'medio');
    const task4 = new Tarea('Lavar ropa', 'no urgente');
    console.log(task1);
    console.log(task2); 
    console.log(task3);
    console.log(task4);

    /* Utilizando Object constructor con Clases en JS ES6*/

    class Task {
        constructor (titulo, urgencia) {
            this.titulo = titulo;
            this.urgencia = urgencia;
        }
    }
    // creamos nuevas tasks
    const tareaTask = new Task('comprar foamy', 'media');
    const tareaTask2 = new Task('hacer de comer', 'alta');
    const tareaTask3 = new Task('lavar tenis', 'baja');

    console.log(tareaTask);
    console.log(tareaTask2);
    console.log(tareaTask3);

    /* Otro ejemplo con Object Literal */
    
    const alumnoYoga = {
        nickname: 'Kify',
        ageOld: 35,
        birthday: function() {
            return new Date().getFullYear() - this.ageOld;
        }
    }
    console.log(alumnoYoga);
    
    console.log(alumnoYoga.birthday());
    
    // //////////Trabajando con fechas
    
    const diaHoy = new Date();

    let valorDia = diaHoy;

    valorDia = diaHoy.getMonth(); /* retorna el número de mes tomando a Enero como 0 */

    valorDia = diaHoy.getDay(); /* retorna el número de día tomando al Domingo como 0 */

    valorDia = diaHoy.getDate(); /* retorna el día del mes actual*/

    valorDia = diaHoy.getFullYear(); /* retorna el año actual */

    valorDia = diaHoy.getMinutes(); /* retorna el minuto de la hora actual */

    valorDia = diaHoy.getHours() /* retorna la hora actual */

    valorDia = diaHoy.getTime()/* retorna un time stamp de a hora actual hasta en milisegundos */
    
    console.log(valorDia);

    // new Date = MES/DIA/AÑO:

    const unDia = new Date('3-9-1988');

    let aquelDia;

    aquelDia = unDia.getDay();

    console.log(unDia); /* ese día fue miercolés como se ve en la consola */


// ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////* CODICIONALES -- IF --ELSE */////////////
// La lógica de uso radica en el cumplimiento de una condición, si esta se cumple se retorna cierto valor.
/* Ejemplo deif and else */
const score = 1000;

    if(score ==='1000' ) {
        console.log('Sí es igual a 1000');
    } else {
        console.log('No, no es gual a 1000');
    }

const logueado = true;
    if(logueado) {
        console.log('Sí estás logueado');  
    } else{
        console.log('Inicia sesión');    
    }

/* Usando If para validar la edad */

const tuEdad = 17;

    if(tuEdad >= 18){
        console.log('Sí eres mayor de edad');
    } else {
        console.log('Sorry! aún no eres mayor de edad!');
    }

    /* otro ejemplo */

    let money = 500;
    
    let totalCarro = 600;

        if(money > totalCarro) {
            console.log('procede con tu compra');
            
        } else {
            console.log('fondos insuficientes');    
        }

  /* usando if else */
  let dinero = 500;
  let totalCarrito = 600;
  let tarjeta = true;

      if(dinero > totalCarrito) {
          console.log('procede con tu compra');
          
      } else if (tarjeta) {
          console.log('pagaste con taejeta');
          
      } else {
        console.log('fondos insuficientes');    
    }

/* Condicional || Ó -- OR--*/
    //   evaluas que se cumplá una u otra cndición, es decir que al menos se cumpla una condición
let dinero2 = 500;
let totalCarrito2 = 600;
let tarjeta2 = true;

    if(dinero2 > totalCarrito2 || tarjeta2)  {
        console.log('Pago correcto');
        
    } else {
      console.log('fondos insuficientes');    
  }

 /* Condicional && --Y */
//   esta condicional revisa que se cumplan todas las condiciones Sí o Sí.
// ejemplo:
    
let hour = 15;

if (hour > 0 && hour <= 12) {
    console.log('Buenos días');
    
} else if (hour >12 && hour <= 18) {
    console.log('Buenas tardes');
    
} else if (hour > 18 && hour <= 24) {
    console.log('Buenas noches');
    
} else {
    console.log('Horario no válido');
    
}
