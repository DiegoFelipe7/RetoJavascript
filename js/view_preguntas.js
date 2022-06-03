import { Buttons } from "../components/Buttons.js";
import { Button } from "../components/Button.js";
import { Div } from "../components/Div.js";
import { H4 } from "../components/H4.js";
import { data } from "../data/data.js";
import { Random } from "../services/Random.js";
import { view_table } from "./view_table.js";

export const view_preguntas = (field, valor, scorePlayer) => {
  console.log(valor);
  const container = document.querySelector("#container");
  /**
   * Div padre
   */
  let scorePlayers = 0;
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
  const name = H4(`Hola ${field} Bienvenido 😊`, ["font-bold"]);

  const div_game_info = Div(["w-100", "bg-dark", "h-50", "mt-5", "rounded"]);

  const score = H4("Tu puntaje es: " + scorePlayer, [
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
    "button",
    (event) => {
      Swal.fire({
        title: "¿Estas seguro de retirarte?",
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Felicitaciones!", "", "success");
          /*Terminar partida*/
          terminarPartida(event);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
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
  valor = Random();
  data.forEach((element, index) => {
    if (index === valor) {
      const question = H4(`¿${element.pregunta}?`, ["font-bold"]);
      divQuestion.append(question);
      const hr = document.createElement("hr");
      hr.classList.add("w-100", "bg-white", "text-white", "p-1");

      /**
       * Creacion de los botones para dar respuesta
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
        `${element.solucion}`,
        field
      );

      const optio2 = Buttons(
        "opcion-2",
        "opcion-2",
        `${element.respuestas[1]}`,
        ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
        "button",
        `${element.solucion}`,
        field
      );

      const optio3 = Buttons(
        "opcion-3",
        "opcion-3",
        `${element.respuestas[2]}`,
        ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
        "button",
        `${element.solucion}`,
        field
      );

      const optio4 = Buttons(
        "opcion-4",
        "opcion-4",
        `${element.respuestas[3]}`,
        ["btn", "btn-secondary", "w-50", "text-white", "mt-2", "p-2"],
        "button",
        `${element.solucion}`,
        field
      );

      const category = H4(`Categoria : ${element.categoria}`, [
        "text-white",
        "text-white",
        "mt-2",
      ]);

      opciones.append(optio1, optio2, optio3, optio4, category);
      div_rigth.append(divQuestion, hr, opciones);
    }
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
  /*
   *
   */

  function terminarPartida(event) {
    event.preventDefault();
    let usuarios = [
      { nombre: "Diego", score: 10 },
      { nombre: "Carlos", score: 12 },
    ];

    let players = {
      nombre: field,
      score: scorePlayer,
    };
    usuarios.push(players);
    localStorage.setItem("players", JSON.stringify(usuarios));
    container.innerHTML = "";
    view_table();
  }
};
