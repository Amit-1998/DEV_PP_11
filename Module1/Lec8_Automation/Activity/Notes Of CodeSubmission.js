const puppeteer = require("puppeteer");
//const id = "telikok986@isecv.com"; 
const id = "sesowo7430@rphinfo.com";
const pw = "123456789";

let tab;
let idx;
let gCode; // global code

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
    return tab.waitForSelector(".js-track-click.challenge-list-item",{visible: true});
})
.then(function(){
    // to get all <a> tags vaale kaam ke liye, we require document.querySelectorAll() ke jaisa same kaam karne vaala puppeteer mein function chahiye
    // and the same function is tab.$$() takes selector in it.
    return tab.$$(".js-track-click.challenge-list-item"); // provide array of all <a> tags element
})
.then(function(allQuesArray){ // is function mein we got all <a> tags OR sabhi questions
      // [<a /> , <a /> , <a /> , <a />] but in form of objects
      let allPendingPromises = [];
      for(let i=0; i<allQuesArray.length; i++){
          let oneAtag = allQuesArray[i];
          // ab yha par mein DOM ka .getAttribute() vaala function puppeteer se mangunga
          // which is .evaluate() which takes a function body and element on which we want to apply .getAttribute  
          let pendingPromise = tab.evaluate(function(element){ // evaluate(), passing function ko DOM par ja kar chala deta hai 
                return element.getAttribute("href"); // ab hum is element par DOM vaala .getAttribute() function lga sakte hai 
          }, oneAtag); // to ye jo oneAtag element hai ye passing function mein as a element pass ho jata hai

          //but ye hame seedha href's ans nhi dega infact saare Pending Promises dega
          // So ham chahte hai ki jitne bhi href's aaye hai Pending Promises ki form vo saare allPendingPromise mein push hote jaaye
          allPendingPromises.push(pendingPromise);
          // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
          // evaluate() function mein jo return hoga vo yha <Pending> ki state mein change hoga
          
      }
      //console.log(allPendingPromises);
      // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
      // ab in Promises ka data kaise layein, whenever we have chunks of promises then how we can extract their data's
      let allPromisesCombined = Promise.all(allPendingPromises); // isse saare Pending promises isme aa jayeinge
      // Promise.all() ne hame Single Pending Promise diya ,jiski state tab change hogi jab Promise.all() mein padhe sabhi PP's mein data aa chuka hoga
      // sabka data matlab sabhi links
      return allPromisesCombined;
})
.then(function(allQuesLinks){
    //console.log(allQuesLinks);
    let oneQuesSolvePromise = solveQuestion(allQuesLinks[0]);
    for(let i=1 ; i<allQuesLinks.length ; i++){
      oneQuesSolvePromise = oneQuesSolvePromise.then(function(){
        let nextQuesSolvePromise = solveQuestion(allQuesLinks[i]);
        return nextQuesSolvePromise;
      })
    }
    return oneQuesSolvePromise;
})
.then(function(){
    console.log("All Ques Solved Succesfully !!!!");
})

.catch(function(error){ // this is complete chain ka fcb // main chain ka .catch()
    console.log(error);
})  // catch() hamesha last me hi attach hota hai if any above then() fails in b/w directly comes in this catch()

function getCode(){
    return new Promise(function(scb, fcb){
        
            let waitPromise = tab.waitForSelector(".hackdown-content h3", {visible: true} );
            waitPromise.then(function(){

            })
            // .then(function(){ // copy karne se pehle aisa likha the
            //     // console.log("Reached at editorial");
            //     // C++,Python & Java are in h3
            //     // So documnet.querySelectorAll() se saare h3 manga lo
            //     // [ <h3>C++</h3>, <h3>Python</h3> ,<h3>Java</h3> ]
            //     return tab.waitForSelector(".hackdown-content h3", {visible: true} );
                
            //     // ".hackdown-content .hightlight" selctor se Saare code Snippets bhi manga lenge se [<div></div>,<div></div>,<div></div> ]
            //     // to sabse pehle code ka name nikalo & find C++ kis index par hai,to usi index par code bhi hoga uska
            // })
            .then(function(){
                // ab ye selector aa gya
                return tab.$$(".hackdown-content h3"); // $$() se document.querySelectorAll() vaala kaam
                // ab element mil jayega
            })
            .then(function(allCodeNamesElement){ // isme vo teeno h3 aa jayeinge Nodelist as we saw in DOM
                // [ <h3>C++</h3>, <h3>Python</h3> ,<h3>Java</h3> ] but in Object form
                let allCodeNamePromise = [];
                for(let i=0; i<allCodeNamesElement.length; i++){
                    let codeNamePromise = tab.evaluate(function(elem){ return elem.textContent; }, allCodeNamesElement[i]);
                    allCodeNamePromise.push(codeNamePromise);
                }
                // pehle pending thi ye states
                // allCodeNamesPromise = [Promise<data> , Promise<data> , Promise<data> ];
                let combinedPromise = Promise.all( allCodeNamePromise );
                // Promise<Pending> => Promise< [data,data,data] >
                return combinedPromise;
            })
            .then(function(allCodeNames){
                // [C++ , Python , Java];
                // ab idx nikal lo
                for(let i=0; i<allCodeNames.length; i++){
                    if(allCodeNames[i]=="C++"){
                        idx = i;
                        break;
                    }
                }
                // yha par hame idx mein C++ ka index mil chuka hoga
                // to fir bas sabhi language ke div mein jakar usin index par uska code utha lo
                return tab.$$(".hackdown-content .highlight"); // document.querySelectorAll for divs of all languages => codes
            })
            .then(function(allCodeDiv){
                 // [ <div>code of C++</div>, <div>code of Python</div>, <div>code of java</div>]
                 // we want idx vaala div
                 let codeDiv = allCodeDiv[idx];
                 // ye jo div mila hai ab iska textContent chahiye which is actual code
                 return tab.evaluate(function(elem){ return elem.textContent;   }  , codeDiv);
            })
            .then(function(code){
                //console.log(code);
                gCode = code;
                scb(); // ab scb ko call lga do kuki ab hmara kaam successfully ho chuka hai
            })
            .catch(function(error){
                 fcb(error);
            })

    });
}

function pasteCode(){
      // in Editor of HackerRank they implemented monaco Editor in which problem is for every '{' they attached '}' automatically
      // So it will create wrong code as we also have our own '}' in our code
      //tab.type() se keyboard vaali functionality hi aati hai

      // abhi jo hamne gCode nikala hai vo copied nhi hai means us par ctrl+C & ctrl+V vaali chis nhi hai
      // Solution is don't write over Editor instead write code on Test against Custom input vaali space mein
      new Promise(function(scb,fcb){
            let waitAndClickPromise = waitAndClick('.checkbox-input'); //"Test against custom input" ke checkbox ko click karne ka selector
            waitAndClickPromise.then(function(){
                // checkbox click ho chuka hoga
                return tab.waitForTimeout(2000); // wait for 2 seconds 
                //return tab.type(".custominput",gCode); // textArea mein gCode type ho jayega
            })
            .then(function(){
                return tab.waitForSelector(".custominput",{visible: true});
            })
            .then(function(){
                return tab.type(".custominput",gCode); // textArea mein gCode type ho jayega
            })
            .then(function(){
                 // code successfully typed 
                 // Now we want ctrl+A, ctrl+X 
                 // keyboard chalaane vaali commands from puppeteer
                 //keyboard function => keyboard.down() => hold the Key
                                     // keyboard.up() => unhold the Key
                                     // keyboard.press() => press the Key
                 return tab.keyboard.down("Control");
            })
            .then(function(){
                return tab.keyboard.press("A");
            })
            .then(function(){
                return tab.keyboard.press("X");
            })
            .then(function(){
                return tab.waitForTimeout(2000);
            })
            .then(function(){
                //code cut custom input
                return tab.click(".monaco-scrollable-element.editor-scrollable.vs");
            })
            .then(function(){
                // Editor par click ho chuka hoga
                return tab.keyboard.press("A");
            })
            .then(function(){
                return tab.keyboard.press("V");
            })
            .then(function(){
                return tab.keyboard.up("Control");
            })
            .then(function(){
                // paste code ka kaam ho chuka hoga
                scb(); // ye pahuchega solveQuestion k pasteCode() k neech vaale .then() mein
            })
      });
}

function handleLockBtn(){
    return new Promise(function(scb , fcb){
      let waitForLockBtn = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:5000});
      waitForLockBtn.then(function(){
        return tab.$('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
      })
      .then(function(lockButton){
        return tab.evaluate(function(elem){ return elem.click()  } , lockButton);
      })
      .then(function(){
        // Lock Button Found !!
        console.log("Lock Button Found !!");
        scb();
      })
      .catch(function(){
        // Lock Button Not Found !!
        console.log("Lock Button not found !!");
        scb();
      })
    })
  }

function solveQuestion(quesLink){ // do for One question
    // we want sabhi questions ke liye we don't need multiple tabs, sabhi quest's ek hi "tab" par solve ho
    return new Promise(function(scb, fcb){
            let gotoPromise = tab.goto("https://www.hackerrank.com"+quesLink);
            gotoPromise.then(function(){
                // pehle ques khul gya, to waitAndClick() ko karo call => first wait for selector(Editorial) & then click
                return waitAndClick('div[data-attr2="Editorial"]');
            })
            .then(function(){
                return handleLockBtn();
            })
            .then(function(){
                return getCode();
            })
            .then(function(){
                // code milne ke baad mujhe vapas question par bhi jana hoga
                return tab.click('div[data-attr2="Problem"]');
            })
            .then(function(){
                // gCode = code ka neeche vaale scb ko call lgane se idhar pahuchege becoz this is scb ki body
                // console.log("Got C++ code Successfully!!!");
                // console.log(gCode);
                return pasteCode();
            })
            .then(function(){
                return tab.waitForTimeout(2000);
            })
            .then(function(){
                return tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary",{visible: true});
            })
            .then(function(){
                // work as a scb body
                return tab.click(".ui-btn.ui-btn-normal.ui-btn-primary");
                // ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled
            })
            .then(function(){
                // click submit button ka kaam hone ke baad
                scb(); // ye pahuchega jaha se solveQuestion() lagi thi call uske neeche ke then() ko
            })
            .catch(function(error){
                fcb(error);
            })
    });
}


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