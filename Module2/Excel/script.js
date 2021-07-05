let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
// in teeno ki top and left set karenge

cellsContainer.addEventListener("scroll", function(e){
     // console.log(e);
     // console.log(e.target.scrollTop, e.target.scrollLeft);
     let topOffset = e.target.scrollTop;
     let leftOffset = e.target.scrollLeft;
     
     topRow.style.top = topOffset + "px";
     topLeftCell.style.top = topOffset + "px";
     topLeftCell.style.left = leftOffset + "px";
     leftCol.style.left = leftOffset + "px";

});

let allCells = document.querySelectorAll(".cell");

for(let i=0; i<allCells.length; i++){
    allCells[i].addEventListener("blur", function(e){
        // logic to save this value in db
        let rowId = e.target.getAttribute("rowId");
        let colId = e.target.getAttribute("colid");
        let cellValueFromUI = e.target.textContent;
        // cellobject ki value update !!
        let cellObject = db[rowId][colId];
        cellObject.value = cellValueFromUI;
        
    });
}