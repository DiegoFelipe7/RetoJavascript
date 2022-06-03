/*
 *Componente boton
 *@params id , name ,nombre,clase,typo,accion
 *
 */
export const Button = (id, name, nombre, clase, typo, accion) => {
  const button = document.createElement("button");
  clase.forEach((element) => {
    button.classList.add(element);
  });
  button.id = id;
  button.name = name;
  button.textContent = nombre;
  button.type = typo;
  button.onclick = accion;

  return button;
};
