// Instrucciones
// Pedir dos números y decir cual es el mayor.

let numeros = [];
let indice = 0;

console.log("Ingrese dos numeros");
process.stdin.on("data", function (data) {
  numeros.push(data.toString().trim());
  indice++;
  if (indice === 2) {
    if (numeros[0] > numeros[1]) {
      console.log("El primer numero es mayor al segundo");
    } else if (numeros[0] < numeros[1]) {
      console.log("El segundo numero es mayor al primero");
    }
    process.exit();
  }
});
