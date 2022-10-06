/*             TAREA             */

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function edadDelUsuario (añoActual, miNacimiento){
    return añoActual - miNacimiento;
}
const añoActual = prompt("Que año es?");
const miNacimiento = prompt("Que año naciste?");

console.log("Tu edad es "+edadDelUsuario(añoActual,miNacimiento));


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioAnual = prompt("Cual es tu salario anual?")
console.log("Tu salario anual es " + salarioAnual);

function tuSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}
function tuSalarioSemanal(salarioAnual){
    return salarioAnual / 52;
}
function tuSalarioDiario(salarioAnual){
    return salarioAnual / 365;
}
console.log("Tu salario mensual es " + tuSalarioMensual(salarioAnual));
console.log("Tu salario semanal es " + tuSalarioSemanal(salarioAnual));
console.log("Tu salario diario es " + tuSalarioDiario(salarioAnual));
