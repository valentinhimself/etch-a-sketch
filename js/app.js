const sketchContainer = document.querySelector('.sketch-container ');
const containerWidth= 16;
const containerHeight = containerWidth;

/*
function createCells () {
    for (let i = 0; i<containerWidth*containerWidth; i++) {
        const sketchCell = document.createElement('div');
        sketchCell.addEventListener('mouseover', () => sketchCell.setAttribute('style','background-color:gray;'))
        sketchContainer.appendChild(sketchCell);
    }
}
createCells ();

*/
function createCells () {
    for (let i = 0; i<containerWidth*containerWidth; i++) {
        sketchContainer.appendChild(document.createElement('div'));
    }
}

function changeColorOnHover () {
    for (let i = 0; i < sketchContainer.children.length; i++) {
        sketchContainer.children[i].addEventListener('mouseover', () => sketchContainer.children[i].setAttribute('style','background-color:gray;'));
    }
}
createCells ();
changeColorOnHover ();

        //sketchCell.addEventListener('mouseover', () => sketchCell.setAttribute('style','background-color:gray;'))

//const sketchCell = document.querySelector('.sketch-container>div')
//sketchCell.addEventListener('mouseover', () => sketchCell.setAttribute('style','background-color:blue;'))

