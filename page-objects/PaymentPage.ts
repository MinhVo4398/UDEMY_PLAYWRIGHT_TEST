import {expect, Locator, Page} from '@playwright/test';

export class PaymentPage {
    readonly page: Page;
    readonly payeeSelectBox : Locator;
    readonly payeeDetailButton: Locator;
    readonly payeeDetail: Locator;
    readonly accountSelectbox: Locator;
    readonly accmountInput: Locator;
    readonly dateInput: Locator;
    readonly descriptionInput: Locator;
    readonly submitPaymentButton: Locator;
    readonly message: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.payeeSelectBox = page.locator("#sp_payee");
        this.payeeDetailButton = page.locator("sp_get_payee_details");
        this.payeeDetail = page.locator("sp_payee_details");
        this.accountSelectbox = page.locator("#sp_account");
        this.accmountInput = page.locator("#sp_amount");
        this.dateInput = page.locator("#sp_date");
        this.descriptionInput = page.locator("#sp_description");
        this.submitPaymentButton = page.locator("#pay_saved_payees");
        this.message = page.locator("#alert_content >span");
}

        async createPayment() {
            await this.payeeSelectBox.selectOption('apple');
            await this.payeeDetailButton.click();
            await expect(this.payeeDetail).toBeVisible();
        }
}