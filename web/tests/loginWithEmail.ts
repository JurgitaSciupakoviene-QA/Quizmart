import * as LoginPage from "../pageObjects/login.page"

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openUrl();
        await browser.pause(5000);

    });
    it('Login with email', async () => {
        await LoginPage.openUrl();
        await browser.pause(5000);

    });
});


