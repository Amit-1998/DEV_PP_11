//flow starts from here
let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches"); //with the help of importing All matches I can call getAll Matches function

//hof
request(matchLink,function(err,res,data){
    processData(data);
});

//let allMatchesLink; 

function processData(html){
   
    let myDocument = cheerio.load(html+"");
    let atag = myDocument(".widget-items.cta-link a");
    

    // console.log(    aTag.attr("href")    ); //usimg for myDocument and atag is for finding value of attribute

    let allMatchesLink = "https://www.espncricinfo.com"+atag["0"].attribs.href; //will get this page link https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
    //console.log(allMatchesLink);
    getAllMatches(allMatchesLink); //"View all Results vaala page"
}

 //module.exports = allMatchesLink; //we can't do export like this
                                    //becoz it sends undefined allMatchesLink 
// becoz processData ko data milne mein time lagega and itne mein vo undefined allMatches Link export kar dega so this we can;t export

