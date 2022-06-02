import { Buttons } from "../components/Buttons.js";
import { Button } from "../components/Button.js";
import { Div } from "../components/Div.js";
import { H4 } from "../components/H4.js";
import {
  Economia,
  Matematicas,
  Ciencia,
  Astronomia,
  Deportes,
} from "../data/data.js";
import { usuarios } from "../services/index.js";
export const view_preguntas = () => {
  const container = document.querySelector("#container");
  /**
   * Div padre
   */
  const div = Div([
    "d-flex",
    "w-50",
    "h-75",
    "bg-white",
    "border",
    "border-white",
    "rounden",
    "shadow-lg",
    "justify-content-center",
    "aling-items-center",
  ]);
  /**
   * Contedero izquierdo
   */
  const div_left = Div([
    "bg-ligth",
    "w-50",
    "justify-content-center",
    "aling-items-center",
  ]);

  const div_user_infor = Div(["w-100", "mt-4", "text-center"]);
  const name = H4(usuarios.nombre, ["font-bold"]);

  const div_game_info = Div(["w-100", "bg-dark", "h-50", "mt-5", "rounded"]);

  const score = H4("Tu puntaje es: " + usuarios.score, [
    "text-white",
    "font-bold",
    "text-center",
    "mt-5",
  ]);

  const awards = H4("Premios:", [
    "text-white",
    "font-bold",
    "text-center",
    "mt-5",
  ]);

  const button_exit = Button(
    "exit",
    "exit",
    "Retirarse",
    ["btn", "btn-danger", "w-100", "p-3", "mt-5", "text-white"],
    "button"
  );

  /**
   * Fin Contedero izquierdo
   */

  /**
   * Contenedor derecho
   */
  const div_rigth = Div([
    "bg-dark",
    "w-50",
    "align-items-center",
    "justify-content-center",
  ]);
  const divQuestion = Div([
    "w-100",
    "bg-white",
    "d-flex",
    "rounded",
    "shadow-lg",
    "mt-5",
    "p-4",
    "text-center",
  ]);

  Deportes.forEach((element) => {
    const question = H4(`${element.pregunta}`, ["font-bold"]);
    divQuestion.append(question);
    const hr = document.createElement("hr");
    hr.classList.add("w-100", "bg-white", "text-white", "p-1");

    /**
     * Creacion delos botones para dar respuest
     */
    let opciones = Div([
      "w-100",
      "d-flex",
      "flex-column",
      "align-items-center",
      "bg-dark",
      "rounded",
      "shadow-lg",
    ]);
    /*Creacion de los botones*/
    const optio1 = Buttons(
      "opcion-1",
      "opcion-1",
      `${element.respuestas[0]}`,
      ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
      "button",
      `${element.solucion}`
    );
    const optio2 = Buttons(
      "opcion-2",
      "opcion-2",
      `${element.respuestas[1]}`,
      ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
      "button",
      `${element.solucion}`
    );
    const optio3 = Buttons(
      "opcion-3",
      "opcion-3",
      `${element.respuestas[2]}`,
      ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
      "button",
      `${element.solucion}`
    );
    const optio4 = Buttons(
      "opcion-4",
      "opcion-4",
      `${element.respuestas[3]}`,
      ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
      "button",
      `${element.solucion}`
    );

    opciones.append(optio1, optio2, optio3, optio4);
    div_rigth.append(divQuestion, hr, opciones);
  });
  /**
   *Fin Contenedor derecho
   */

  /**Estructura */
  div_user_infor.append(name);
  div_game_info.append(score, awards, button_exit);

  div_left.append(div_user_infor, div_game_info);
  div.append(div_left, div_rigth);

  container.append(div);
  console.log(container);
};
