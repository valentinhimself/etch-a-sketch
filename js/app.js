const sketchContainer = document.querySelector('.sketch-container ');
const input = document.querySelector('input');
let containerWidth = input.value;
let containerHeight = containerWidth;

function startGame () {
    createCells ();
    changeColorOnHover () ;

}

function createCells () {
    for (let i = 0; i<containerWidth*containerWidth; i++) {
        const cell = document.createElement('div');
        cell.style.width = 16/input.value+'em';
        cell.style.height = 16/input.value+'em';
        sketchContainer.appendChild(cell);
    }
}

function changeColorOnHover () {
    for (let i = 0; i < sketchContainer.children.length; i++) {
        sketchContainer.children[i].addEventListener('mouseover', () => sketchContainer.children[i].style. backgroundColor="gray"
        );
    }
}
startGame () ;
