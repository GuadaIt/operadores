/*EJERCICIO 27*/
let numero1 = 1; 
let numero2 = 2;
let resultado = numero1 + numero2;
console.log(resultado);
resultado = numero1 - numero2;
console.log(resultado);
resultado = numero1 * numero2;
console.log(resultado);
resultado = numero1 / numero2;
console.log(resultado);
resultado = numero1 % numero2;
console.log(resultado);

/*EJERCICIO 28*/
let numero = 9;
console.log(numero * 1);
console.log(numero * 2);
console.log(numero * 3);
console.log(numero * 4);
console.log(numero * 5);
console.log(numero * 6);
console.log(numero * 7);
console.log(numero * 8);
console.log(numero * 9);
console.log(numero * 10);

/*EJERCICIO 29*/
let longitudLado = 10;
let perímetro = longitudLado * 4;
console.log(perímetro);

/*EJERCICIO 30*/
let lado = 5;
let area = 5**2;
console.log(area);

/*EJERCICIO 31*/
let lado1 = 10;
let lado2 = 20;
let lado3 = 5;
perímetro = lado1 + lado2 + lado3;
console.log(perímetro);

/*EJERCICIO 32*/
let altura = 10;
let base = 4;
console.log(altura * 2 + base * 2);
console.log(altura * base);

/*EJERCICIO 33*/
let cantidadDePersonas = 100;
cantidadDePersonas += 5;
console.log("Cantidad de personas:" + " " + cantidadDePersonas);
cantidadDePersonas -= 3;
console.log("Cantidad de personas" + " " + cantidadDePersonas);
cantidadDePersonas *= 2;
console.log("Cantidad de personas:" + " " + cantidadDePersonas);

/*EJERCICIO 34*/
let ingresos = 1000
let ganancias = 600
let impuestos = 500
console.log("Objetivo de ingresos: ", ingresos >= 800);
console.log("Objetivo de impuestos: ", impuestos < 400);
console.log("Bono de ganancias: ", ganancias == 600);

/*EJERCICIO 35*/
let numeroDeCliente = 143245;
let numeroDeClienteIngresado = '143245';
console.log("El número ingresado por el cliente es correcto:" + " " + (numeroDeCliente == numeroDeClienteIngresado));
console.log("El número ingresado por el cliente es correcto:", numeroDeCliente == numeroDeClienteIngresado);
console.log("El cliente ingresó un número de cliente válido:", numeroDeCliente === numeroDeClienteIngresado);

/*EJERCICIO 36*/
let numeroUno = 10;
let numeroDos = 20;
console.log("La variable numeroUno y numeroDos tienen el mismo valor:", numeroUno == numeroDos);
console.log("La variable numeroUno y numeroDos son distintas:", numeroUno != numeroDos);

/*EJERCICIO 37*/
let promedioParaAprobar = 6;
let promedioDelAlumno = 4;
console.log("El alumno tiene un promedio mayor o igual que el requerido: ", promedioDelAlumno >= promedioParaAprobar);
console.log("Al alumno le faltaron", promedioParaAprobar - promedioDelAlumno + " puntos", "para aprobar.");

/*EJERCICIO OPERADORES LÓGICOS*/
let productoSeleccionado = "Monitor Samsung 20 pulgadas";
let precioDelProducto = 0;
let usuarioLogueado = true;
console.log(`Gracias por elegir ${productoSeleccionado}`);
console.log(`El precio del producto es: $${precioDelProducto}`);


console.log(productoSeleccionado && "Gracias por elegir ", productoSeleccionado || "No seleccionaste ningún producto");
//productoSeleccionado && console.log(`Gracias por elegir ${productoSeleccionado}`);
//productoSeleccionado || console.log("No seleccionaste ningún producto");

productoSeleccionado && (precioDelProducto && console.log(`El precio del producto es: $${precioDelProducto}`));
productoSeleccionado && (precioDelProducto || console.log("¡Tu compra está 100% bonificada!"));
usuarioLogueado || console.log("Por favor, inicia sesión para continuar.");
