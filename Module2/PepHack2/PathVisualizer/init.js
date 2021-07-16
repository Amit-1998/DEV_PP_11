let outputContainer = document.querySelector(".OutputArea");

function makeMatrix() {

   let tableDiv = `<div class="matrix">`;
   for (let i = 0; i < 20; i++) {
      tableDiv += `<div class="row">`;
      for (let j = 0; j < 20; j++) {
         tableDiv += `<div class="cell" contenteditable="true" rowid = "${i}" colid="${j}">(${i},${j})</div>`;
      }
      tableDiv += `</div>`;
   }
   tableDiv += `</div>`;
   outputContainer.innerHTML = tableDiv;
}
makeMatrix();






