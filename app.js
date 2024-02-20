let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);
    
    if (numeroDeUsuario === numeroSecreto) {

        //* En este caso estamos concatenando el enunciado acertaste el numero + el numero de veces y resolviendo el problem entre
        // plural o singular. las herramientas que se utilizan son : templatescreen que son las comillas invertidas este ayuda a agrupar textos con varibles
        // si te das cuenta $(intentos) concatena el contador de intentos y de ahi se coupa el operadorTernario que la funcion si delo contrario
        // en donde ? el simbolo anteriro se vuelve si y : el simbolo anterior se vueve de lo conrtrario.

        asignarTextoElemento('p',`Acertaste el Número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //Es muy importante que cuando usemos el TEMPLATESCRIN (concatenar) con OPERADOR TERNARIO EN UNA FUNCION verifiquemos bien que las comas investidas esten puesta se llamab (blackticks)
        // con la linea de codigo de abajo estamos quitando la desactivacion del boton nuevo juego una vez que termine su partida 
        // darse cuenta que llama al id y despues con .removeAtribute indica que atributo modificara
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // El usuario no acerto se debe de limpiar de forma automatica
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El Número secreto es menor');
        } else 
        {asignarTextoElemento('p','El Número de secreto es Mayor');
    }
    // esta es la fomra mas facil de la sumativa del contador de intentos 
    intentos++; 
    limpiarCaja();
    }
    return;
}
// Esta es la funcion de limpiar que debe de estar afuera de las demas funciones y en este caso se utiliza el queryselector (generico) para identifacr un id
// pero a diferencia del getElementById en este si tenemos que decir que lo que estamos quriendo llmara es un Id y esto es atraves de # el numeral
function limpiarCaja () {
// Las dos lineas de codigo que se encuentran en la parte de abajo es la expresion mas larga a continuacion se escribira la mas simplificada
//let valorCaja = document.querySelector('#valorUsuario');
//valorCaja.value='';

document.getElementById('valorUsuario'). value = ''; // esta es la fomra espesifica de llamar a html la modificacion de la caja


// document.querySelecto('#valorUsuario').value = ''; esta es la fomora generica pero con # espesificamos que es un id.

}

function generarNumeroSecreto() {
    let NumeroGenerado =Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista. hacemos una operacion si no hacemos otra.

    console.log(NumeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles oprime F5 para Reiniciar el Juego');
    } else {

    if(listaNumerosSorteados.includes(NumeroGenerado)){
        return generarNumeroSecreto ()

    } else {
        listaNumerosSorteados.push(NumeroGenerado);
        return NumeroGenerado
    } }



}



function condicionesiniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);

}



function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de nuemeros
    //Generar el Numero aleatorio  (estas dos se subieron ek la funcion de condiciones iniciales Notar)
    //numeroSecreto = generarNumeroSecreto();
    //inicializar el número de intentos
    //intentos=1;
    condicionesiniciales();     //todo lo anteriro fue encapsulado en la funcion esdecir algunas de las condiciones de incio se encapsularon el la funcion de condiciones iniciales
    //Deshabilitar el boton de nuevo juego
    //document.querySelector('#reiniciar').setAttribute('disabled','true');  //aqui se le regresa el valor de desabiliar y setar con valor true este de la forma generica
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
}

condicionesiniciales();

