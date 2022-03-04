/* 6. En un almacén  se están ofreciendo las siguientes ofertas  de descuento en compras  (ver tabla)

Calcular el valor de descuento y valor a pagar por la compra de cierta cantidad de un articulo , si se conoce el precio unitario  */

let product = prompt("Nombre del producto");
let costoPorUnidad = parseFloat(prompt("¿Cuanto vale cada unidad?"));
let unidades = parseFloat(prompt("¿Cuantas unidades desea adquirir?"));
let $p = document.querySelector("p");

let subtotal;
let descuento;
let total;

if (unidades >= 0 && unidades <= 100) {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 2;
  total = subtotal - descuento;
  $p.innerHTML = `Usted va a pagar por ${product} un total de: ${total}`;
} else if (unidades >= 101 && unidades <= 250) {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 5;
  total = subtotal - descuento;
  $p.innerHTML = `Usted va a pagar por ${product} un total de: ${total}`;
} else if (unidades >= 251 && unidades <= 800) {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 8;
  total = subtotal - descuento;
  $p.innerHTML = `Usted va a pagar por ${product} un total de: ${total}`;
} else {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 12;
  total = subtotal - descuento;
  $p.innerHTML = `Usted va a pagar por ${product} un total de: ${total}`;
}