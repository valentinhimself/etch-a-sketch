const sketchContainer = document.querySelector('.sketch-container ');
const input = document.querySelector('input');
let containerWidth = input.value;
let containerHeight = containerWidth;
input.addEventListener ('change', updateValue)

function startGame () {
    input.step = 16;
    createCells ();
    changeColorOnHover () ;

}

function createCells () {
    for (let i = 0; i<containerWidth*containerWidth; i++) {
        const cell = document.createElement('div');
        cell.style.width = 24/input.value+'em';
        cell.style.height = 24/input.value+'em';
        sketchContainer.appendChild(cell);
    }
}

function changeColorOnHover () {
    for (let i = 0; i < sketchContainer.children.length; i++) {
        sketchContainer.children[i].addEventListener('mouseover', () => sketchContainer.children[i].style.backgroundColor="gray"
        );
    }
}

function removeCells () {
    while (sketchContainer.children.length>0) {
        sketchContainer.removeChild(sketchContainer.firstChild)
    }
}

function updateValue(e) {
    removeCells ();
    containerWidth = e.target.value;
    startGame();

  }

startGame () ;
