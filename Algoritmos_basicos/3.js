// Instrucciones
// Pedir el radio de una circunferencia y calcular su longitud. L=2*PI*r.

let radio;

console.log("Ingrese el radio del circulo:");
process.stdin.on("data", function (data) {
  radio = data.toString().trim();
  console.log(`La longitud del circulo es: ${2 * Math.PI * radio}`);
  process.exit();
});
