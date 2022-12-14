// Obtener informacion de la forma //

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const trabajo = document.getElementById("trabajo");
const telefono = document.getElementById("telefono");
const sobre_ti = document.getElementById("info");



// llamamos  a la forma
const form = document.getElementById("form");

// Constante de contenedor del contenido inyectado con JS //
const contenedor1 = document.getElementById("contenedor1");


// Crear event listener para forma //
form.addEventListener('submit' , (e) => {

  // Evitar la accion por defecto (que le de sumit evitar)
  e.preventDefault();


  // Crear un objeto que tenga los valores de la forma//

  const formulario = {
    name: nombre.value,
    email: correo.value,
    labor: trabajo.value,
    tel: telefono.value,
    texto: sobre_ti.value,
  }

  const { name, email, labor, tel, texto} = formulario;

  console.log(formulario);

  // Llamar funcion para crear html 
  const cuadroHtml = crearCuadroDeForma(name, email, labor, tel, texto);

  contenedor1.insertAdjacentHTML('beforeend', cuadroHtml);

  // Dar la orden de submit
  // event.submit();

});


// Crear una funcio que nos retorne contenido HTML dinamicamente //

function crearCuadroDeForma(name, email, labor, tel, texto) {
  const sectionHtml = `
  <div class="target">
    <div id="cuadro">
      <img class="img1" id="imagen" src="./img1.jpg" alt="" />
      <h2 class="contenido__titulo">${name}</h2>
      <p class="contenido__p">${labor}</p>
    </div>

    <div id="result">
      <h3 class="hr">Información</h3>
      <div id="orden-result">
        <div class="pading">      
          <h3>Email</h3>
          <p class="contenido__p">${email}</p>
        </div>  
        <div class="pading">  
          <h3>Phone</h3>
          <p class="contenido__p">${tel}</p>
        </div>  
      </div>
      <div class="pading">  
        <h3 class="hr">Sobre mi</h3>
        <p class="contenido__p">${texto}</p>
      </div>  
    </div>
  </div>
  ` 

  return sectionHtml;
}
