let formulario = document.querySelector('#formulario');
const inputFormulario = document.querySelectorAll('.form-container input');
const botonEnviar = document.querySelector('.submit-form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const phoneInputField = document.querySelector('#telefono');
const empresa = document.querySelector('#empresa');
const pais = document.querySelector('#pais');
const contenedorInput = document.querySelectorAll('.form-container .contenedor-flex div');
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let botonTrabajaNosotros = document.querySelector('.botones-form-trabaja-nosotros');

if (botonEnviar) {
  nombre.addEventListener('blur', validarInput);
  phoneInputField.addEventListener('blur', validarInput);
  email.addEventListener('blur', validarInput);
  document.addEventListener('DOMContentLoaded', () => {
    botonEnviar.disabled = true;
    botonEnviar.style.opacity = '0.5';
  });
}

if (pais) {
  pais.addEventListener('blur', validarInput);
}

if (empresa) {
  empresa.addEventListener('blur', validarInput);
}

if (phoneInputField) {
  phoneInputField.addEventListener('keyup', soloNumeros);
}
function soloNumeros(e) {
  if (isNaN(Number(e.target.value))) {
    e.target.value = this.value.replace(/[^\+ 0-9]/g, '');
  }
}

function validarInput(e) {
  e.preventDefault();
  console.log(er.test(email.value));
  if (e.target.value === '') {
    e.target.classList.remove('success');
    e.target.classList.add('error');
  } else {
    e.target.classList.remove('error');
    e.target.classList.add('success');

    if (e.target.type === 'email') {
      if (er.test(e.target.value)) {
        e.target.classList.remove('error');
        e.target.classList.add('success');
      } else {
        e.target.classList.remove('success');
        e.target.classList.add('error');
      }
    }

    if (er.test(email.value) && nombre.value !== '' && telefono.value !== '') {
      botonEnviar.disabled = false;
      botonEnviar.style.opacity = '1';
    } else {
      botonEnviar.disabled = true;
      botonEnviar.style.opacity = '0.5';
    }
  }
}

botonEnviar.onclick = insertarSpinner;

function limpiarHTML2() {
  while (botonTrabajaNosotros.firstChild) {
    botonTrabajaNosotros.removeChild(botonTrabajaNosotros.firstChild);
  }
}

formulario.addEventListener('wpcf7mailsent', function (event) {
  setTimeout(() => {
    formulario.reset();
    botonEnviar.disabled = true;
    botonEnviar.style.opacity = '0.5';

    inputFormulario.forEach((elemento) => {
      if (elemento.classList.contains('success')) {
        elemento.classList.remove('success');
      }
    });
  }, 4000);
});

function insertarSpinner() {
  botonTrabajaNosotros.style.display = 'none';
  let spinner = document.createElement('div');
  spinner.setAttribute('id', 'spinner');
  spinner.innerHTML = `
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>

        `;

  formulario.appendChild(spinner);

  setTimeout(() => {
    spinner.remove();
    botonTrabajaNosotros.style.display = 'flex';
  }, 3000);
}
