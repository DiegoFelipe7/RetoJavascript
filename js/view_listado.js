import { Buttons } from "../components/Buttons.js";
import { Label } from "../components/Label.js";
import { Button } from "../components/Button.js";
import { Div } from "../components/Div.js";
import { H4 } from "../components/H4.js";
import { Form } from "../components/Form.js";
import { Inputs } from "../components/Inputs.js";
import { data } from "../data/data.js";
export const view_listado = () => {
  const container = document.querySelector("#container");
  const div = Div([
    "w-25",
    "h-75",
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
  const form = Form("id_usuario", ["w-75", "h-100"], "POST");
  const h1 = H4("¿Quien quiere ser millonario?", [
    "text-black",
    "font-bold",
    "text-center",
    "mt-2",
    "fs-2",
  ]);
  /*Elementos del form*/
  const mb = Div(["mt-1"]);
  const label = Label("Pregunta", ["form-label", "font-bold"]);
  const input = Inputs("pregunta", "pregunta", "Ingresa la pregunta", [
    "form-control",
    "w-100",
  ]);
  /*Div con su label y input*/
  const mb1 = Div(["mt-1"]);
  const label1 = Label("Opcion 1", ["form-label", "font-bold"]);
  const input1 = Inputs("respuesta1", "respuesta1", "Ingresa la Opcion", [
    "form-control",
    "w-100",
  ]);

  /*Div con su label y input*/
  const mb2 = Div(["mt-1"]);
  const label2 = Label("Opcion 2", ["form-label", "font-bold"]);
  const input2 = Inputs("respuesta2", "respuesta2", "Ingresa la Opcion", [
    "form-control",
    "w-100",
  ]);

  /*Div con su label y input*/
  const mb3 = Div(["mt-1"]);
  const label3 = Label("Opcion 3", ["form-label", "font-bold"]);
  const input3 = Inputs("respuesta3", "respuesta3", "Ingresa la Opcion", [
    "form-control",
    "w-100",
  ]);

  /*Div con su label y input*/
  const mb4 = Div(["mt-1"]);
  const label4 = Label("Opcion 4", ["form-label", "font-bold"]);
  const input4 = Inputs("respuesta4", "respuesta4", "Ingresa la Opcion", [
    "form-control",
    "w-100",
  ]);

  /*Div con su label y input*/
  const mb5 = Div(["mt-1"]);
  const label5 = Label("Respuesta correcta", ["form-label", "font-bold"]);
  const input5 = Inputs("correcta", "correcta", "Ingresa la respuesta", [
    "form-control",
    "w-100",
  ]);
  /**
   *Crecion del boton
   */
  const button = Button(
    "iniciar",
    "iniciar",
    "Registrar pregunta",
    [
      "font-bold",
      "bg-ligth",
      "w-100",
      "text-black",
      "text-center",
      "mt-2",
      "p-2",
      "rounded",
    ],
    "submit",
    (event) => {
      /*Caputar los valors*/
      event.preventDefault();
      let pregunta = document.getElementById("pregunta").value;
      let respuesta1 = document.getElementById("respuesta1").value;
      let respuesta2 = document.getElementById("respuesta2").value;
      let respuesta3 = document.getElementById("respuesta3").value;
      let respuesta4 = document.getElementById("respuesta4").value;
      let correcta = document.getElementById("correcta").value;

      if (
        pregunta === "" ||
        respuesta1 === "" ||
        respuesta2 === "" ||
        respuesta3 === "" ||
        respuesta4 === "" ||
        correcta == ""
      ) {
        Swal.fire("Todos los campos son obligatorios");
        return;
      }
      /*Construnccion de un objeto */
      const objeto = {
        id: 26,
        categoria: "Tecnologia",
        pregunta: pregunta,
        respuestas: [respuesta1, respuesta2, respuesta3, respuesta4],
        nivel: 6,
        solucion: "correcta",
      };
      /*Registramos el dato el nuestra data*/
      data.push(objeto);
      Swal.fire("Dato registrado");
      data.forEach((element) => {
        console.log(element);
      });
    }
  );

  /*Estructura del proyecto*/
  mb.append(label, input);
  mb1.append(label1, input1);
  mb2.append(label2, input2);
  mb3.append(label3, input3);
  mb4.append(label4, input4);
  mb5.append(label5, input5, button);
  form.append(h1, mb, mb1, mb2, mb3, mb4, mb5);
  div.append(form);
  container.append(div);
  console.log(container);
};
