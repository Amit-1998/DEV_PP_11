const puppeteer = require("puppeteer");
const id = "telikok986@isecv.com";
const pw = "123456789";

(async function(){
    let browser = await puppeteer.launch({  // gives browser Instance
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.waitForSelector(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",{visible: true});
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); // selector of LoggedIn button
    console.log("Logged in !!");
    // await tab.waitForSelector(".ui-icon-chevron-down.down-icon",{visible: true} );
    // await tab.waitForTimeout(2000);
    // await tab.click(".ui-icon-chevron-down.down-icon");
    // console.log("clicked");
    // await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]',{visible: true});
    // await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    // let bothLis = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    // let manageChallengeLi = bothLis[1]; // get li item
    // await manageChallengeLi.click();

})();