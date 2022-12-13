// Obtener informacion de la forma //

const nombre = documen.getElementById("nombre");
const correo = documen.getElementById("correo");
const trabajo = documen.getElementById("trabajo");
const telefono = documen.getElementById("telefono");
const sobre_ti = documen.getElementById("sobre_ti");



// llamamos  a la forma
const form = document.getElimentById("form");

// Constante de contenedor del contenido inyectado con JS //
const contenedor = documen.getElementById("contenedor");


// Crear event listener para forma //
form.addEventlistener('submit' , (e) => {

  // Evitar la accion por defecto (que le de sumit evitar)
  e.preventDefault();


  // Crear un objeto que tenga los valores de la forma//

  const formulario = {
    name: nombre.Value,
    email: correo.Value,
    texto: sobre_ti.Value,
    age: telefono.Value,
    texto: trabajo.Value,
  }

  const { name, email, texto, age} = formulario;

  console.log(formulario);

  // Dar la orden de submit
  // event.submit();

})


// Crear una funcio que nos retorne contenido HTML dinamicamente //

function crearCuadroDeForma (name, email, texto, age) {
  const cuadroHtml = `
  <div class="contenido">
    <h2 class="contenido__titulo">${name}</h2>
    <p class="contenido__p>${email}</p>
    <p class="contenido__p>${texto}</p>
    <p class="contenido__p>${ege}</p>
    
    </div>
  ` 

  return cuadroHtml;
}

// llamar al button submit
const submit = document.getElementById("submit");

submit.addEventlictener("click", (e) => {
  console.log(e. target)
});

// Validar nombre
function ValidarNombre(name) {
  if(nombre.length == 0) {
    return false;
  }
}

