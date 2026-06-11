
import { test } from "@playwright/test";

test("Learn to handle table", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables#edit");

    for (let index = 1; index <= 6; index++) {

        let tableVal = await page.locator(`//table[1]/tbody/tr[1]/td[${index}]`).innerText();

        console.log(tableVal);


    }

})


test.only("Learn to handle scraping of links", async ({ page }) => {

        await page.locator("#textBox").pressSequentially("Chennai")

  
    await page.goto("https://www.facebook.com/");

    const anchor = await page.locator("a").all();

    for (let index = 0; index < anchor.length; index++) {

        let link = await anchor[index].getAttribute('href');

        if (!link?.startsWith("href")) {

            console.log(link);

        }


        //      await frameURL?.locator("#Click").click() // page.locator 
        //                                             // ?.--> is optional chaining to handle your exceptions
        //  await page.waitForTimeout(3000)

        /* if(frame){
        await frame.locator(#Click).click()
        }else{
          console.log("Frame Not Found")} */

    //})


        
        
    }


    
})