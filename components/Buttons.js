import { usuarios } from "../services/index.js";
export const Buttons = (id, name, nombre, clase, typo, respuesta) => {
  const button = document.createElement("button");
  clase.forEach((element) => {
    button.classList.add(element);
  });
  button.id = id;
  button.name = name;
  button.textContent = nombre;
  button.type = typo;
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (nombre === respuesta) {
      alert("son iguales");
      usuarios.score += 1;
      console.log(usuarios.score);
    } else {
      alert("diferentes");
    }
  });
  return button;
};
