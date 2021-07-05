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