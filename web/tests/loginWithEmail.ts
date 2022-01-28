import * as loginPage from '../pageObjects/login.page'
import * as defaultPage from '../pageObjects/defaultPage'
import * as discoverPage from '../pageObjects/discoverPage'
import {expect} from 'chai'
import * as credentials from '../utils/userCredentials'
import * as headers from '../utils/headers'
import * as validationMessages from '../utils/validationMessages'


describe('Test for login with email', function () {
    this.timeout(0)

     beforeEach(function(){
         defaultPage.openSignInPage()
     })

    it('Successful sign in with email with corretc credentials', async function () {
       await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userCorrect.password);
       await loginPage.clickSignInButton();
       await discoverPage.waitForDiscoverForm(3000);
       expect(await discoverPage.getDiscoverPageHeaderText()).equals(headers.Headers.discoverPage);


    })
    it.only('Sign in with incorrect password', async function () {
        await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userTooShortPass.password);
        await loginPage.clickSignInButton();
        expect(await loginPage.getPasswordValidationText()).equals(validationMessages.ValidationMessages.tooShortLengthError);
 
 
     })

}) 


