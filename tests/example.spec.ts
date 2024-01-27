import {test, expect} from '@playwright/test'

test("Simple basic test", async({page})=>{
    //Here goes the test code
    await page.goto("https://example.com/") 
    const pageTitle = await page.locator("h1")
    await expect(pageTitle).toContainText("Example Domain")
})

test("Clicking on Elements",async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/")
    await page.click("#signin_button")
    await page.click("text=Sign in")

    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")

})
/*
test("Selectors",async ({page}) => {
    // text
    await page.click("text=some text")

    // Css Selector
    await page.click("button")
    await page.click("#id")
    await page.click(".class")

    //Only visible css Selector
    await page.click(".submit-button::visible")

    // Combinations
    await page.click("#username .first")

    //xpath
    await page.click("//button")
})
  */   