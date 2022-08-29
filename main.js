// JavaScript

// Get The Elements
const container = document.querySelector('#container');
const info = document.querySelector('#info');
const boxes = document.querySelector('#boxes');

// Get The DOM
const numHeading = document.createElement('h2');
const getNum = document.createElement('input');
const button = document.createElement('button')


getNum.setAttribute('type', 'number');
getNum.setAttribute('min', '1');
getNum.setAttribute('max', '64');
numHeading.textContent = 'Choose The Grid Size';
button.textContent = 'Start';

info.append(numHeading, getNum, button)
info.setAttribute('id', 'info-container');

function clickFn() {
  boxes.innerHTML = '';
  const getVal = getNum.value;
  boxes.style.setProperty('display', 'grid')
  boxes.style.gridTemplateColumns = `repeat(${getVal}, 1fr)`;
  boxes.style.gridTemplateRows = `repeat(${getVal}, 1fr)`;
  for (let i = 0; i < getVal * getVal; i++) {
    const createDivs = document.createElement('div');
    createDivs.addEventListener('mouseover', (e) => {
      const getTarget = e.currentTarget;
      getTarget.style.backgroundColor = 'seagreen';
    })
    boxes.appendChild(createDivs);
  }

}

button.addEventListener('click', clickFn);