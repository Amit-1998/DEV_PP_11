let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request"); //request is a high order function
const fs = require("fs");

const cheerio = require("cheerio");
const { group } = require("console");
const { Http2ServerRequest } = require("http2");

/*
request(matchLink, cb);

function cb(error, response, data){ //cb function passes only 3 things error,response and data 
   //console.log(data);
   fs.writeFileSync("./match.html",data); yha se hamne match.html file mangali to ab is function ko comment kar diya

}
*/

request(matchLink,cb);

function cb(error,response,data){
    getWicketTaker(data); //now we don't need  fs.writFileSync() vaala kaam
}

function getWicketTaker(data){
               
      // ye sab kaam pehle bahar kar rkha the
         //let htmlKaData = fs.readFileSync("./match.html", "utf8");
         let myDocument = cheerio.load(data);

         //let matchInfo = myDocument(".status-text span").text();
         //console.log(matchInfo);

         //highestWicketTaker

         //first Pick both Bowling Tables
         let bothBowlingTables = myDocument(".table.bowler");
         /*
         {
            "0" : {bowling table}, // here bowling Tables are nested Object so can't use functs of cheerio .text()
            "1" : {bowling table}  // so to use them pass them into myDocument()
         }
         */

         //fs.writeFileSync("./bowlingTables.html",bothBowlingTables+""); ab ban chuki to commented//bothBowlingTables data is stringified

         let highestWicketTakerName;
         let highestWicketTaken;
         let economyOfhighestWicketTaker;   // minimum Economy is good  as point of match

         for(let i=0; i<bothBowlingTables.length; i++){ // i Is for tables
            let bowlingTable = myDocument(bothBowlingTables[i]); //first table => nested Object => pass into myDocument
            let allTableRows = bothBowlingTables.find("tbody tr");
            // {
               //     "0" : {tr},
               //     "1" : {tr},
               //     "2" : {tr}
               // 
            // }
            for(let r = 0; r<allTableRows.length; r++){ // r is for tr
               let allTds = myDocument(allTableRows[r]).find("td"); //It gives us in allTdsform of objects
               // allTds => { 0 : {}, 1 : {}, 2: {}, 3: {} }
               //But we want only 
               //wicket vaala = 4th td
               //name vaala   = 1st td
               //economy vaala = 5th td
               
               // First time
               if(i==0 && r==0) //i Is for table no and r is for tr of that table
               {  highestWicketTakerName = myDocument(allTds[0]).find("a").text();
                  highestWicketTaken = myDocument(allTds[4]).text();
                  economyOfhighestWicketTaker = myDocument(allTds[5]).text();
               }
               else{
                  let currWickets = myDocument(allTds[4]).text();
                  if(currWickets > highestWicketTaken ){
                     // update if current bowler have high Wickets!!
                     highestWicketTaken = currWickets;
                     highestWicketTakerName = myDocument(allTds[0]).find("a").text();
                     economyOfhighestWicketTaker = myDocument(allTds[5]).text();
                  }

               }
            } 
         }

         console.log("Name of highest Wicket Taken = "+highestWicketTakerName);
         console.log("Wickets taken = "+highestWicketTaken);
         console.log("Economy = "+economyOfhighestWicketTaker);
}

