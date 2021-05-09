let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");

request(matchLink, cb);

function cb(error, response, data){
    getHighestSixes(data);
}

function getHighestSixes(data){
    
    let highestSixes;
    let batsmanName;
    let strikeRate;

    let myDocument = cheerio.load(data);
    let bothBattingTables = myDocument(".table.batsman");
    
    for(let i=0; i<bothBattingTables.length; i++){
        let battingTable = myDocument(bothBattingTables[i]); //battingTable is also in form of an object
        let allTrs = battingTable.find("tbody tr"); //Some trs are useless for us i.e we require alternate trs

        //So needed one trs have their tds>1 and useless one trs have only one td
        for(let j=0; j<allTrs.length; j++){
            let allTds = myDocument(allTrs[j]).find("td"); //got allTds for one tr
            if(allTds.length>1){
                 if(i==0 && j==0){
                     batsmanName = myDocument(allTds[0]).text();
                     highestSixes = myDocument(allTds[6]).text();
                     strikeRate = myDocument(allTds[7]).text();
                 }
                 else{
                     let currSixes = myDocument(allTds[6]).text();
                     let currStrikeRate = myDocument(allTds[7]).text();
                      if(highestSixes<currSixes || (highestSixes==currSixes && strikeRate < currStrikeRate )){
                         highestSixes = currSixes;
                         batsmanName = myDocument(allTds[0]).text();
                         strikeRate =  myDocument(allTds[7]).text();
                     }
                 }
            }
        }
        
    }

    console.log("BatsMan Name => "+batsmanName);
    console.log("Sixes => "+highestSixes);
    console.log("StrikeRate => "+strikeRate);

}