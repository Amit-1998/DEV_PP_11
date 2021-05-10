const request = require("request");
const cheerio = require("cheerio");
//const allMatchesLink = require("./homepage");
const getMatchDetails = require("./foroneMatch");

function getAllMatches(allMatchesLink){
   request(allMatchesLink,function(err,res,data){
       processData(data);
   })
}

function processData(html){
    let myDocument = cheerio.load(html);
    let allAtags = myDocument('a[data-hover="Scorecard"]');//we can only pass double quoted in Single quoted String
    console.log(allAtags.length);
    // { "0" : {},..........."59": {atag} }
    //I want the links of all matches present in Scorecard of each match card
    for(let i=0; i<allAtags.length; i++){
        let matchLink = "https://www.espncricinfo.com" + myDocument(allAtags[i]).attr("href");
        //console.log(matchLink);
        getMatchDetails(matchLink); //call for 60 times as 60 matches
    }
}

module.exports = getAllMatches;
//Now we run homepage.js