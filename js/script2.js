 /* Condicional Ternario*/
//   esta condicional permite tener una condición "if" en una misma línea:

let logueado = true;
console.log(logueado ? "Sí se logueo" : "No se logueo");

// probemos ahora cn false:

let signIn = false;
console.log(signIn ? "Sí se logueo" : "No se logueo");

 /* Utilizando un Condicional IF sencilla*/
 //   en el condicional if sencillo, se pueden eliminar las llaves:

 let puntaje;

 if (puntaje)
 console.log("si hay puntaje");
 else
 console.log("no hay puntaje");
 
  //  se recomienda aun así, siempre utilizar llaves:
 
/* Utilizando Switch Statement*/
 //   en el condicional if sencillo, se pueden eliminar las llaves:

 const metodoPago = 'bitcoin';
//Evaluamos con switch el "metodo de pago" (se cambia el método de pago como ejemplo efectivo, tarjeta, cheque o bitcoin).
//Se utiliza break al término de cada condición para que pueda funcionar correctamente
 switch(metodoPago) {
   case 'efectivo':
     console.log(`pagaste con ${metodoPago}`);
     break;
  case 'tarjeta':
    console.log(`pagaste con ${metodoPago} el cargo puede verse reflejado hasta en 48 hrs`);
    break;
  case 'cheque':
    console.log(`pagaste con ${metodoPago} revisaremos que cuentes con los fondos suficientes`); 
    break;
    //el siguiente un ejemplo en donde podemos mandar llamar una funcion
  case 'bitcoin':
    hola();
    break;
  default:
    console.log(`Aún no has pagado o método de pago no válido`);
    break;
     // cuando se evalua el método de pago, si cambia por ejemplo a 'cheque', automaticamente carga en consola lo establecido en default. 
 }

 function hola() {
   console.log('hola amigos');
 }

 /* LOOP FOR*/
// cuenta con tres partes, normalmente se incia en indice  cero, despues viene la condición que se va a cumplir : en este ejemplo el código se va a repetir 10 veces
//o al menos , se va a repetir mientras i sea menor que 10
// finalmemte para evitar que el loop  tenga un término de ciclo se le da un incremento i ++

for(let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
  
}
// El uso de FOR LOOP normalmente es para recorrer un arreglo, hay varias formas de hacerlo:
// Ejemplo 1 Carrito de Compras:

const carrito = ['producto1', 'producto2', 'producto3', 'producto4'];
// console.log(carrito.length); como ejemplo para tomar el método
//FOR LOOP : te permite iterar ( repetir muchas veces hata que se cumpla una condición)
for(let i = 0; i <= carrito.length; i++) {
  console.log(`Producto en el carrito ${carrito[i]}`);
}
/* WHILE LOOP*/ 
// Mientras que i sea menor a 10, se va a cntinuar ejecutando el código

// let i = 0;
// while(i < 10){
//   console.log(`Número: ${i} `);
//   i++;
// }

// Recorer un arreglo usando While Loop (se comenta el código anterior )

// let i = 0;
// while(i < carrito.length){
//   console.log(carrito[i]);
//   i++;
// }

// Comentamos el código para el siguiente ejemplo
// Tanto FOR LOOP como WHILE LOOP, evaluan la condición antes d eejecutar el código
let i =11;

do {
  console.log(i);
  i++;
} while (i < 10);

// OTROS ITERADORES DE JAVA SCRIPT
// hacemos u arreglo de strings:
const pendientes = ['estudiar', 'tarea', 'proyecto','lavar ropa'];
//hacemos un arreglo de objetos:
const carritoP = [
  {id: 1, producto: 'libro'},
  {id: 2, producto: 'camisa'},
  {id: 3, producto: 'disco'}
];

// hacemos un objeto
let automovil = {
  modelo: 'Camaro',
  motor: 6.0,
  año: 2020,
  marca: 'Chevrolet'
}

//ahora iteramos con for loop y luego comentaremos el código para que solo sirva de referencia:

// for(let i = 0; i < pendientes.length; i++){
//   console.log(pendientes[i]);
// }

//ahora de una forma más sencilla
for(pendiente of pendientes){
  console.log(pendiente);
}
//lo que se hizo: El FOR accede al arreglo "pendientes" para iterarlo, y crea "pendiente" como variable individual;
for (producto of carritoP){
  console.log(producto.producto);
}
for (info of Object.values(automovil)){
  console.log(info);
  
}

/*USANDO FOR EACH*/ 
const assigments = ['antes de empezar', 'material', 'escoge tu cuaderno'];

assigments.forEach(function(assigment){
  console.log(assigment);
});
// Lo ismo recordando el uso de Arrow Functions:

const duties = ['make cofee', 'study online', 'meditate', 'yoga class'];
 duties.forEach(task => {
   console.log(task);
 });

 //Usando MAP
 duties.map(tarea => {
   console.log(tarea);
 });
 //usar map crea un nuevo arrego que podemos ver con el sig. código:
 const actividades = ['arte', 'e.f', 'midi', 'yoga', 'música'];

 let nuevoArreglo = actividades.map (clase => {
   return clase;
 });
 console.log(nuevoArreglo);
 