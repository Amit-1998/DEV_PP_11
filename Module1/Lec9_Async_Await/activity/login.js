const puppeteer = require("puppeteer");
const id = "telikok986@isecv.com";
const pw = "123456789";
let challenges = require('./challengesFile'); //import

(async function(){
    let browser = await puppeteer.launch({  // gives browser Instance
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo : 200 //milliseconds // itne millisec's ke liye chise slow ho jayengi
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.waitForSelector(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",{visible: true});
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); // selector of LoggedIn button
    console.log("Logged in !!");

    // Mera tareeka for extracting dropdown
    // await tab.waitForSelector(".ui-icon-chevron-down.down-icon",{visible: true,timeout: 5000} );
    // await tab.click(".ui-icon-chevron-down.down-icon");
    // console.log("Dropdown clicked");
    
    // Sir ka tareeka for extracting dropdown
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000); 
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();

    // Extracting Admin
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]',{visible: true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    // Now we are on Admin Page
    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li",{visible: true});
    //let bothLis = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    let bothLis = await tab.$$(".administration li a.backbone ");
    let manageChallengeLi = bothLis[1]; // get Manage Challenge vaala li
    await manageChallengeLi.click();
    // manage Challenge khul chuka hai
    //Create challenge
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right",{visible: true});
    //await tab.click(".btn.btn-green.backbone.pull-right");
    let createChallengeElement = await tab.$('.btn.btn-green.backbone.pull-right');
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href"); } ,createChallengeElement);
    createChallengeLink = "https://www.hackerrank.com"+createChallengeLink;
    //console.log(createChallengeLink); // https://www.hackerrank.com/administration/challenges/create
    
    for(let i=0; i<challenges.length; i++){
        await addChallenges(browser,createChallengeLink,challenges[i]);
    }
    
})();

async function addChallenges(browser,createChallengeLink,challenge){
        // for One Challenge   
        let newTab = await browser.newPage(); // open a new tab
        await newTab.goto(createChallengeLink);

        // {
        //     "Challenge Name": "Pep_Java_1GettingStarted_1IsPrime",
        //     "Description": "Question 1",
        //     "Problem Statement": "Take as input a number n. Determine whether it is prime or not. If it is prime, print 'Prime' otherwise print 'Not Prime.",
        //     "Input Format": "Integer",
        //     "Constraints": "n <= 10 ^ 9",
        //     "Output Format": "String",
        //     "Tags": "Basics",
        //   }
        let challengeName = challenge["Challenge Name"];
        let description = challenge["Description"];
        let problemStatement = challenge["Problem Statement"];
        let inputFormat = challenge["Input Format"];
        let constraints = challenge["Constraints"];
        let outputFormat = challenge["Output Format"];
        let tags = challenge["Tags"];

        //we are on Create Challenge vaale page par
            
        await newTab.waitForSelector("#name",{visible: true,timeout: 5000});
        await newTab.type("#name",challengeName);
        await newTab.waitForSelector("#preview",{visible: true});
        await newTab.type("#preview",description);
        
        await newTab.waitForSelector("#problem_statement-container .CodeMirror textarea",{visible: true,timeout: 5000});
        await newTab.type("#problem_statement-container .CodeMirror textarea",problemStatement);

        await newTab.waitForSelector("#input_format-container .CodeMirror textarea",{visible: true,timeout: 5000});
        await newTab.type("#input_format-container .CodeMirror textarea",inputFormat);

        await newTab.waitForSelector("#constraints-container .CodeMirror textarea",{visible: true,timeout: 5000});
        await newTab.type("#constraints-container .CodeMirror textarea",constraints);

        await newTab.waitForSelector("#output_format-container .CodeMirror textarea",{visible: true,timeout: 5000});
        await newTab.type("#output_format-container .CodeMirror textarea",outputFormat);

        await newTab.waitForSelector("#tags_tag",{visible: true,timeout: 5000});
        await newTab.type("#tags_tag",tags);
        await newTab.keyboard.press("Enter");

        await newTab.waitForSelector(".save-challenge.btn",{visible: true,timeout: 5000});
        await newTab.click(".save-challenge.btn");

        await newTab.waitForTimeout(3000);
        // hamesha har ek quest ke liye new Tab khulega to use close bhi to karnA hoga challenge Save hone k baad
        await newTab.close(); 
}