const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  let symbols = e.target.value.length;

  if (+inputEl.getAttribute("data-length") === symbols) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});

inputEl.addEventListener("focus", (e) => {
  if (
    inputEl.classList.contains("valid") ||
    inputEl.classList.contains("invalid")
  ) {
    let currentClass = inputEl.classList.value;
    inputEl.classList.remove(currentClass);
  }
});
