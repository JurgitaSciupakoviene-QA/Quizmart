//GET ELEMENTS

export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function getElementTextByLocator(locator:string):Promise<string>{
    return (await getElementByLocator(locator)).getText()
}

//ACTIONS

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

export async function typeTextByLocator (text:string | string[],locator:string):Promise<void>{
    await (await getElementByLocator(locator)).keys(text)
}

export async function appendTextByLocator(text: string, locator: string): Promise<void> {
    await (await getElementByLocator(locator)).addValue(text)
}
export async function openLandingPage(): Promise<void> {
    await browser.url('')
} 

export async function openSignInPage(): Promise<void> {
    await browser.url('https://staging.quizmart.io/sign-in#');
    await browser.maximizeWindow()
} 
//OTHER
let defaultTimeout: number = 2000

export async function waitUntilElementIsVisibleInViewportByLocator(locator: string, customTimeout?: number,): Promise<void> {
    const timeoutMessage = `${locator} element still invisible after ${customTimeout || defaultTimeout} ms`
    await browser.waitUntil(async function() {
          return (await getElementByLocator(locator)).isDisplayedInViewport()
      },
      {
          timeout: customTimeout || defaultTimeout,
          timeoutMsg: timeoutMessage
      })
    }