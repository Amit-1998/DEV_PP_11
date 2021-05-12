//let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let leaderboard = [];
let countOfRequestSent = 0;

function getMatchDetails(matchLink){
    console.log("Sending Request ",countOfRequestSent); // can be written as console.log("Sending Request ",countOfRequestSent)

    request(matchLink,function(error,response,data){ //Async Function => calls for 60 times in Node API
        countOfRequestSent--;
        processData(data);
        console.log("callback ",countOfRequestSent);
        if(countOfRequestSent==0){
            // means our leaderboard got fully updated ,,all callbacks done their work 
            //it's time to print leaderboard
            console.table(leaderboard); // Used to print data in form of table
        } 
   });

    countOfRequestSent++;
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
        //console.log(teamName);
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
                processLeaderBoard(teamName , batsmanName , runs , balls , fours , sixes);
            }
        }
      
    }
    //console.log("##############################################");
}


function processLeaderBoard(teamName , batsmanName , runs , balls , fours , sixes){ // all passing data here is in String
     //convert nessesary info from String into Number
     //use Number function for this
     runs = Number(runs);
     balls = Number(balls);
     fours = Number(fours);
     sixes = Number(sixes);

     for(let i=0; i<leaderboard.length; i++){
         let batsmanObj = leaderboard[i];
         if(batsmanObj.teamName==teamName && batsmanObj.batsmanName==batsmanName){
             batsmanObj.Runs += runs;
             batsmanObj.Balls += balls;
             batsmanObj.Fours += fours;
             batsmanObj.Sixes += sixes;
             return;
         }
     }

     let batsmanObj = {
         BatsMan : batsmanName,
         Team : teamName,
         Runs : runs,
         Balls : balls,
         Fours : fours,
         Sixes : sixes
     }
     leaderboard.push(batsmanObj);
}


module.exports = getMatchDetails;