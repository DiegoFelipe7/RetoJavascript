/*Component h4*/
export const H4 = (title, clase) => {
  const h4 = document.createElement("h4");
  clase.forEach((element) => {
    h4.classList.add(element);
  });
  h4.textContent = title;
  return h4;
};
