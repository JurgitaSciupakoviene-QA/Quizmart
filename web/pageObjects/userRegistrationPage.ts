import * as defaultPage from './defaultPage'

//LOCATORS

const userRegistrationFormHeader='//h1'
const userRegistrationForm='(//div//button[@type="submit"])[1]'
//GETS

export async function getUserRegistrationPageHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(userRegistrationFormHeader))
}
//ACTIONS

export async function waitForUserRegistrationForm(timeout): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(userRegistrationForm, timeout)
}
