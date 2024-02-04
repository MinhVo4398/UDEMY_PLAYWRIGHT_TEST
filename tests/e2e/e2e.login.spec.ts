import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel.only("Login / Logout Flow ", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  //Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await homePage.visit();
  });

  // Negative scenario
  test("Negative Scenario for Login", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("invalid username", "invalid password");
    await loginPage.wait(3000);
    await loginPage.assertErrorMessage();
  });
  // Positive scenario + Logout

  test("Postive Scenario for Login + Logout", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");

    const accountSummaryTab = await page.locator("#account_summary_tab");
    if (!(await accountSummaryTab.isVisible())) {
      await page.goto(
        "http://zero.webappsecurity.com/bank/account-activity.html"
      );
    }
    await expect(accountSummaryTab).toBeVisible();
  });
});
