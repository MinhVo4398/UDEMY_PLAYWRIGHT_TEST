import {test, expect} from '@playwright/test';

test.describe("Tips & Tricks Sections", ()=> {
    test("TestInfo Object", async ({page}, testInfo) => {
        await page.goto("https://example.com/");
      //  console.log(testInfo.expectedStatus);
    })

    test("Test Skip Browser", async ({page, browserName}) => {
        test.skip(browserName === "chromium", "Feature not ready in Chrome browser");
        await page.goto("https://example.com/");
    })

    test("Test Fixme Annotation", async ({page, browserName}) => {
        //test.fixme(browserName === "chromium", "Test is not stable, needs revision");
        await page.goto("https://example.com/");
    })

    const people = ["Mike","Judy", "Peter", "Elon", "Alice"];
    for (const name of people) {
        test(`Running test for ${name}`, async ({page}) => {
            await page.goto("http://zero.webappsecurity.com/index.html");
            await page.fill("#searchTerm", `${name}`);
            await page.waitForTimeout(3000);
        })
    }

    test("Mouse Movement Simulation", async ({page}) => {
        await page.goto("https://example.com/");
        await page.mouse.move(0,0);
        await page.mouse.down();
        await page.mouse.move(0,100);
        await page.mouse.up();
    })

    test.only("Multiple Browser Tabs inside 1 Browser", async ({browser}) => {
        const context = await browser.newContext();
        // Create a new page inside context.
        const page1 = await context.newPage();
        const page2 = await context.newPage();
        const page3 = await context.newPage();
        await page1.goto("https://example.com/");
        await page2.goto("https://example.com/");
        await page3.goto("https://example.com/");
        await page1.waitForTimeout(5000);
    })
})