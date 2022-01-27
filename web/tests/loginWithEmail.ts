import * as loginPage from "../pageObjects/login.page"
import * as defaultPage from "../pageObjects/defaultPage"
import {expect} from 'chai'

const email ='Tekstas'
const pass = '123'

describe('Test for login with email', function () {
    this.timeout(0)

     beforeEach(function(){
         defaultPage.openSignInPage()
     })

    it('Clicks sign in with email button', async function () {
     /// await defaultPage.openSignInPage();
       //await browser.pause(10000);
       await loginPage.typeEmailAndLoseFocus(email, pass);
       await browser.pause(5000);

    })

}) 


