
const boxesContainer = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createBoxBtn = document.querySelector('button[data-create]');
const destroyBoxBtn = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes() {

  const boxes = [];

  for(let i=0; i < amount; i+=1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.width = 30;
    box.height = 30;
      if (i>=1){
        const k=i*10;
        box.width += k;
        box.height += k;
      }
      box.style.width = box.width + "px"
      box.style.height = box.height + "px"
      boxes.push(box);
    }
  
  console.log(boxes);
  console.log(amount)

  return boxesContainer.append(...boxes);

}

function destroyBoxes(){
  return boxesContainer.innerHTML = '';
}
let amount
inputEl.addEventListener("input", (e) => {
  amount = e.target.value;
  console.log(amount)
  return amount;
});

createBoxBtn.addEventListener('click', createBoxes);
destroyBoxBtn.addEventListener('click', destroyBoxes);