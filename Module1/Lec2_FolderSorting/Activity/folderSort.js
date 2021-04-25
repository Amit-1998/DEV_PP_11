let fs = require("fs");
let extensionsMapping = require("./util.js");

/*
{
    
    "Documents": ["doc", "pdf", "txt"],
    "Images": ["img","jpg","gif","png"],
    "Audio": ["mp3"],
    "Video": ["mp4","mkv"],
    "Application": ["exe"]
    
}
*/
let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);

for(let i=0; i<allFiles.length; i++){
    sortFile(allFiles[i]);
}

function sortFile(file){
   let extension = getExtension(file);
   let extensionFolderName = checkExtensionFolder(extension);
   moveFile(file,extensionFolderName);
}

function checkExtensionFolder(extension){

    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
       let extensions = extensionsMapping[key];
       if(extensions.includes(extension)){
          extensionFolderName = extensionFolderName+"/"+key;
          break;
       }
    }

    let isFolderExist = fs.existsSync(extensionFolderName);
    if(!isFolderExist){
      fs.mkdirSync(extensionFolderName);
    }

    return extensionFolderName;
}

function moveFile(file,extensionFolderName){
    let srcPath = testFolderPath+"/"+file;
    let destPath = extensionFolderName+"/"+file;

    fs.copyFileSync(srcPath,destPath);
    fs.unlinkSync(srcPath);
}

function getExtension(file){
   let parts = file.split(".");
   return parts[1];
}