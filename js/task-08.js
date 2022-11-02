const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  if (formElements.email.value.trim() && formElements.password.value.trim()) {
    const objData = {
      [formElements.email.name]: formElements.email.value,
      [formElements.password.name]: formElements.password.value,
    };
    console.log(objData);
  } else {
    console.log("Alert! All input fields must be filled.");
  }
  formEl.reset();
}
