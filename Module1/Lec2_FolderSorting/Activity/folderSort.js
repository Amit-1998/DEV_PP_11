let fs = require("fs"); //import fs Module
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
let testFolderPath = "./Downloads";  // Folder ka Path On which we are working
// getAllFiles ka kaam
let allFiles = fs.readdirSync(testFolderPath);

// Loop on each File
for(let i=0; i<allFiles.length; i++){
    sortFile(allFiles[i]);
}

function sortFile(file){
   let extension = getExtension(file);
   let extensionFolderName = checkExtensionFolder(extension);
   moveFile(file,extensionFolderName);
}

function checkExtensionFolder(extension){
    // suppose extension is .doc

    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
       let extensions = extensionsMapping[key];
                       //     for(let i=0; i<extensions.length; i++){
                    //         if(extensions[i]==extension){
                    //              extensionFolderName = testFolderPath+        
                    //         }
                    //    }
       if(extensions.includes(extension)){
          extensionFolderName = extensionFolderName+"/"+key;
          break;
       }
    }

    //here we would have extensionFolderName = Documents
    // "./Downloads"
    
    // "./Downloads/Documents"  Now we have to check that is this Path exists?
    let isFolderExist = fs.existsSync(extensionFolderName);
    if(!isFolderExist){
      fs.mkdirSync(extensionFolderName);
    }

    return extensionFolderName;
}

function moveFile(file,extensionFolderName){
    let srcPath = testFolderPath+"/"+file;
    let destPath = extensionFolderName+"/"+file;

    //copy file from source path to detination path
    fs.copyFileSync(srcPath,destPath);
    //then delete file from the source path
    fs.unlinkSync(srcPath);
}

function getExtension(file){
   let parts = file.split(".");
   return parts[1];
}