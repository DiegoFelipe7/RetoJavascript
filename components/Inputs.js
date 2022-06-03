/*componente inputs*/
export const Inputs = (id, name, placeholder, clase) => {
  const inputs = document.createElement("input");
  inputs.type = "text";
  inputs.id = id;
  inputs.name = name;
  inputs.placeholder = placeholder;
  inputs.required = true;
  clase.forEach((element) => {
    inputs.classList.add(element);
  });
  return inputs;
};
