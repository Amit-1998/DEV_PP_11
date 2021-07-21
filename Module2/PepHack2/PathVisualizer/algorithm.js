// xOfstartPoint
// yOfstartPoint
// xOfendPoint
// yOfendPoint

// srcCellKaDiv
// destCellKaDiv
// allCells
// db

function BFS(srcCellKaDiv,destCellKaDiv,db){
    
    let srcrowNo = srcCellKaDiv.getAttribute("rowid");
    let srccolNo = srcCellKaDiv.getAttribute("colid");
    
    let dstrowNo = destCellKaDiv.getAttribute("rowid");
    let dstcolNo = destCellKaDiv.getAttribute("colid");

    let srcNode = {
        row : srcrowNo,
        col : srccolNo,
        dist : 0
    }
   
    let q = new Queue();
    db[srcNode.row][srcNode.col].visited = true;
    q.enqueue(srcNode);

    while(!q.isEmpty()){
       let remNode = q.dequeue();
       // work on removed Node
       let idxInallCellForRemNode = Number(remNode.row) * 20 + Number(remNode.col);
       let removedNodeKaDiv = allCells[idxInallCellForRemNode];


       if(remNode.row == dstrowNo && remNode.col == dstcolNo){
           return;
       }
       else{
           // explore neighbours of current cell
           for(let i=remNode.row-1; i<=remNode.row+1; i++){
               for(let j=remNode.col-1; j<=remNode.col+1; j++){
                   
                   let idxInallCells = Number(i) * 20 + Number(j);
                   let nextMoveKaDiv = allCells[idxInallCells];
                   if(isValidCell(nextMoveKaDiv,i,j)){
                      let nextMoveNode = {
                          row : i,
                          col : j,
                          dist : 0
                      }
                      nextMoveKaDiv.classList.add("move-added"); 
                      db[i][j].visited = true;
                      q.enqueue(nextMoveNode);
                   }
               }
           }
       }
    }
}

function isValidCell(currentPosCellDiv,i,j){
   if(i>=0 && i<20 && j>=0 && j<20 && db[i][j].weight!=-1 && db[i][j].visited==false){
       return true;
   }
   return false;
}