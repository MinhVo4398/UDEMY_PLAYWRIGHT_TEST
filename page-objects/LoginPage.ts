import {expect, Locator, Page} from '@playwright/test'
import { AbstractPage } from './AbstractPage';

export class LoginPage extends AbstractPage {
    // Define Selctors
 //   readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly loginForm: Locator;
    
    // Init selectors using constructor
    constructor(page: Page) {
        super(page);
      //  this.page = page;
        this.usernameInput = page.locator("#user_login");
        this.passwordInput = page.locator("#user_password");
        this.submitButton = page.locator("text=Sign in");
        this.errorMessage = page.locator(".alert-error");
        this.loginForm = page.locator("#login_form");
    }

    // Define login page methods
    async login(username: string, password:string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText("Login and/or password are wrong.");
    }

    async snapshotLoginForm() {
        await expect(await this.loginForm.screenshot()).toMatchSnapshot("login-form.png");
    }

    async snapshotErrorMessage() {
        await expect(await this.errorMessage.screenshot()).toMatchSnapshot("login-error.png");
    }
}