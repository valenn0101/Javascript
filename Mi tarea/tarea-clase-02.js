function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

const operador = prompt("Ingrese + o -");
const numero1 = 10;
const numero2 = 7;

let resultado;

if (operador === "+"){
    resultado = sumar (numero1,numero2);
} else{
    resultado = restar (numero1,numero2);
}

console.log("El resultado es " + resultado);
