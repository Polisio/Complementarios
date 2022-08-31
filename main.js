// for (let i = 0; i < 10; i++) {
//     alert(i)
// }


// // Ejemplo de la estructura for parte por parte:

// let i = 0 // Desde                     -> Se ejecuta una vez al entrar al bucle.
// i < 5    // Hasta - Condición          -> Se comprueba antes de cada iteración del bucle.
//           //                           -> Si la condición es evaluada como falsa el ciclo se detiene.
// i++       // Actualización             -> Se ejecuta después del cuerto (body)
// alert(i)  // Body (cuerpo)             -> Se ejecuta hasta que la condición sea evaluada como falsa.





// for (let i = 10; i > 0; i--) {
//     alert(i)
// }


// Reserva de turnos
// for (let i = 1; i <= 5; i++) {
//     let nombreIngresado = prompt('Ingrese su nombre:')
//     alert('Turno Nº '+i+' Nombre: '+nombreIngresado)
//     if (i==5){
//         alert('No hay más turnos disponibles')
//     }
// }

// for (let i = 1; i <= 5 ; i++) {
//     let nombreIngresado = prompt('Ingrese su nombre:')
//     alert('Turno N.-'+i+' Nombre: '+nombreIngresado)
//     if (i == 5){
//         alert("no hay mas turnos disponibles")
//     }
//     // Termino el body y se hace el incremento de la variable i
// }



// Tabla de multiplicar
// let ingresarNumero = Number(prompt('Ingresa un número'))

// for (let i = 1; i <= 10; i++){
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero+' x ' +i+' = '+resultado);
// }





// let ingresarNumero = Number(prompt('Ingrese un numero'));

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero+' x '+i+'='+resultado);
// }




// break

// for (let i = 1; i <= 10; i++) {
//     if (i==5) {
//         break;
//     }
//     alert(i);
// }


// continue

// for (let i = 1; i <= 10; i++) {
//     if (i==5) {
//         continue;
//     }
//     alert(i);
// }







// while

// let entrada = prompt('ingrese un dato')

// while (entrada != 'ESC'){
//     alert('El usuario ingresó '+entrada);
//     entrada = prompt('Ingrese otro dato:');

// }

// let entrada = prompt('Ingrese un dato');

// while (entrada != 'ESC') {
//     alert('El usuario ingreso '+entrada);
//     entrada = prompt('Ingrese un otro dato');
// }





// do while

// let repetir = false;

// do {
//     console.log('Esto solo se vera una vez');
// } while (repetir)



// Ejemplos con do while

// let numero = 0;

// do {
//     numero = prompt('Ingrese un número');
// }   while (Number(numero));

// Cuando ingreso unvalor que no sea un numero, el parseo del mismo va a devolver un NaN
// NaN es false



// Validar un formulario de registro

// let askAgain = true;

// do {
//     let userMail = prompt('ingrese correo electrónico');
//     let confirmUserEmail = prompt('Confirme su correo electrónico')

//     if (userMail === confirmUserEmail) {
//         alert('Correo confirmado');
//         askAgain = false;
//     }   else {
//         alert('Los correos escritos no coinciden');
//     }
// } while (askAgain);

// switch

// let entrada = prompt('ingrese un nombre').toUpperCase();

// while ( entrada != 'ESC') {
//     switch (entrada) {
//         case 'ANA' :
//             alert('Hola Ana');
//             break;
//         case 'JUAN':
//             alert('Hola Juan');
//             break;
//         default:
//             alert('Identifícate extraño')
//             break;
//     }

//     entrada = prompt('ingrese otro nombre').toUpperCase();
// }