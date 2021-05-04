//console.log(process); //Nodejs have a b=object named "process"
let fs = require("fs");
const { getFilesData, applySFlag, applyBFlag, applyNFlag } = require("./util");
let contents = process.argv.slice(2); //['-s','-b','-n','f1.txt','f2.txt']
console.log(contents);

const flags = [];
const files = [];

for(let i=0; i<contents.length; i++){
   if(contents[i].startsWith("-")){
      flags.push(contents[i]);
   }
   else{
      files.push(contents[i]);
   }  
}

// -s -b -n
//console.log(flags);
// f1.txt // f2.txt
//console.log(files);

// First of all we want the contents of files in appended form


let filesData = getFilesData(files); //Autoimport the 3rd line 
//console.log(filesData);

//Now we got the files data

//First do the -s flag vaala kaam
if(flags.includes("-s")){
   // filesData updated if s flag is present !
   filesData = applySFlag(filesData);
}

if(flags.includes("-b") && flags.includes("-n")){
    if(flags.indexOf("-b") < flags.indexOf("-n")){
      filesData = applyBFlag(filesData);
    }
    else{
       filesData = applyNFlag(filesData);
    }
}

else if(flags.includes("-b")){
   filesData =  applyBFlag(filesData);
}

else if(flags.includes("-n")){
   filesData =  applyNFlag(filesData);
}

console.log(filesData);