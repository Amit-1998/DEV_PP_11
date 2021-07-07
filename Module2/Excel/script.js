let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
// in teeno ki top and left set karenge

let address = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");

let allCells = document.querySelectorAll(".cell");
let lastSelectedCell;


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

formulaInput.addEventListener("blur", function(e){
     let formula = e.target.value;
     if(formula){
        let cellObject = getCellObjectFromElement(lastSelectedCell);
        let calculatedValue = solveFormula(formula, cellObject);
         // UI update
         lastSelectedCell.textContent = calculatedValue;
         // DB update
         cellObject.value = calculatedValue;
         cellObject.formula = formula;

         // childrens update
         updateChildrens(cellObject.childrens);
     }
});

for(let i=0; i<allCells.length; i++){

    allCells[i].addEventListener("click", function(e){
          let cellObject = getCellObjectFromElement(e.target);
          address.value = cellObject.name;
          formulaInput.value = cellObject.formula;
    });

    allCells[i].addEventListener("blur", function(e){
        lastSelectedCell = e.target;
        // logic to save this value in db
        let cellValueFromUI = e.target.textContent;
        
        if(cellValueFromUI){
            let cellObject = getCellObjectFromElement(e.target);
            
            // check if the given cell has a formula on it
            if(cellObject.formula && cellValueFromUI != cellObject.value){
                 deleteFormula(cellObject);
                 formulaInput.value = "";
            }

            // cellobject ki value update !!     
            cellObject.value = cellValueFromUI;

            // update childrens of the current updated cell
            updateChildrens(cellObject.childrens);
        }
    });
}

function deleteFormula(cellObject){
    cellObject.formula = "";
    for(let i=0; i<cellObject.parents.length; i++){
        let parentName = cellObject.parents[i];
        // let say A1
        let parentcellObject = getCellObjectFromName(parentName);
        // parentcellObject.childrens
        let updatedChildrens = parentcellObject.childrens.filter( function(childName){
             if(childName == cellObject.name){
                 return false;
             }
             return true;
        });
        parentcellObject.childrens = updateChildrens;
    }
    cellObject.parents = [];
}

function solveFormula(formula, selfCellObject){
      // tip : implement infix evaluation
      // ( A1 + A2) => ( 10 + 20 )
      let formulaComps = formula.split(" ");
      // ["(" , "A1" , "+" , "A2" , ")"]

      // find valid component
      for(let i=0; i<formulaComps.length; i++){
          let fComp = formulaComps[i];
          if( (fComp[0] >= "A" && fComp[0] <= "Z") || (fComp[0] >= "a" && fComp[0] <= "z")){
               // A1 || A2
               // fComp = A1
               let parentcellObject = getCellObjectFromName(fComp);
               let value = parentcellObject.value;

               if(selfCellObject){
                   // add yourself as a child of parentcellObject
                   parentcellObject.childrens.push(selfCellObject.name);
                   // update your parents
                   selfCellObject.parents.push(parentcellObject.name);
               }
               
               formula = formula.replace(fComp, value); // A1 ki jagah 10 ko replace kar dega
          }
      }
      // is point par we have ( 10 + 20 ) => we can apply infix evaluation

      let calculatedValue = eval(formula); // apne aap solve kar dega (10 + 20) ko
      return calculatedValue;
}

function getCellObjectFromElement(element){
     let rowId = element.getAttribute("rowid");
     let colId = element.getAttribute("colid");
     return db[rowId][colId];
}

function getCellObjectFromName(name){
     // A100
     let colId = name.charCodeAt(0) - 65; // gives ASCii at index 0
     let rowId = Number(name.substring(1)) - 1;
     return db[rowId][colId];
}

function updateChildrens(childrens){
     for(let i=0; i<childrens.length; i++){
         let child = childrens[i];
         // B1
         let childCellObject = getCellObjectFromName(child);
         let updatedValueOfChild = solveFormula(childCellObject.formula);
         // db update
         childCellObject.value = updatedValueOfChild;
         // UI update
         let colId = child.charCodeAt(0) - 65; // gives ASCii at index 0
         let rowId = Number(child.substring(1)) - 1;
         document.querySelector(`div[rowid= "${rowId}"][colid= "${colId}"]`).textContent = updatedValueOfChild;

         //recursive call
         updateChildrens(childCellObject.childrens);
     }
}