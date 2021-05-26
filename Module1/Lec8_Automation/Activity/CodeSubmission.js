const puppeteer = require("puppeteer");
const id = "telikok986@isecv.com"; 
const pw = "123456789";

let tab;
// puppeteer has promisfied functions

// by default headless = true (headless mode is ON => means Browzer open hota hua nhi dikhega)

// returns : Promise which resolves to browser instance.
let browserOpenPromise = puppeteer.launch({ headless: false, defaultViewport: null,args: ["--start-maximized"] }); // browser kholne ka promise dega (pending) 
// So we need to make headless to false So that we can see the browser to be opened


browserOpenPromise.then( function(browser){
    //console.log(browserOpenPromise);
    console.log("browser is opened !");
    // ab mujhe "Tab" kholna hai // so it has something function called pages()
    
    // let pagesPromise = browser.pages();
    // return pagesPromise;
    return browser.pages();
})
.then(function(pages){
     tab = pages[0];
     // ab mujhe "tab" par kisi address par jaana hai
     //for that we have goto() function => we want to go at Hackerrank login page
     return tab.goto("https://www.hackerrank.com/auth/login"); // we will land on hackerrank login page
})
// login page khulte hi type mailid and password
// So now we need typing functions in puppeteer => command goes to DEV Tools  & they will type at there

.then(function(){ // in function() we got acknowledgement of goto() but we don't wanna to catch it here
    // sabse pehle to mujhe "tab" chahiye so make "tab" global
    return tab.type("#input-1",id);  //type() takes selector and text to be type into 
    // this is a promisified function so we want ye kaam khatam hote hi niche vaala kaam chale password vaala that's why we return promisified function 
    // likhne ko to ye vha par id likh dega bina return keyword ke
    // But ham chahte he agla kaam is par depend ho jaye yaani password tabhi bhar payein jab mail id bhar diya ho
    //isliye we write return keyword in front
})

.then(function(){
    return tab.type("#input-2",pw);
})
.then(function(){
   return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");//login ho jata hai click se
})

.then(function(){
    // let waitnClickPendPromise = waitAndClick("#base-card-1-link"); // make this function a promisified function!!
    // return waitnClickPendPromise;

    return waitAndClick("#base-card-1-link");
})
.then(function(){ //is then() ka function is scb in new Promise() ke function mein pass hua scb
    return waitAndClick('a[data-attr1="warmup"]');
})
// ab hame warm up challenges ke questions dikhenge
// ab ham chahte h ki sabhi questions ke link yani "Solve Challenge" vaale buttons ki links
// sabhi questions ke  <a> tags uthao 
// aur usme se href attr nikalo
.then(function(){
    // sabse pehle to wait for getting selector for class attached to <a> tag
    return tab.waitForSelector(".js-track-click .challenge-list-item",{visible: true});
})
.then(function(){
    // to get all <a> tags vaale kaam ke liye, we require document.querySelectorAll() ke jaisa same kaam karne vaala puppeteer mein function chahiye
    // and the same function is tab.$$() takes selector in it.
    return tab.$$(".js-track-click .challenge-list-item"); // provide array of all <a> tags element
})
.then(function(allQuesArray){ // is function mein we got all <a> tags OR sabhi questions
      // [<a /> , <a /> , <a /> , <a />] but in form of objects
      for(let i=0; i<allQuesArray.length; i++){
          let oneAtag = allQuesArray[i];
          // ab yha par mein DOM ka .getAttribute() vaala function puppeteer se mangunga
          // which is .evaluate() which takes a function body and element on which we want to apply .getAttribute  
          let pendingPromise = tab.evaluate(function(element){ // evaluate(), passing function ko DOM par ja kar chala deta hai 
                return element.getAttribute("href"); // ab hum is element par DOM vaala .getAttribute() function lga sakte hai 
          }, oneAtag); // to ye jo oneAtag element hai ye passing function mein as a element pass ho jata hai
      }
})

.catch(function(error){ // this is complete chain ka fcb // main chain ka .catch()
    console.log(error);
})  // catch() hamesha last me hi attach hota hai if any above then() fails in b/w directly comes in this catch()







function waitAndClick(selector){
   return new Promise(function(scb,fcb){ // ye fcb yani is complete/ main chain ka .catch() ka function i.e fcb
          let waitPromise = tab.waitForSelector(selector,{visible: true});
          waitPromise.then(function(){
               let clickPromise = tab.click(selector);
               return clickPromise;
          })
          .then(function(){
             // wait bhi ho gya hai and click bhi ho gya hai to scb() ko call lga do
             scb();
          })
          .catch(function(){
              // isme hum tab aayenge jab ya to tab.waitForSelector() fail ho ya tab.click() ye fail ho jaye
              // to fcb() ko call lga do // ye fcb main chain ke .catch() ke function i.e fcb ko call lag jayegi
              fcb();
          })
   });
   
}



// ab dekho login hone se pehle hum pehle loginPage vaale "tab" par they

// Now Log ho jane k baad hum dusre Page ya tab par Navigate ho jayenge, to ab tab.something se kaam nhi chalega becoz ab "tab" badal chuka hai
// ab ham Interview Preparation Kit k view par click karvana chahta hu

// neeche k 2 .then() ka kaam => wait & click!! //dono wait & click ka same kaam hai so dono ko ek function mein daal diya jaaye

/*
.then(function(){
    return tab.waitForSelector("#base-card-1-link",{visible: true}); // default delay time is 30ms,visible is the condition ki jab tak selector DOM par true/visible na hojaye tab tak wait kare
    //wait for selector of IP Kit
})
.then(function(){
    //return tab.click("#base-card-1-link"); //  No node found for selector: #base-card-1-link
    // kuki tab badal chuka hai to vo purane vaale "tab" par hi selector ko dundh rha hai jo ki vha par hai hi nhi
    return tab.click("#base-card-1-link"); // click on IP kit navigate to new tab/page
})

// neeche k 2 .then() ka kaam => wait & click!!
.then(function(){
    return tab.waitForSelector('a[data-attr1="warmup"]',{visible: true});
})
.then(function(){
    return tab.click('a[data-attr1="warmup"]'); // click on warm up challenge ka view
})

*/