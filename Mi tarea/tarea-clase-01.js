/*             TAREA             */

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function calcularEdad (añoActual, miNacimiento){
    return anioActual - miNacimiento;
}
const anioActual = prompt("Que año es?");
const miNacimiento = prompt("Que año naciste?");

console.log("Tu edad es "+calcularEdad(anioActual,miNacimiento));


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioAnual = prompt("Cual es tu salario anual?")
console.log("Tu salario anual es " + salarioAnual);

function calcularSalarioAnual(salarioAnual){
    return salarioAnual / 12;
}
function calcularSalarioSemanal(salarioAnual){
    return salarioAnual / 52;
}
function calcularSalarioDiario(salarioAnual){
    return salarioAnual / 365;
}
console.log("Tu salario mensual es " + calcularSalarioMensual(salarioAnual));
console.log("Tu salario semanal es " + calcularSalarioSemanal(salarioAnual));
console.log("Tu salario diario es " + calcularSalarioDiario(salarioAnual));
