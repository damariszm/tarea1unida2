/*1. En una tienda de calzado se esta ofreciendo un descuento por compra a sus clientes con categorías, dependiendo de su tipo, sólo existen tres tipos de categorías, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */
let $p = document.querySelector("p");
let $span = document.querySelector("p");
let $b = document.querySelector("p");
let product = prompt("Nombre del producto");
let costoPorUnidad = parseFloat(prompt("¿Cuanto vale cada unidad?"));
let unidades = parseFloat(prompt("¿Cuantas unidades desea adquirir?"));
let categoria = prompt("¿A que categoria pertenece? A, B o C");
let subtotal;
let descuento;
let total;

if (categoria === "A" || categoria === "a") {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 0.1;
  total = subtotal - descuento;
  $p.innerHTML = `El sub total es de $: ${subtotal}`;
  $span.innerHTML = `Su descuento es de $: ${descuento}`;
  $b.innerHTML = `El total a pagar por ${product} es de: $: ${total}`;
} else if (categoria === "B" || categoria === "b") {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 0.15;
  total = subtotal - descuento;
  $p.innerHTML = `El sub total es de $: ${subtotal}`;
  $span.innerHTML = `Su descuento es de $: ${descuento}`;
  $b.innerHTML = `El total a pagar por ${product} es de: $: ${total}`;
} else if (categoria === "C" || categoria === "c") {
  subtotal = costoPorUnidad * unidades;
  descuento = subtotal * 0.2;
  total = subtotal - descuento;
  $p.innerHTML = `El sub total es de $: ${subtotal}`;
  $span.innerHTML = `Su descuento es de $: ${descuento}`;
  $b.innerHTML = `El total a pagar por ${product} es de: $: ${total}`;
}
