// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


const MI_NOMBRE = "valentin";
const OTRO_NOMBRE = "abril"

const nombreUsuario = (prompt("Como te llamas?") || '').toLocaleLowerCase();

if(MI_NOMBRE === nombreUsuario){
    console.log("Hola, tocayo! Yo tambien me llamo " + nombreUsuario)
} else if (OTRO_NOMBRE === nombreUsuario){
    console.log("Hola "+nombreUsuario+", te llamas igual que mi hermana");
} else if (nombreUsuario.trim().length === 0){
    console.log("No ingresaste ningun nombre");
} else {
    console.log("Hola " + nombreUsuario);
}


//Tarea 2
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


const MI_EDAD = 21;

const edadUsuario = Number(prompt("Cuantos años tienes?"));

if( MI_EDAD == edadUsuario){
    console.log("Tenemos " + edadUsuario + "! La misma edad");
} else if ( edadUsuario > MI_EDAD){
    console.log("Eres mayor a mi");
} else if ( edadUsuario < Mi_EDAD ){
    console.log("Eres menor que yo");
} else {
    console.log("No entendi tu respuesta")
}



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_NECESARIA = 18;
const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

const documentoUsuario = (prompt("Tienes documento? Si o no ") || '').toLocaleLowerCase();

if (documentoUsuario === RESPUESTA_SI){
    const edadUser = Number(prompt("Cuantos años tienes?"));

    if ( edadUser >= EDAD_NECESARIA){
        console.log("Bienvenido al bar!!!");
    } else if (edadUser < EDAD_NECESARIA){
        console.log("Eres menor, no puedes pasar");
    }
} else if (documentoUsuario === RESPUESTA_NO){
    console.log("Se necesita documento para pasar");
} else {
    console.log("No entendi tu respuesta :(");
}
