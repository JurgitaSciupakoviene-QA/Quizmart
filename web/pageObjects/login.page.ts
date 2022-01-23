import * as defaultPage from "./defaultPage"

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

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}

export async function typeEmail (email: string):Promise<void>{
    await defaultPage.typeTextByLocator(email, emailInput)

}

export async function getSignInHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(signInHeader))
}

export async function typeEmailAndLoseFocus(email: string): Promise<void> {
    await defaultPage.clickByLocator(emailInput)
    await defaultPage.appendTextByLocator(email, emailInput)
    await defaultPage.clickByLocator(passInput)
}

export async function waitForSignInForm(): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(signInForm)
}
