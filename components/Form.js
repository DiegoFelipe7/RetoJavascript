export const Form = (id, clase, method) => {
  const form = document.createElement("form");
  form.autocomplete = "off";
  form.id = id;
  clase.forEach((element) => {
    form.classList.add(element);
  });
  form.method = method;
  form.required;
  return form;
};
