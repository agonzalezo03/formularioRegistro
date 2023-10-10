const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const contraseña = document.getElementById('contraseña');
const confirmarContraseña = document.getElementById('confirmaContraseña');
const acepta = document.getElementById('acepta');
const formulario = document.getElementById('formulario');
const botonRegistro = document.getElementById('bottonRegistro');

let nombreError = true;
let telefonoError = true;
let contraseñaError = true;
let confirmarContraseñaError = true
let aceptaError = true;

nombre.addEventListener("blur", validarNombre);
telefono.addEventListener("blur", validarTelefono);
contraseña.addEventListener("blur", validarContraseña);
confirmarContraseña.addEventListener("blur", validarConfirmarContraseña)
acepta.addEventListener("change", validarCheck);

function validarFormulario() {
    if (!nombreError && !telefonoError && !contraseñaError && !confirmarContraseñaError && !aceptaError) {
        botonRegistro.classList.remove("notAvailable");
        botonRegistro.removeAttribute("disabled");
    } else {
        botonRegistro.classList.add("notAvailable");
        botonRegistro.setAttribute("disabled", "disabled");
    }
}

function validarNombre() {
    var nombreRegex = /^[a-zA-Z\s]{1,20}$/;
    if (!nombre.value.match(nombreRegex)) {
        nombre.classList.add("error");
        nombre.classList.remove("bien");
        nombreError = true;
    } else {
        nombre.classList.remove("error");
        nombre.classList.add("bien");
        nombreError = false;
    }
    validarFormulario();
}

function validarTelefono() {
    var telefonoRegex = /^\d{9}$/;
    if (!telefono.value.match(telefonoRegex)) {
        telefono.classList.add("error");
        telefono.classList.remove("bien");
        telefonoError = true;
    } else {
        telefono.classList.remove("error");
        telefono.classList.add("bien");
        telefonoError = false;
    }
    validarFormulario();
}

function validarContraseña() {
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!contraseña.value.match(contraseñaRegex)) {
        contraseña.classList.add("error");
        contraseña.classList.remove("bien");
        contraseñaError = true;
    } else {
        contraseña.classList.remove("error");
        contraseña.classList.add("bien");
        contraseñaError = false;
    }
    validarConfirmarContraseña();
    validarFormulario();
}

function validarConfirmarContraseña(){
    if (contraseña.value !== confirmarContraseña.value) {
        confirmarContraseña.classList.add("error");
        confirmarContraseña.classList.remove("bien");
        confirmarContraseñaError = true;
    } else {
        confirmarContraseña.classList.remove("error");
        confirmarContraseña.classList.add("bien");
        confirmarContraseñaError = false;
    }
    validarContraseña();
    validarFormulario();
}

function validarCheck() {
    if (!acepta.checked) {
        aceptaError = true;
    } else {
        aceptaError = false;
    }
    validarFormulario();
}
