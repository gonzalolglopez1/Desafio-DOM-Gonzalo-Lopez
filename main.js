let nombre = prompt("como te llamas?");
let apellido = prompt("cual es tu apellido?")
let profesion = prompt("a que te dedicas?")

let Nombre = document.querySelector(".nombre")
let Apellido = document.querySelector(".apellido")
let Profesion = document.querySelector(".profesion")



Nombre.innerHTML = nombre;
Apellido.innerHTML = apellido;
Profesion.innerHTML = profesion;

let boton = document.querySelector(".boton");
boton.addEventListener("click", unalerta);
function unalerta() {
    if (boton != false) {
        alert("Interaccion Lograda")
    }else{
        alert("Interaccion no Lograda")
    }
}