import * as defaultPage from './defaultPage'

//LOCATORS
const signInEmailButton = '//button[text()="Sign in with email"]'
const signInHeader ='h1'
const signInForm = '//main//form//button'
const emailInput = '//form//input[@name="email"]'
const passInput ='//input[@name="password"]'
const emailValidationMessage ='//div[./input[@name="email"]]//h3'
const passValidationMessage ='//div[./input[@name="password"]]//h3'
const signInButton ='//button[text()="Sign in"]'
const loginFormValidation = '(//h3)[2]'
const forgotPasswordLink ='//a[@href="/reset-password"]'
const createAccountLink ='//a[@href="/sign-up"]'

//GETS

export async function getSignInHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(signInHeader))
}
export async function getPasswordValidationText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(passValidationMessage))
}
export async function getLoginFormValidationText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(loginFormValidation))
}
export async function getEmailValidationText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(emailValidationMessage))
}

//ACTIONS

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}

export async function clickSignInButton(): Promise<void> {
    await defaultPage.clickByLocator(signInButton)
}

export async function typeEmail (email: string):Promise<void>{
    await defaultPage.appendTextByLocator(email, emailInput)
    await defaultPage.clickByLocator(passInput)
   // await browser.pause(5000)

}

export async function typeEmailAndLoseFocus(email: string, pass: string): Promise<void> {
    await defaultPage.appendTextByLocator(email, emailInput)
    await defaultPage.clickByLocator(passInput)
    await defaultPage.appendTextByLocator(pass, passInput)
}

export async function waitForSignInForm(): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signInForm)
}

export async function waitForLoginValidationMessage(): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(loginFormValidation)
}
export async function waitForEmailValidationMessage(): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(emailValidationMessage)
}
export async function clickCreateAccountLink(): Promise<void> {
    await defaultPage.clickByLocator(createAccountLink)
}
export async function clickForgotPasswordLink(): Promise<void> {
    await defaultPage.clickByLocator(forgotPasswordLink)
}
