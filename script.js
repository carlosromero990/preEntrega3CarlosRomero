const todosProductos = [
  { id: 1, nombre: "Buzo", precio: 7000 },
  { id: 2, nombre: "Jean", precio: 10000 },
  { id: 3, nombre: "Piluso", precio: 4000 },
  { id: 4, nombre: "Remera", precio: 6000 },
];

const carrito = [];
let totalCompra = 0;

function agregarCarrito(id) {
  let producto = todosProductos.find((item) => item.id === id);
  if (producto) {
    carrito.push(producto);
    console.log(`Agregaste ${producto.nombre} a tu carrito`);

    totalCompra += producto.precio;
  }
}

function mostrarCarrito() {
  if (carrito.length == 0) {
    console.log("");
    console.log("Tu carrito esta vacio");
  } else {
    console.log("");
    console.log("Tu carrito:");

    for (let produ = 0; produ < carrito.length; produ++) {
      console.log(`${carrito[produ].nombre}`);
    }
    console.log("");
  }
}

function vaciarCarrito() {
  carrito.length = 0;
  totalCompra = 0;
  console.log("El carrito se ha vaciado");
}

function calcularTotal() {
  if (carrito.length == 0) {
    console.log("Tu carrito esta vacio");
  } else {
    totalCompra = 0;
    for (let todo = 0; todo < carrito.length; todo++) {
      totalCompra += carrito[todo].precio;
    }
    console.log(`El total de tu compra es ${totalCompra}`);
  }
}

function mensajeGracias() {
  if (carrito.length == 0) {
    console.log("No es posible realizar la operacion ya que tu carrito esta vacio");
  } else {
    alert(`Muchas gracias por tu compra`);
    carrito.length = 0;
    totalCompra = 0;
  }
}

const botonAgregar = document.querySelectorAll(".agregarAlCarrito");
function botonAgregarClick(event) {
  const botonA = event.target;
  const productoId = parseInt(botonA.getAttribute("id"));
  agregarCarrito(productoId);
}

botonAgregar.forEach(function (boton) {
  boton.addEventListener("click", botonAgregarClick);
});

const botonMostrarCarrito = document.getElementById("botonCarrito");
botonMostrarCarrito.addEventListener("click", mostrarCarrito);

const botonVaciarCarrito = document.getElementById("botonVaciarCarrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

const botonTotal = document.getElementById("botonTotal");
botonTotal.addEventListener("click", calcularTotal);

const botonPagar = document.getElementById("botonPagar");
botonPagar.addEventListener("click", mensajeGracias);
