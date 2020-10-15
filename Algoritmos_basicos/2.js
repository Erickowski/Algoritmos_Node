// Instrucciones
// Pedir el radio de un círculo y calcular su área. A=PI*r^2.

let radio;

console.log("Ingrese el radio del circulo:");
process.stdin.on("data", function (data) {
  radio = data.toString().trim();
  console.log(`El area del circulo es: ${Math.PI * Math.pow(radio, 2)}`);
  process.exit();
});
