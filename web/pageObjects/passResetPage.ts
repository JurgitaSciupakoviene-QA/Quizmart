import * as defaultPage from './defaultPage'

//LOCATORS

const passResetFormHeader='//h1'
const passResetForm='//div//button[@type="submit"]'
//GETS

export async function getPassResetPageHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(passResetFormHeader))
}
//ACTIONS

export async function waitForPassResetForm(timeout): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(passResetForm, timeout)
}