// Instrucciones
// Pedir dos números y mostrarlos ordenados de mayor a menor.

let numeros = [];
let indice = 0;

console.log("Ingrese dos numeros");
process.stdin.on("data", function (data) {
  numeros.push(data.toString().trim());
  indice++;
  if (indice === 2) {
    console.log(numeros.sort((a, b) => b - a));
    process.exit();
  }
});
