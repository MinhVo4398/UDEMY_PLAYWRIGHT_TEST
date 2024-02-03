import {test, expect} from '@playwright/test';
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";


test.describe("Filter Transactions", ()=> {
    let homePage: HomePage;
    let loginPage: LoginPage;
  

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
    
        await homePage.visit();
        await homePage.clickOnSignIn();
        await loginPage.login("username", "password");
    })

    test("Should send new payment ", async ({page})=> {
        const accountSummaryTab = await page.locator('#account_summary_tab');
        if (!await accountSummaryTab.isVisible()) {
            await page.goto('http://zero.webappsecurity.com/bank/account-activity.html');
        };
      //  await page.click("#pay_bills_tab");
        await page.selectOption("#sp_payee","apple");
        await page.click("#sp_get_payee_details");
        await page.waitForSelector("#sp_payee_details");
        await page.selectOption("#sp_account","6");
        await page.fill("#sp_amount","5000");
        await page.fill("#sp_date","2024-02-14");
        await page.fill("#sp_description","some random message");
        await page.click("#pay_saved_payees");
        
        const message = await page.locator("#alert_content >span");
        await expect(message).toBeVisible();
        await expect(message).toContainText("The payment was successfully submitted.");
    })
})