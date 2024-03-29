const { Builder, Browser, By, until } = require('selenium-webdriver')

let driver

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    driver.quit()
})

describe('Test the Movies App', () => {
    test("can add movie", async () => {
        await driver.get("http://localhost:3000/")

        await driver
        .findElement(By.css("input[id='add-movie-input']"))
        .sendKeys("The Matrix")

        await driver
        .findElement(By.css('button[type="submit"]'))
        .click()

        const addedMovie = await driver.wait(
            until.elementLocated(By.css("#movies-list li label")), 1000
        )

        expect(await addedMovie.getText().toBe('The Matrix'))
    })
})