import { Inputs } from "../components/Inputs.js";
import { Button } from "../components/Button.js";
import { Div } from "../components/Div.js";
import { Label } from "../components/Label.js";
import { H4 } from "../components/H4.js";
import { Form } from "../components/Form.js";
import { usuarios } from "../services/index.js";
export const view_index = () => {
  const container = document.querySelector("#container");

  const div = Div([
    "w-25",
    "h-50",
    "bg-white",
    "rounded",
    "m-0",
    "d-flex",
    "justify-content-center",
    "aling-items-center",
  ]);

  /*
   *crecion del form
   *
   */
  const form = Form("id_usuario", ["w-75", "h-50"], "POST");
  const h1 = H4("¿Quien quiere ser millonario?", [
    "text-black",
    "font-bold",
    "text-center",
    "mt-5",
    "fs-2",
  ]);
  /*Elementos del form*/
  const mb = Div(["mt-5"]);
  const label = Label("Nombre Jugador", ["form-label", "font-bold"]);
  const input = Inputs("nombre", "nombre", "Ingresa tu nombre", [
    "form-control",
    "w-100",
  ]);
  const button = Button(
    "iniciar",
    "iniciar",
    "Iniciar juego",
    [
      "font-bold",
      "bg-dark",
      "w-100",
      "text-white",
      "text-center",
      "mt-2",
      "p-2",
      "rounded",
    ],
    "submit",
    (event) => {
      event.preventDefault();
      const field = document.getElementById("nombre").value;
      const players = {
        nombre: field,
        score: 0,
      };
      const usuario = [];
      usuario.push(players);
      console.log(usuario);

      localStorage.setItem("players", JSON.stringify(usuario));

      window.addEventListener("onload", view_index());
    }
  );

  /*Estructura del proyecto*/
  mb.append(label, input, button);
  form.append(h1, mb);
  div.append(form);
  container.append(div);
  console.log(container);
};
