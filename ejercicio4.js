/* 4. Crear un programa que permita ingresar números enteros del 1 al 10, y muestre su equivalente en números romanos  */

let numero = parseInt(prompt("Ingrese un número"));
let $p = document.querySelector("p");

switch (numero) {
  case 1:
    $p.innerHTML = `El numero ${numero} convertido a romano es: I`;
    break;
  case 2:
    $p.innerHTML = `El numero ${numero} convertido a romano es: II`;
    break;
  case 3:
    $p.innerHTML = `El numero ${numero} convertido a romano es: III`;
    break;
  case 4:
    $p.innerHTML = `El numero ${numero} convertido a romano es: IV`;
    break;
  case 5:
    $p.innerHTML = `El numero ${numero} convertido a romano es: V`;
    break;
  case 6:
    $p.innerHTML = `El numero ${numero} convertido a romano es: VI`;
    break;
  case 7:
    $p.innerHTML = `El numero ${numero} convertido a romano es: VII`;
    break;
  case 8:
    $p.innerHTML = `El numero ${numero} convertido a romano es: VIII`;
    break;
  case 9:
    $p.innerHTML = `El numero ${numero} convertido a romano es: IX`;
    break;
  case 10:
    $p.innerHTML = `El numero ${numero} convertido a romano es: X`;
    break;

  default:
    $p.innerHTML = `El número maximo debe ser 10`;
    break;
}