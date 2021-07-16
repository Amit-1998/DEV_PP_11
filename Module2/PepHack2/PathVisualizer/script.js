let matrix = document.querySelector(".matrix");
let cells = document.querySelectorAll(".cell");

let start_x = document.querySelector("#st-rowNo");
let start_y = document.querySelector("#st-colNo");

let end_x = document.querySelector("#en-rowNo");
let end_y = document.querySelector("#en-colNo");

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("click", function(e){
        console.log(e);
    });
}