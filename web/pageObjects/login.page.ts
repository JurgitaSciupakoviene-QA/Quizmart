import * as defaultPage from "./defaultPage"

//LOCATORS
const signInEmailButton = "//button[text()='Sign in with email']"
const signInHeader ="h1"
const signInForm = "main > div > form"
const emailInput = '//form//input[@name="email"]'
const passInput ='//input[@name="password"]'
const emailValidationMessage ='//div[./input[@name="email"]]//h3'
const passValidationMessage ='//div[./input[@name="password"]]//h3'
const signInButton ='//button[text()="Sign in"]'
const loginFormValidation = '(//form//h3//)[1]'
const forgotPasswordLink ='//a[@href="/reset-password"]'
const createAccountLink ='//a[@href="/sign-up"]'

//GETS

export async function getSignInHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(signInHeader))
}

//ACTIONS

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}

export async function typeEmail (email: string):Promise<void>{
    await defaultPage.typeTextByLocator(email, emailInput)

}

export async function typeEmailAndLoseFocus(email: string, pass: string): Promise<void> {
    await defaultPage.appendTextByLocator(email, emailInput)
    await defaultPage.clickByLocator(passInput)
    await defaultPage.appendTextByLocator(pass, passInput)
}

export async function waitForSignInForm(): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signInForm)
}
