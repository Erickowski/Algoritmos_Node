// Instrucciones
// Pedir dos números y decir si uno es múltiplo del otro.

let numeros = [];
let indice = 0;

console.log("Ingrese dos numeros");
process.stdin.on("data", function (data) {
  numeros.push(data.toString().trim());
  indice++;
  if (indice === 2) {
    if (numeros[0] === numeros[1]) {
      console.log("Ambos numeros son multiplos uno del otro.");
    } else if (numeros[0] % numeros[1] === 0) {
      console.log("El primer numero es multiplo del segundo");
    } else if (numeros[1] % numeros[0] === 0) {
      console.log("El segundo numero es multiplo del primer");
    } else {
      console.log("Ningun numero es multiplo del otro");
    }
    process.exit();
  }
});
