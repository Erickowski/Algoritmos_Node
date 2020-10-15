// Instrucciones
// Pedir dos números y decir si son iguales o no.

let numeros = [];
let indice = 0;

console.log("Ingrese dos numeros");
process.stdin.on("data", function (data) {
  numeros.push(data.toString().trim());
  indice++;
  if (indice === 2) {
    numeros[0] === numeros[1]
      ? console.log("Los numeros son iguales")
      : console.log("Los numeros no son iguales");
    process.exit();
  }
});
