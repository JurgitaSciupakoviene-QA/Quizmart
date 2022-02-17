import * as loginPage from '../pageObjects/login.page'
import * as defaultPage from '../pageObjects/defaultPage'
import * as discoverPage from '../pageObjects/discoverPage'
import {expect} from 'chai'
import * as credentials from '../utils/userCredentials'
import * as headers from '../utils/headers'
import * as validationMessages from '../utils/validationMessages'
import * as userRegistration from '../pageObjects/userRegistrationPage'
import * as passReset from '../pageObjects/passResetPage'


describe('Test for login with email', function () {
    this.timeout(0)

     beforeEach(function(){
         defaultPage.openSignInPage()
     })

    it('Successful sign in with email with corretc credentials', async function () {
       await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userCorrect.password);
       await loginPage.clickSignInButton();
       await discoverPage.waitForDiscoverForm(10000);
       expect(await discoverPage.getDiscoverPageHeaderText()).equals(headers.Headers.discoverPage);


    })
    it('Sign in with too short password', async function () {
        await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userTooShortPass);
        await loginPage.clickSignInButton();
        expect(await loginPage.getPasswordValidationText()).equals(validationMessages.ValidationMessages.tooShortLengthError);
 
 
     })

     it('Sign in with too long password', async function () {
        await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userTooLongPass);
        await loginPage.clickSignInButton();
        expect(await loginPage.getPasswordValidationText()).equals(validationMessages.ValidationMessages.tooLongPassError);
        
     })

     it('Sign in with empty values', async function () {
            await loginPage.clickSignInButton();
            expect(await loginPage.getEmailValidationText()).equals(validationMessages.ValidationMessages.required);
            expect(await loginPage.getPasswordValidationText()).equals(validationMessages.ValidationMessages.required);
         
     })

     it('Sign in with incorrect email', async function () {
        await loginPage.typeEmailAndLoseFocus(credentials.userInvalidEmailAndPass.email, credentials.userCorrect.password);
        await loginPage.clickSignInButton();
        await loginPage.waitForLoginValidationMessage();
        expect(await loginPage.getLoginFormValidationText()).equals(validationMessages.ValidationMessages.incorrectEmailAndPassError);
        
     
 })
 it('Sign in with incorrect password', async function () {
   await loginPage.typeEmailAndLoseFocus(credentials.userCorrect.email, credentials.userInvalidEmailAndPass.password);
   await loginPage.clickSignInButton();
   await loginPage.waitForLoginValidationMessage();
   expect(await loginPage.getLoginFormValidationText()).equals(validationMessages.ValidationMessages.incorrectEmailAndPassError);
})

it('Sign in with invalid email', async function () {
for (const invalidEmail of credentials.invalidEmail){
   await loginPage.typeEmail(invalidEmail)
   await loginPage.waitForEmailValidationMessage()
   expect (await loginPage.getEmailValidationText()).equals(validationMessages.ValidationMessages.incorrectEmailError)
   await browser.refresh()
}

})
it('Click on "Create account" link', async function () {
   await loginPage.clickCreateAccountLink()
   await userRegistration.waitForUserRegistrationForm(5000)
   expect(await userRegistration.getUserRegistrationPageHeaderText()).equals(headers.Headers.userRegistrationPage);
   
})

it.only('Click on "Forgot password" link', async function () {
   await loginPage.clickForgotPasswordLink()
   await passReset.waitForPassResetForm(5000)
   expect (await passReset.getPassResetPageHeaderText()).equals(headers.Headers.passResetPage)
   //expect(await loginPage.getLoginFormValidationText()).equals(validationMessages.ValidationMessages.incorrectEmailAndPassError);
   
})
})


