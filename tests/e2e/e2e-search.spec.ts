import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";

test.describe("Search Results", () => {
  test("Should find search result", async ({ page }) => {
    let homPage: HomePage = new HomePage(page);
    homPage.visit();
    homPage.searchFor("bank");

    const numberOfLinks = await page.locator("li >a");
    await expect(numberOfLinks).toHaveCount(2);
  });
});
