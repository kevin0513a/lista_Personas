class Persona {
    constructor(nombre, apellido, tel) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._tel = tel;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get tel() {
        return this._tel;
    }

    set tel(tel) {
        this._tel = tel;
    }
}

const personas = [
    new Persona("Kevin", "Arboleda", 3114784967),
    new Persona("Raul", "Alvarez", 3125847847),

];

function mostrarPersonas() {
    let texto = "";

    for (let i = 0; i < personas.length; i++) {
        const primeraLetra = personas[i].nombre.charAt(0).toUpperCase();
        console.log(personas[i]);
        texto += `<tr>
        <td>
        <div class="icono">${primeraLetra}</div>
        </td>
        <td>${personas[i].nombre}</td>
        <td>${personas[i].apellido}</td>
        <td>${personas[i].tel}</td>
        </tr>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function mostrarFormulario() {
    const datosForm = document.getElementById('formContainer');
    datosForm.classList.toggle('show'); // Alterna la clase "show"
}


function agregarPersonas() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre != '' && apellido != '' && telefono != '') {
        const persona = new Persona(nombre, apellido, telefono);
        personas.push(persona);
        console.log("Listado de personas actualizado -->")
        mostrarPersonas();
    } else {
        console.log('Debes completar los campos requeridos');
        return;
    }
}

const input1 = document.getElementById('nombre');
input1.setAttribute("autocomplete", "off");
const input2 = document.getElementById('apellido');
input2.setAttribute("autocomplete", "off");
const input3 = document.getElementById('telefono');
input3.setAttribute("autocomplete", "off");

function getRandomColor() { 
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; 
  }
  
  function assignRandomColors() {
    const elements = document.querySelectorAll('.icono');
    elements.forEach(el => {
      el.style.backgroundColor = getRandomColor();
    });
  }