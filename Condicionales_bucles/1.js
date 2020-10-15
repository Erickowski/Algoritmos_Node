// Intrucciones:
// Pedir los coeficientes de una ecuación de 2º grado, y muestre sus soluciones reales. Si no existen, debe indicarlo.

let nombre;

process.stdout.write("Hola");
process.stdin.on("data", function (data) {
  nombre = data.toString().trim();
  process.stdout.write(`Hola ${nombre}`);
  process.exit();
});
