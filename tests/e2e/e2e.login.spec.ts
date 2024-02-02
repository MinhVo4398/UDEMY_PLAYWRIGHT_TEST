import { test, expect } from '@playwright/test'

test.describe("Login / Logout Flow ", () => {
    //Before Hook

    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/")
    })

    // Negative scenario
    test("Negative Scenario for Login", async ({ page }) => {
        await page.click("#signin_button");
        await page.fill("#user_login", "invalid user name");
        await page.fill("#user_password", "invalid password");
        await page.click("text=Sign in");

        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.");
    })
    // Positive scenario + Logout

    test("Postive Scenario for Login + Logout", async ({ page }) => {
        await page.click("#signin_button");
        await page.fill("#user_login", "username");
        await page.fill("#user_password", "password");
        await page.click("text=Sign in");

        const accountSummaryTab = await page.locator('#account_summary_tab');
        if (!await accountSummaryTab.isVisible()) {
            await page.goto('http://zero.webappsecurity.com/bank/account-activity.html');
        };
        await expect(accountSummaryTab).toBeVisible();
    })
})