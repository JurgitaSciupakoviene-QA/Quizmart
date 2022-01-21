import * as loginPage from "../pageObjects/login.page"
import * as defaultPage from "../pageObjects/defaultPage"

describe('Test for login with email', function () {
    this.timeout(0)

    it('Clicks sign in with email button', async function () {
       await defaultPage.openLandingPage()
     // await loginPage.openUrl();  
      await loginPage.clickSignInWithEmailButton();
        await browser.pause(10000);
    })

}) 


