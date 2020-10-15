// Intrucciones:
// Pedir los coeficientes de una ecuación de 2º grado, y muestre sus soluciones reales. Si no existen, debe indicarlo.

let coeficientes = [];
let indice = 0;

console.log("Ingrese los coeficientes de su ecuacion:");
process.stdin.on("data", function (data) {
  coeficientes.push(data.toString().trim());
  indice++;
  if (indice === 3) {
    calcularSoluciones();
    process.exit();
  }
});

function calcularSoluciones() {
  let discriminante =
    Math.pow(coeficientes[1], 2) - 4 * coeficientes[0] * coeficientes[2];
  let soluciones = [];
  if (discriminante > 0) {
    soluciones.push(
      (-coeficientes[1] + Math.sqrt(discriminante)) / (2 * coeficientes[0])
    );
    soluciones.push(
      (-coeficientes[1] - Math.sqrt(discriminante)) / (2 * coeficientes[0])
    );
    console.log("Sus soluciones reales son:");
    console.table(soluciones);
  } else if (discriminante === 0) {
    soluciones.push(-coeficientes[1] / (2 * coeficientes[0]));
    console.log("Sus solucion real es: " + soluciones[0]);
  } else {
    console.log("La ecuacion no tiene soluciones reales.");
  }
}
