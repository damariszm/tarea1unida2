/* 5. Crear un programa que me permita ingresar la edad de 20 personas, y al final mostrar cuantos mayores y menos de edad hay. */
let $p = document.querySelector("p");
let $b = document.querySelector("b");
let mayor = 0;
let menor = 0;

for (let i = 1; i <= 20; i++) {
  let edad = parseFloat(prompt(`Ingrese la edad: ${i}`));
  edad > 17 ? (mayor = mayor + 1) : (menor = menor + 1);
}

$b.innerHTML = `Mayores de edad: ${mayor}`;
$p.innerHTML = `Menores de edad:${menor}`;
