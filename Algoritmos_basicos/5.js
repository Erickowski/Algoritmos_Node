// Instrucciones
// Pedir un número e indicar si es positivo o negativo.

console.log("Ingrese un numero");
process.stdin.on("data", function (data) {
  data.toString().trim() > 0
    ? console.log("El numero es positivo")
    : console.log("El numero es negativo");
  process.exit();
});
