/* 2. Ingresar  números  por teclado, hasta que el usuario ingrese el 0.

Al final imprimir la  sumatoria de todos los números ingresados. */

function sumarN() {
    let n = parseInt(prompt("Ingrese el número total a sumar"));
    let suma = 0;
    let $p = document.querySelector("p");
    for (let i = 0; i <= n; i++) {
      let num = parseFloat(prompt(`Ingrese las calificaciones ${i}`));
      suma = suma + num;
      if (num === 0) return ($p.innerHTML = `La respuesta es ${suma}`);
    }
  }
  sumarN();
  