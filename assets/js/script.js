// 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero

let num1 = parseFloat(prompt("Ingrese el primer número (mayor a 0):"));
let num2 = parseFloat(prompt("Ingrese el segundo número (mayor a 0):"));

if (num1 > 0 && num2>0) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let division = num1 / num2;
    let multiplicacion = num1 * num2;

    document.write(`Suma: ${suma} <br>`)
    document.write(`Resta: ${resta} <br>`);
    document.write(`División: ${division} <br>`);
    document.write(`Multiplicación: ${multiplicacion} <br>`);

}else {
    console.log("Por favor, ingresa números diferentes y mayores a 0.");
}


// 3.Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit

let celsius =  parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9/5) + 32;

document.write(`Temperatura en Kelvin: ${kelvin} <br> Temperatura en Fahrenheit: ${fahrenheit} °F <br>`);




// 4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días

let totalDays = parseInt(prompt("Ingrese la cantidad de días:"));
let year = Math.floor(totalDays/365);
let daysRest = totalDays % 365;
let week = Math.floor(daysRest / 7);
let days = daysRest % 7;

document.write(`${totalDays} días equivalen a ${year} año(s), ${week} semana(s) y ${days} día(s).<br>`);



//5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se pidena continuación

let numOne = parseInt(prompt("Ingrese el primer número:"));
let numTwo = parseInt(prompt("Ingrese el segundo número:"));
let numThree = parseInt(prompt("Ingrese el tercer número:"));
let numFour = parseInt(prompt("Ingrese el cuarto número:"));
let numFive = parseInt(prompt("Ingrese el quinto número:"));

let suma = numOne + numTwo + numThree + numFour + numFive;
document.write(`La suma de todos los números es: ${suma} <br>`);

let prom = suma/5
document.write(`El promedio de todos los número es: ${prom}`);



