let fs = require("fs");

function getFilesData(files){
    let filesData = "";
    for(let i=0; i<files.length; i++){
       if(!fs.existsSync(files[i])){
         console.log("One or more Files Doesn't Exist !");
         return;
       }
       if (i == files.length - 1) {
        filesData += fs.readFileSync(files[i]);
      } else {
        filesData += fs.readFileSync(files[i]) + "\r\n";
      }
    }
    return filesData;
}

function applySFlag(data){
    /* Hey I am F1   This is my input i.e content of f1kaData
       space
       space
       space
       space
       space
       Bye I am F1 */

    // I want something this kind of Output on -s flag
    /* Hey I am F1   
       space
       Bye I am F1 */
    
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = data.split("\r\n");
    // [ 'Hey I am F1', '', '', '', '', '', 'Bye I am F1' ]
    //console.log(splittedData);

    for(let i=0; i<splittedData.length; i++){
        if(splittedData[i]=="" && !emptyIncluded){
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        }
        else if(splittedData[i]!=""){
            removedSpaces.push(splittedData[i]);
            if(i<splittedData.length-2){//This condn is for // [ 'Hey I am F1', '', '', '', '', '', 'Bye I am F1','','' ]
              emptyIncluded = false; 
            }
        }
    }
    let removedSpacesString = removedSpaces.join("\r\n");  //Every data in String should be join with "Enter" 
    return removedSpacesString;
}

function applyBFlag(data){
    let count = 1;
    let splittedData = data.split("\r\n");
    for(let i=0; i<splittedData.length; i++){
       if(splittedData[i]!=""){
           // splittedData[i] = `${count}. ${splittedData[i]}`; // ${count} => evaluates and put the value of count 
           splittedData[i] = count+". "+splittedData[i];
           count++;
       }
    }
    let bFlaggedString = splittedData.join("\r\n");
    return bFlaggedString;
}

function applyNFlag(data){
    let count = 1;
    let splittedData = data.split("\r\n");
    for(let i=0; i<splittedData.length; i++){
           splittedData[i] = count+". "+splittedData[i];
           count++;
       }
    
    let NFlaggedString = splittedData.join("\r\n");
    return NFlaggedString;
}

module.exports.getFilesData = getFilesData;
module.exports.applySFlag = applySFlag;
module.exports.applyBFlag = applyBFlag;
module.exports.applyNFlag = applyNFlag;