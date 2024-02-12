// Evento click
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const mensaje1 = document.getElementById("mensaje1");
 
boton1.addEventListener("click",()=>{
    mensaje1.innerHTML=input1.value;  
})

boton2.addEventListener("click",()=>{
    alert(input2.value);
})

boton3.addEventListener("click",()=>{
    console.log(input3.value);
});

// Evento focus
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

input1.addEventListener("focus", ()=>{
    input1.setAttribute("style","background-color:white");
});
        
input2.addEventListener("focus", ()=>{
    input2.setAttribute("style","background-color:white");
});

input3.addEventListener("focus", function() {
    input3.setAttribute("style","background-color:white");
});

// Evento mouseover
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const descripcion = document.getElementById("mensaje3");

elemento1.addEventListener("mouseover", () => {
    descripcion.textContent = "Se dispara cuando se hace clic en un elemento HTML";
});

elemento2.addEventListener("mouseover", function() {
    descripcion.textContent = "Se dispara cuando un elemento HTML se selecciona o se enfoca";
});

elemento3.addEventListener("mouseover", function() {
    descripcion.textContent = "Se dispara cuando el cursor del mouse se mueve sobre un elemento HTML";
});
