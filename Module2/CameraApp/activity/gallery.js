
let db;
let dbOpenRequest = indexedDB.open("Gallery", 1);

dbOpenRequest.onupgradeneeded = function(e){ // async function
     db = e.target.result;
     // table bna lo "MediaTable name ki"
     db.createObjectStore("MediaTable", { keyPath: "mid"}); // table will only be create when db is create first time
}

dbOpenRequest.onsuccess = function(e){
    db = e.target.result; 
    fetchMedia();
}

dbOpenRequest.onerror = function(e){
    alert("Inside on error !!");
}


function fetchMedia(){  // showmedia() vaala code
    let txnObject = db.transaction("MediaTable", "readonly");
    let mediaTable = txnObject.objectStore("MediaTable"); //to get complete table

    let cursorObject = mediaTable.openCursor(); // to iterate on all the values / tuples of mediaTable
    cursorObject.onsuccess = function(e){
         let cursor = cursorObject.result; // pehla tuple milega table ka
         if(cursor){
             let mediaObj = cursor.value; // mid: 1 ke samne value mein pada object milega 
             if(mediaObj.type == "photo"){
                 appendPhoto(mediaObj);
             }
             else{
                 appendVideo(mediaObj);
             }
             // aage tuples milte rahenge(means fir function(e) ko call lagti rahegi continue() se )
             cursor.continue();
         }
         
    };
}






