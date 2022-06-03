import { Div } from "../components/Div.js";
import { H4 } from "../components/H4.js";
export const view_table = () => {
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
   *Creacion de la table con el listado de usuarios
   *
   */
  const subcontainer = Div(["w-75", "h-100", "bg-ligth", "border"]);
  const titulo = H4("Tabla de posiciones", ["text-dark", "text-center"]);
  const table = document.createElement("table");
  table.classList.add("table", "mt-5");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thNombre = document.createElement("th");
  thNombre.textContent = "Nombre";
  const thScore = document.createElement("th");
  thScore.textContent = "Score";
  const tbody = document.createElement("tbody");
  const convercion = JSON.parse(localStorage.getItem("players"));

  convercion.forEach((element) => {
    const trbody = document.createElement("tr");
    const tdnombre = document.createElement("td");
    tdnombre.textContent = element.nombre;
    const tdscore = document.createElement("td");
    tdscore.textContent = element.score;
    trbody.append(tdnombre, tdscore);
    tbody.append(trbody);
  });
  tr.append(thNombre, thScore);
  thead.append(tr);

  table.append(thead, tbody);

  subcontainer.append(titulo, table);

  div.append(subcontainer);
  container.append(div);
  console.log(container);
};
