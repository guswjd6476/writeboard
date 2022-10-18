function canvasstyle(){
const lineWidth = document.getElementById("line-width")
const color = document.getElementById("color")
const colorOptions = Array.from(document.getElementsByClassName("color-option"))
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraseBtn = document.getElementById("erase-btn")
const saveBtn = document.getElementById("save")
const fileInput = document.getElementById("file")
const textInput = document.getElementById("text")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
console.log(canvas)
console.log(ctx)

const CANVAS_WIDTH = "800";
const CANVAS_HEIGHT = "800";
canvas.width = 800
canvas.height = 800

ctx.lineWidth = lineWidth.value
ctx.lineCap = "round "

let isPainting = false;
let isFilling = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown(){
    isPainting = true
}

function onMouseUp(){
    isPainting = false
}

function onLineWidthChange(event){
    ctx.lineWidth = lineWidth.value
}
function onColorChange(event){
    ctx.strokeStyle = event.target.value
    ctx.fillStyle = event.target.value
}

function onColorClick(event){
    const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    color.value = colorValue
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill"
    }else{
        isFilling = true
        modeBtn.innerText="draw"
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0, 0, 800, 800)
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 800, 800)
}

function onEraseClick(){
    ctx.strokeStyle = "white";
    isFilling = false
    modeBtn.innerText = "Fill"
}



function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image()
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null
    }
}

function onDoubleClick(event){
    const text = textInput.value
    if(text !== null){
        ctx.save();
        ctx.lineWidth = 1
        ctx.font = "48px serif"
        ctx.fillText(text, event.offsetX, event.offsetY)
        ctx.restore()
    }
}

function onSaveClick(){
    const url = canvas.toDataURL()
    const a = document.createElement("a")
    a.href = url
    a.download = "myDrawing.png"
    a.click()

}


canvas.addEventListener("dblclick", onDoubleClick)
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown",onMouseDown)
canvas.addEventListener("mouseup",onMouseUp)
canvas.addEventListener("mouseleave",onMouseUp)
canvas.addEventListener("click",onCanvasClick)

lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)

colorOptions.forEach(color => color.addEventListener("click",onColorClick))


saveBtn.addEventListener("click", onSaveClick)
modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraseBtn.addEventListener("click", onEraseClick)
fileInput.addEventListener("change", onFileChange)
}

canvasstyle()