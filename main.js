let askName = prompt('Identíficate extraño, escribe tu nombre correctamente');
    alert('Gracias '+askName+', aun sigues siendo un extraño');

let askYear = true;

alert('Para ser identificado al 100%, validaremos tus datos');


do {
    let askBirth = Number(prompt('ingrese año de nacimiento a 4 dígitos'));
    let confirmBirth = Number(prompt('Confirme tu año de nacimiento a 4 dígitos'));

    if (askBirth === confirmBirth) {
        alert('Año de nacimiento confirmado');
        alert('Gracias por confiar en nosotros');
        alert('Continuaremos en el siguiente desafío, see you later');
        askYear = false
    }   else {
        alert('Año escrito de manera incorrecta, intenta de nuevo');
    }
} while (askYear);