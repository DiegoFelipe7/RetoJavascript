import { view_preguntas } from "../js/view_preguntas.js";
import { Random } from "../services/Random.js";
/*Componentes buttons
 *@params id,name,nombre,clase,typo,respueta,fiel,terminarPartida
 */
export const Buttons = (
  id,
  name,
  nombre,
  clase,
  typo,
  respuesta,
  field,
  terminarPartida
) => {
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
      let scorePlayer = 0;
      scorePlayer = scorePlayer + 1;
      const container = document.querySelector("#container");
      container.innerHTML = "";
      view_preguntas(username, valor, scorePlayer);
      Swal.fire("Respuesta correcta 👍");
    } else {
      Swal.fire("Respuesta incorrecta ❌");
      terminarPartida(e);
    }
  });
  return button;
};
