import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
import { PaymentPage } from "../../page-objects/PaymentPage";
import { Navbar } from "../../page-objects/components/Navbar";

test.describe.only("Filter Transactions", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let paymentPage: PaymentPage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
  });

  test("Should send new payment ", async ({ page }) => {
    const accountSummaryTab = await page.locator("#account_summary_tab");
    if (!(await accountSummaryTab.isVisible())) {
      await page.goto(
        "http://zero.webappsecurity.com/bank/account-activity.html"
      );
    }
    await navbar.clickOnTab("Pay Bills");
    await page.waitForTimeout(5000);
    await paymentPage.createPayment();
    await paymentPage.assertSuccessMessage();
  });
});
