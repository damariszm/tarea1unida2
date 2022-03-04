// 3. Crear un programa que permita calcular Promedio de Notas, mientras N sea diferente de 0.
function notas() {
    let n = parseInt(prompt("Ingrese el número de calificaciones"));
    let suma = 0;
    let $p = document.querySelector("p");
    for (let i = 1; i <= n; i++) {
      let nota = parseFloat(prompt(`Ingrese las calificaciones ${i}`));
      if (nota === 0) return alert("No hay un estudiante con 0 notas");
      suma = suma + nota;
      cali = suma / n;
    }
    $p.innerHTML = `El promedio de las ${n} calificaciones es ${cali}`;
  }
  notas();
  