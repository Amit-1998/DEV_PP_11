const puppeteer = require("puppeteer");

let input = process.argv.slice(2); // it gives an array
const id = input[0];
const pass = input[1];
// console.log(id);
// console.log(pass);


(async function(){
    
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    });
    
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.instagram.com/accounts/login/");
    await tab.waitForTimeout(3000);

    await logIn(tab);
    
    await tab.waitForTimeout(2000);
    await tab.click(".sqdOP.yWX7d.y3zKF");
    
    await tab.waitForTimeout(2000);
    await tab.click(".aOOlW.HoLwm");
    
    await tab.waitForTimeout(2000);
    await tab.type(".XTCLo.x3qfX","taekwondistass");
    await tab.waitForTimeout(2000);
    await tab.keyboard.press("Enter");
    await tab.keyboard.press("Enter");

})
();

async function logIn(tab){
    await tab.waitForSelector('.f0n8F input[name="username"]',{visible: true, timeout: 2000});
    await tab.type('.f0n8F input[name="username"]',id);
    await tab.waitForTimeout(2000);
    await tab.type('.f0n8F input[name="password"]',pass);
    await tab.waitForTimeout(2000);
    await tab.click(".sqdOP.L3NKy.y3zKF"); // Login Button
    await tab.waitForTimeout(2000);
}
