import * as loginPage from "../pageObjects/login.page"
import * as defaultPage from "../pageObjects/defaultPage"
import {expect} from 'chai'

const email ='Tekstas'

describe('Test for login with email', function () {
    this.timeout(0)

    it('Clicks sign in with email button', async function () {
       await defaultPage.openLandingPage();
       await browser.maximizeWindow();
       await loginPage.clickSignInWithEmailButton();
       await loginPage.waitForSignInForm()
       expect(await loginPage.getSignInHeaderText()).equals("Sign in")
       await browser.pause(10000);
       await loginPage.typeEmailAndLoseFocus(email)
       await browser.pause(10000);

    })

}) 


