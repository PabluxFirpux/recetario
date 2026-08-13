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

module.exports = {
    getUserInput,
    getNumberFromUser
}