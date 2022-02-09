const sketchContainer = document.querySelector('.sketch-container ');
const input = document.querySelector('input');
let containerWidth = input.value;
let containerHeight = containerWidth;
const flag = document.querySelector('#flag');
const reset = document.querySelector('.btn-reset');
const sizeLabel = document.querySelector('.size-label')
input.addEventListener ('change', updateValue);
flag.addEventListener('click', changeFlag);
reset.addEventListener('click', resetSketch);

function changeFlag(e){
    if(e.target.value==="false") {
        e.target.value = "true";
        e.target.style.backgroundColor='pink';
        e.target.textContent = "RGB mode ON";
    }
    else {
        e.target.value = "false";
        e.target.style.backgroundColor="";
        e.target.textContent = "Gray scale mode ON";
    }
}

function randomColor () {
    let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let pickColor = Math.floor(Math.random()*7);
    return colorArray[pickColor];
}


function startGame () {
    input.step = 16;
    sizeLabel.textContent = `${containerWidth} x ${containerWidth}`
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
        sketchContainer.children[i].addEventListener('mouseover', () => {
            if (flag.value=="false") {
                sketchContainer.children[i].style.backgroundColor = "gray";
            }
            else {
                sketchContainer.children[i].style.backgroundColor = randomColor();
            }
            
        });
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

function resetSketch () {
    for (let i = 0; i < sketchContainer.children.length; i++) {
        sketchContainer.children[i].style.backgroundColor = "lightgray"; }
}
 
startGame () ;
