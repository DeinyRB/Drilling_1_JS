// Obtener informacion de la forma //

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const trabajo = document.getElementById("trabajo");
const telefono = document.getElementById("telefono");
const sobre_ti = document.getElementById("info");



// llamamos  a la forma
const form = document.getElementById("form");

// Constante de contenedor del contenido inyectado con JS //
const contenedor = document.getElementById("contenedor");


// Crear event listener para forma //
form.addEventListener('submit' , (e) => {

  // Evitar la accion por defecto (que le de sumit evitar)
  e.preventDefault();


  // Crear un objeto que tenga los valores de la forma//

  const formulario = {
    name: nombre.value,
    email: correo.value,
    texto: sobre_ti.value,
    tel: telefono.value,
    labor: trabajo.value,
  }

  const { name, email, texto, tel, labor} = formulario;

  console.log(formulario);

  // Llamar funcion para crear html 
  const cuadroHtml = crearCuadroDeForma(name, email, texto, tel, labor);

  contenedor.insertAdjacentHTML('beforeend', cuadroHtml);

  // Dar la orden de submit
  // event.submit();

})


// Crear una funcio que nos retorne contenido HTML dinamicamente //

function crearCuadroDeForma(name, email, texto, tel, labor) {
  const cuadroHtml = `
  <div class="contenido">
    <h2 class="contenido__titulo">${name}</h2>
    <p class="contenido__p>${email}</p>
    <p class="contenido__p>${texto}</p>
    <p class="contenido__p>${tel}</p>
    <p class="contenido__p>${labor}</p>
  </div>
  ` 

  return cuadroHtml;
}
