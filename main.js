const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

//Agregamos un eventListener al boton
addBtn.addEventListener("click", (e) => {
   e.preventDefault(); //Para evitar que se recarge la página. Esto sucede porque
   //al dar clic al boton y este esta dentro del formulario hace que se envien los datos
   //Sale ? en la barra de link

   const text = input.value; //Hace que cuando se de click al boton, capture el valor de input
   //y se guarda en la variable "text"

   // console.log(text);

   if (text !== '') {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;

      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      ul.appendChild(li);

      input.value = ""; //Limpia el input despues de enviar los datos

      empty.style.display = "none"; // Para quitar el texto que dice "sin tareas" cuando ya se haya añadido elementos a la lista
   }
});


function addDeleteBtn() {
   const deleteBtn = document.createElement("button");

   deleteBtn.textContent = "x";
   deleteBtn.className = "btn-delete";

   deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item); //Para poder eliminar un objeto del DOM no podemos eliminarlo directamente, tenemos
      //que eliminarlo desde el elemento padre

      const items = document.querySelectorAll('li');

      if (items.length === 0) {
         empty.style.display = "block";
      }
   });

   return deleteBtn;
}
