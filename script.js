/* ------------------------------------------------------------------------------------
        CONST DE INICIO DE SESION
------------------------------------------------------------------------------------*/
const liLogin = document.getElementById("login");
const liBienvenida = document.getElementById("bienvenida");
const pBienvenida = document.getElementById("mensajeBienvenida");

/*---------------------------------------------------------------------------------- 
          ARRAY DE PRODUCTOS
------------------------------------------------------------------------------------*/
const todosProductos = [
  { id: 1, nombre: "Buzo", precio: 7000 },
  { id: 2, nombre: "Jean", precio: 10000 },
  { id: 3, nombre: "Piluso", precio: 4000 },
  { id: 4, nombre: "Remera", precio: 6000 },
];

const carrito = [];
let totalCompra = 0;

/* ------------------------------------------------------------------------------------
        FUNCION PARA INICIO Y SALIDA DE SESION 
------------------------------------------------------------------------------------*/

function inicioLogin() {
  const nombreUsuario = prompt("Ingrese su nombre de usuario");
  const contraseñaUsuario = prompt("Ingrese su contraseña");
  if (nombreUsuario && contraseñaUsuario) {
    localStorage.setItem("usuario", nombreUsuario);
    localStorage.setItem("contraseña", contraseñaUsuario);
    liLogin.style.display = "none";
    liBienvenida.style.display = "block";
    pBienvenida.textContent = `Hola ${nombreUsuario}`;
  } else {
    alert("Porfavor ingrese su nombre de usuario o contraseña");
  }
}

function salidaLogin() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("contraseña");
  liLogin.style.display = "block";
  liBienvenida.style.display = "none";
  pBienvenida.textContent = "";
}

/* ------------------------------------------------------------------------------------
        FUNCION PARA AGREGAR AL CARRITO
------------------------------------------------------------------------------------*/
function actualizarCarrito() {
  const artCarrito = document.getElementById("listaCarrito");
  const totalDeCompra = document.getElementById("totalDeCompraCarrito");
  artCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const articuloCarrito = document.createElement("li");
    articuloCarrito.textContent = producto.nombre + " -Precio $" + producto.precio;
    artCarrito.appendChild(articuloCarrito);
  });
  totalDeCompra.textContent = totalCompra;
}

function agregarCarrito(id) {
  let producto = todosProductos.find((item) => item.id === id);
  if (producto) {
    carrito.push(producto);
    totalCompra += producto.precio;
    actualizarCarrito();
  }
}

/* ------------------------------------------------------------------------------------
        FUNCION PARA VACIAR EL CARRITO
------------------------------------------------------------------------------------*/
function vaciarCarrito() {
  carrito.length = 0;
  totalCompra = 0;
  const artCarrito = document.getElementById("listaCarrito");
  const precioCero = document.getElementById("totalDeCompraCarrito");
  artCarrito.innerHTML = "";
  precioCero.textContent = 0;
}

/* ------------------------------------------------------------------------------------
        FUNCION PARA AGRADECER LA COMPRA
------------------------------------------------------------------------------------*/
function mensajeGracias() {
  if (carrito.length == 0) {
    alert("No es posible realizar la operacion ya que tu carrito esta vacio");
  } else {
    alert(`Muchas gracias por tu compra`);
    carrito.length = 0;
    totalCompra = 0;
    vaciarCarrito();
  }
}

/* ------------------------------------------------------------------------------------
        EVENTOS
------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------------------
        EVENTO PARA INICIO Y SALIDA DE SESION
------------------------------------------------------------------------------------*/
const btnLogin = document.getElementById("botonLogin");
btnLogin.addEventListener("click", inicioLogin);
const btnSalida = document.getElementById("botonSalida");
btnSalida.addEventListener("click", salidaLogin);

/* ------------------------------------------------------------------------------------
        EVENTO AGREGAR PRODUCTOS AL CARRITO
------------------------------------------------------------------------------------*/
const botonAgregar = document.querySelectorAll(".agregarAlCarrito");
function botonAgregarClick(event) {
  const botonA = event.target;
  const productoId = parseInt(botonA.getAttribute("id"));
  agregarCarrito(productoId);
}
botonAgregar.forEach(function (boton) {
  boton.addEventListener("click", botonAgregarClick);
});

/* ------------------------------------------------------------------------------------
        EVENTO PARA VACIAR EL CARRITO
------------------------------------------------------------------------------------*/
const botonVaciarCarrito = document.getElementById("botonVaciarCarrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

/* ------------------------------------------------------------------------------------
        EVENTO PARA PAGAR Y VOLVER A CERO EL CARRITO
------------------------------------------------------------------------------------*/
const botonPagar = document.getElementById("botonPagar");
botonPagar.addEventListener("click", mensajeGracias);

//
//
// ESPERO LES GUSTE
