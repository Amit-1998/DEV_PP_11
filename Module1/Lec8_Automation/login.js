const puppeteer = require("puppeteer");

// puppeteer has promisfied functions

// by default headless = true (headless mode is ON => means Browzer open hota hua nhi dikhega)

// puppeteer.launch( {} ) tooks an object
// returns : Promise which resolves to browser instance.

//defaultViewPort => (800 x 600), We want to remove this ViewPort for that we set it to null
//Now I want to maximize the window Size to be FullScreen Size i.e to pass args: ['--start-maximized'] in .launch()

let browserOpenPromise = puppeteer.launch({ 
    headless: false,
    defaultViewport: null, 
    args: ["--start-maximized"] // to maximize the window size to be FullScreen
}); // browser kholne ka promise dega (pending) 
// So we need to make headless to false So that we can see the browser to be opened
console.log(browserOpenPromise);

browserOpenPromise.then( function(browser){
    //console.log(browserOpenPromise);
    console.log("browser is opened !");
    // ab mujhe "Tab" kholna hai // so it has something function called pages()
    
    // let pagesPromise = browser.pages();
    // return pagesPromise;
    return browser.pages();
})
.then(function(pages){
     let tab = pages[0];
     // ab mujhe tab par kisi address par jaana hai
     //for that we have goto() function
     return tab.goto("https://www.google.com");
})
.then(function(){
    console.log("On google homepage !!");
})