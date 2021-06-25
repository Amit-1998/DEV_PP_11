let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

pen.addEventListener("click", function(){
    if(pen.classList.contains("active-tool")){
        // pen already active hai
        // pen tool options honge
        if(penOptions.classList.contains("hide")){
            penOptions.classList.remove("hide"); // remove hide class from penOptions
            penOptions.style.display="block";
        }
        else{
            penOptions.classList.add("hide");
            penOptions.style.display="none";
        }
    }
    else{
       // pen is not active
       // make pen active
       eraser.classList.remove("active-tool");
       eraser.classList.add("fade");
       //aisa ho sakta hai ki eraser ke options pehle se khul rakhe ho
       eraserOptions.classList.add("hide");
       eraserOptions.style.display = "none";

       pen.classList.remove("fade");
       pen.classList.add("active-tool");
       
    }
});

eraser.addEventListener("click", function(){
    if(eraser.classList.contains("active-tool")){
        // eraser already active
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide"); // remove hide class from penOptions
            eraserOptions.style.display = "block"; 
        }
        else{
            eraserOptions.classList.add("hide");
            eraserOptions.style.display = "none";
        }
    }
    else{
        // eraser not active
        pen.classList.remove("active-tool");
        pen.classList.add("fade");
        penOptions.classList.add("hide");
        penOptions.style.display = "none";

        eraser.classList.add("active-tool");
        eraser.classList.remove("fade");
        
    }
});