// const textInput1 = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput1.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();
  if (name) {
    textOutput.textContent = name;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
