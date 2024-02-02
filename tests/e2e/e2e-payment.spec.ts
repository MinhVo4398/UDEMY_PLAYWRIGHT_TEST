import {test, expect} from '@playwright/test';


test.describe("Filter Transactions", ()=> {
    // Login
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/");
        await page.click("#signin_button");
        await page.fill("#user_login","username");
        await page.fill("#user_password", "password");
        await page.click("text = Sign in"); 
    })

    test("Should send new payment ", async ({page})=> {
        const accountSummaryTab = await page.locator('#account_summary_tab');
        if (!await accountSummaryTab.isVisible()) {
            await page.goto('http://zero.webappsecurity.com/bank/account-activity.html');
        };
        await page.click("#pay_bills_tab");
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