const prompt = require('prompt-sync')();


function getUserInput(question) {
    let respuesta = prompt(question);
    return respuesta;
}

function getNumberFromUser(question) {
    let gotten = false;
    let respuestaDefinitiva;
    while (!gotten) {
        let respuesta = getUserInput(question);
        if (!isNaN(respuesta.trim())) {
            gotten = true;
            respuestaDefinitiva = respuesta;
        } else {
            console.log("Respuesta invalida");
        }
    }
    return respuestaDefinitiva;
}

function menu(options, callback) {

    for (let i = 0; i < options.length; i++) {
        console.log(`${i+1}. ${options[i]}`);
    }

    let x = getNumberFromUser("Que opcion eliges? ");
    if (x <= 0 || x > options.length) {
        console.log("Seleccion invalida");
        return;
    }
    callback(x);
}

module.exports = {
    getUserInput,
    getNumberFromUser,
    menu
}