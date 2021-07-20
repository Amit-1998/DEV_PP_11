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

let srcCellKaDiv;
let destCellKaDiv;

start_x.addEventListener("blur", function(e){
    xOfstartPoint = e.target.value;
    console.log(xOfstartPoint);
});

start_y.addEventListener("blur", function(e){
    yOfstartPoint = e.target.value;
    console.log(yOfstartPoint);
    
    let idx = Number(xOfstartPoint) * 20 + Number(yOfstartPoint);
    srcCellKaDiv = allCells[idx];
    // console.log(srcCellKaDiv);
    let lastSelectedStartingPoint = document.querySelector(".start");
    if(lastSelectedStartingPoint){
        lastSelectedStartingPoint.classList.remove("start");
        lastSelectedStartingPoint.innerHTML = "";
    }
    
    srcCellKaDiv.classList.add("start");
    srcCellKaDiv.innerHTML = `<i class="fas fa-running"></i>`;
    
    
});

end_x.addEventListener("blur", function(e){
    xOfendPoint = e.target.value;
    console.log(xOfendPoint);
});

end_y.addEventListener("blur", function(e){
    yOfendPoint = e.target.value;
    console.log(yOfendPoint);
    
    let idx = Number(xOfendPoint) * 20 + Number(yOfendPoint);
    destCellKaDiv = allCells[idx];
    // console.log(destCellKaDiv);
    let lastSelectedEndPoint = document.querySelector(".end");
    if(lastSelectedEndPoint){
        lastSelectedEndPoint.classList.remove("end");
        lastSelectedEndPoint.innerHTML = "";
    }
    
    destCellKaDiv.classList.add("end");
    destCellKaDiv.innerHTML = `<i class="far fa-stop-circle"></i>`;

});

algoButton.addEventListener("click", function(e){
    //  console.log(e);
    algoButton.style.background = "lightgreen";
      BFS();
});

