import * as defaultPage from "./defaultPage"

const signInEmailButton = "//button[text()='Sign in with email']"

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}