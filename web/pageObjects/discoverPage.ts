import * as defaultPage from "./defaultPage"

//LOCATORS

const discoverPageHeader='//h1'
const discoverForm ='//input[@value="Popular"]'

//GETS
export async function getDiscoverPageHeaderText():Promise<string>{
    return (await defaultPage.getElementTextByLocator(discoverPageHeader))
}
export async function waitForDiscoverForm(timeout): Promise<void> {
    await defaultPage.waitUntilElementIsVisibleInViewportByLocator(discoverForm, timeout)
}
