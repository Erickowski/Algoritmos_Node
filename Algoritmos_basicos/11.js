// Instrucciones
// Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene.

let numero;

console.log("Ingrese numero entre 0 y 9,999:");
process.stdin.on("data", function (data) {
  numero = data.toString().trim();
  if (numero < 1 || numero > 9999) {
    console.log("Numero no valido");
  } else {
    console.log(
      "El numero " + numero + " tiene " + numero.length + " cifra(s)."
    );
  }
  process.exit();
});
