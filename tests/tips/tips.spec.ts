import {test, expect} from '@playwright/test';

test.describe.only("Tips & Tricks Sections", ()=> {
    test("TestInfo Object", async ({page}, testInfo) => {
        await page.goto("https://example.com/");
      //  console.log(testInfo.expectedStatus);
    })

    test("Test Skip Browser", async ({page, browserName}) => {
        test.skip(browserName === "chromium", "Feature not ready in Chrome browser");
        await page.goto("https://example.com/");
    })

    test.only("Test Fixme Annotation", async ({page, browserName}) => {
        //test.fixme(browserName === "chromium", "Test is not stable, needs revision");
        await page.goto("https://example.com/");
    })




})