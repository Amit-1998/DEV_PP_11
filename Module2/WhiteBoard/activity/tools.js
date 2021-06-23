//Undo ke liye bnayi ye tool.js
// ismein sirf tool ka kaam hoga

let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoLine);
redo.addEventListener("click",redoLine);

function undoLine(){

    if(linesDB.length>0){
        let undoLine = linesDB.pop();
        redoLinesDB.push(undoLine);
        // clear canvas
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        drawLinesFromDB();
    }
    
}

function redoLine(){
    if(redoLinesDB.length>0){
        let redoLine = redoLinesDB.pop();
        for(let i=0; i<redoLine.length; i++){
            let pointObject = redoLine[i];
            if(pointObject.type == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            }
            else{
               ctx.lineTo(pointObject.x, pointObject.y);
               ctx.stroke();
            }
        }
        linesDB.push(redoLine);
    }
}

function drawLinesFromDB(){
    for(let i=0; i<linesDB.length; i++){
        let line = linesDB[i];
        for(let j=0; j<line.length; j++){
            let pointObject = line[j];
            if(pointObject.type == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            }
            else{
               ctx.lineTo(pointObject.x, pointObject.y);
               ctx.stroke();
            }
        }
    }
}

