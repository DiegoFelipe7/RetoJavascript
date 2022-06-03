import { view_preguntas } from "../js/view_preguntas.js";
import { Random } from "../services/Random.js";
export const Buttons = (id, name, nombre, clase, typo, respuesta, field) => {
  let valor = Random();
  let username = field;

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
      let scorePlayer = 1;
      scorePlayer = scorePlayer + 1;
      console.log(scorePlayer);
      const container = document.querySelector("#container");
      container.innerHTML = "";
      view_preguntas(username, valor, scorePlayer);
      alert("son iguales");
    } else {
    }
  });
  return button;
};
