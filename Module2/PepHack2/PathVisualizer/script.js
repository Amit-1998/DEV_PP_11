let matrix = document.querySelector(".matrix");
let allCells = document.querySelectorAll(".cell"); // 400 cells

let start_x = document.querySelector("#st-rowNo");
let start_y = document.querySelector("#st-colNo");

let end_x = document.querySelector("#en-rowNo");
let end_y = document.querySelector("#en-colNo");

let algoButton = document.querySelector("#start-Algo");

let xOfstartPoint;
let yOfstartPoint;
let xOfendPoint;
let yOfendPoint;

start_x.addEventListener("blur", function(e){
    xOfstartPoint = e.target.value;
    console.log(xOfstartPoint);
});

start_y.addEventListener("blur", function(e){
    yOfstartPoint = e.target.value;
    console.log(yOfstartPoint);
    
    let idx = Number(xOfstartPoint) * 20 + Number(yOfstartPoint);
    let cellKaDiv = allCells[idx];
    console.log(cellKaDiv);  
    cellKaDiv.classList.add("start");
    cellKaDiv.innerHTML = `<i class="fas fa-running"></i>`;

});

end_x.addEventListener("blur", function(e){
    xOfendPoint = e.target.value;
    console.log(xOfendPoint);
});

end_y.addEventListener("blur", function(e){
    yOfendPoint = e.target.value;
    console.log(yOfendPoint);
    
    let idx = Number(xOfendPoint) * 20 + Number(yOfendPoint);
    let cellKaDiv = allCells[idx];
    console.log(cellKaDiv);  
    cellKaDiv.classList.add("end");
    cellKaDiv.innerHTML = `<i class="far fa-stop-circle"></i>`;
    
});

algoButton.addEventListener("click", function(e){
    //  console.log(e);
      BFS();
});

