//Undo ke liye bnayi ye tool.js
// ismein sirf tool ka kaam hoga

let undo = document.querySelector("#undo");

undo.addEventListener("click", undoLine);

function undoLine(){

    if(linesDB.length>0){
        linesDB.pop();
        // clear canvas
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        drawLinesFromDB();
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