export const Label = (titulo, clase) => {
  const label = document.createElement("label");
  label.textContent = titulo;
  clase.forEach((element) => {
    label.classList.add(element);
  });
  return label;
};
