//let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function getMatchDetails(matchLink){
    request(matchLink,function(error,response,data){
        processData(data);
   });
}



function processData(html){
    let myDocument = cheerio.load(html+"");
    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible");
    
    for(let i=0; i<bothInnings.length; i++){
        let oneInning = myDocument(bothInnings[i]);
        // <div class="Collapsible"></div>
        let teamName =  oneInning.find("h5").text();
        //console.log(teamName);
        //Delhi Capitals INNINGS (20 overs maximum)
        //Mumbai Indians INNINGS (target: 157 runs from 20 overs)
        
        //teamName = teamName.split("INNINGS");
        //console.log(teamName);
        //[ 'Delhi Capitals ', ' (20 overs maximum)' ]
        //[ 'Mumbai Indians ', ' (target: 157 runs from 20 overs)' ]

        teamName = teamName.split("INNINGS")[0].trim();
        console.log(teamName);
        //Delhi Capitals
        //Mumbai Indians
        
        let allTrs = oneInning.find(".table.batsman tbody tr");
        for(let j=0; j<allTrs.length-1; j++){
           let allTds = myDocument(allTrs[j]).find("td");
           if(allTds.length>1){
                // batsmanName allTds[0]
                let batsmanName = myDocument(allTds[0]).text().trim();
                // runs allTds[2]
                let runs = myDocument(allTds[2]).text().trim();
                // balls
                let balls = myDocument(allTds[3]).text().trim();
                // fours allTds[5]
                let fours = myDocument(allTds[5]).text().trim();
                // sixes allTds[6]
                let sixes = myDocument(allTds[6]).text().trim();
                // sr allTds[7]
                let strikeRate = myDocument(allTds[7]).text().trim();
                //console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} StrikeRate = ${strikeRate}`);
                //processDetails(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
                // LeaderBoard
                ProcessDetailsForLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
            }
        }
      
    }
    console.log("##############################################");
}


function processDetails(teamName , batsmanName , runs , balls , fours , sixes , strikeRate){
    let isTeamFolder = checkTeamFolder(teamName);
    if(isTeamFolder){
        let isBatsmanPresent = checkBatsmanFile(teamName , batsmanName);
        if(isBatsmanPresent){
            updateBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
        }
        else{
            createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
        }
    }
    else{
        createTeamFolder(teamName);
        createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
    }
}

function checkTeamFolder(teamName){
    // teamFolderPath = "./IPL/Delhi Capitals"
    let teamFolderPath = `./IPL/${teamName}`;
    return fs.existsSync(teamFolderPath);
}

function checkBatsmanFile(teamName, batsmanName){
      // "./IPL/Delhi Capitals/Rishabh pant.json"
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    return fs.existsSync(batsmanFilePath);
}

function updateBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    let batsmanFile = JSON.parse(fs.readFileSync(batsmanFilePath));
    let inning = {
        Runs : runs , 
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes ,
        StrikeRate : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync( batsmanFilePath , JSON.stringify(batsmanFile) );
}

function createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    let batsmanFile = [];
    let inning = {
        Runs : runs , 
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes ,
        StrikeRate : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync( batsmanFilePath , JSON.stringify(batsmanFile) );
}

function createTeamFolder(teamName){
    let teamFolderPath = `./IPL/${teamName}`;
    fs.mkdirSync(teamFolderPath);
}


//LeaderBoard
//    [
	
// 	     {
// 		      "KL Rahul (c)†": {
//                                   "match": 11,
//                                    "team": "Kings XI Punjab",
//                                     "runs": 522,
//                                     "balls": 392,
//                                     "fours": 45,
//                                     "sixes": 22,
//                                     "strikeRate": 133.16326530612247
// 		                       }
// 	     },
    
//         {

//         },
    
//    ]


function ProcessDetailsForLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes, strikeRate){
    
    let haYaNa = checkPlayerExists(batsmanName);
    if(haYaNa){
        updateBatsmanObj(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
    }
    else{
       //means Batsman ka obj is not present in Leaderboard.json
       createBatsmanObj(teamName, batsmanName, runs, balls, fours, sixes, strikeRate); 
    } 
}

//yha se LeaderBoard ke functions ki body

function checkPlayerExists(batsmanName){
    let leaderBoardFilePath = './LeaderBoard.json';
        
    let leaderBoardKaArrayinjs = JSON.parse(fs.readFileSync(leaderBoardFilePath));
    
    let key = batsmanName;
    if(leaderBoardKaArrayinjs.length==0)
     { return false; }
    for(let i=0; i<leaderBoardKaArrayinjs.length; i++){
        let obj = leaderBoardKaArrayinjs[i]; //get first Object
        if(obj.hasOwnProperty(batsmanName)){  //object.hasOwnProperty(propertyName) => returns a boolean value which indicates whether the object has the specified property.
            return true;
        }
    }
    return false;
}

function updateBatsmanObj(teamName, batsmanName, runs, balls, fours, sixes, strikeRate){
    let leaderBoardFilePath = './LeaderBoard.json';
    let leaderBoardKaArrayinjs = JSON.parse( fs.readFileSync(leaderBoardFilePath));
    // [ {}, {"MSDhoni" : {} }, {}, {},.....{} ]
    let i;
    let ind;
    for(i=0; i<leaderBoardKaArrayinjs.length; i++){
        let obj = leaderBoardKaArrayinjs[i];
        if(obj.hasOwnProperty(batsmanName)){
            ind = i;
            break;
        }
    }
    
    if(i!=leaderBoardKaArrayinjs.length){
        let wantedBatsmanObj = leaderBoardKaArrayinjs[ind];
        let detailsOfBatsman = wantedBatsmanObj[batsmanName];
        detailsOfBatsman = {
            "match" : detailsOfBatsman.match+1,
            "teamName" : teamName,
            "runs" : detailsOfBatsman.runs + runs,
            "balls" : detailsOfBatsman.balls + balls,
            "fours" : detailsOfBatsman.fours + fours,
            "sixes" : detailsOfBatsman.sixes + sixes,
            "strikeRate" : ((detailsOfBatsman.runs+runs)/(detailsOfBatsman.balls +balls))*100
        }
        //leaderBoardKaArrayinjs.push(wantedBatsmanObj);
        fs.writeFileSync(leaderBoardFilePath,JSON.stringify(leaderBoardKaArrayinjs));
    }

}

function createBatsmanObj(teamName, batsmanName, runs, balls, fours, sixes, strikeRate){
    let leaderBoardFilePath = './LeaderBoard.json';
    let leaderBoardKaArrayinjs = JSON.parse( fs.readFileSync(leaderBoardFilePath)); // will get empty array
    
    let batsmanObj = {
        "match" : 1,
        "teamName" : teamName,
        "runs" : runs,
        "balls" : balls,
        "fours" : fours,
        "sixes" : sixes,
        "strikeRate" : strikeRate
    }
    leaderBoardKaArrayinjs.push( {[batsmanName] : batsmanObj} );
    
    fs.writeFileSync(leaderBoardFilePath,JSON.stringify(leaderBoardKaArrayinjs) );

}


module.exports = getMatchDetails;