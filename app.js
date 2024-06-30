let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(Elemento, texto) {
     let elementoHTML = document.querySelector(Elemento);
     elementoHTML.innerHTML = texto;
     return;
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
     //si el número generado está incluido en la lista
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {

     if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
     } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
  }
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? `vez` : `veces`}`);
        document.getElementById('reiniciar').remove('disabled');
     } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
 }

function condicionesIniciales() {
     asignarTextoElemento('h1', 'Juego del número secreto');
     asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
 }

function reiniciarJuego() {
     //limpiar caja
     limpiarCaja();
     //Indicar mensaje de intervalo de números
     //Generar el número aleatorio
     //Inicializar el número de intentos
     condicionesIniciales();
     //Deshabilitar el botón de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();