const { By, Builder, Browser, until, Key } = require("selenium-webdriver");

let driver;

// Build a new driver for each test
beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});


describe("Test the Google homepage", () => {
  test("can search Google for 'Selenium'", async () => {
    // Navigate to google.com
    await driver.get("https://www.google.com/");

    // Locate the search bar and send the search term to it
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
    // Wait until the title of the page changes to include the search term
    await driver.wait(until.titleIs("selenium - Google Search"), 1000);
  });

  test("can search Google for 'puppies' and click the images tab", async () => {
    // TODO navigate to google
    await driver.get("https://www.google.com/");

    // TODO locate the search bar and search for 'puppies'
    await driver.findElement(By.name("q")).sendKeys("puppies", Key.RETURN);

    // TODO wait until the title changes to 'puppies - Google Search'
    await driver.wait(until.titleIs("puppies - Google Search"), 1000);

    // TODO Click on the Images link
    await driver.findElement(By.linkText("Images")).click()

    // TODO wait until we can select the element that shows the current tab
    const currentPage = await driver.wait(until.elementLocated(By.css('span[aria-current="page"]')), 1000)
    
    // TODO check that text of the current tab is 'Images'
    expect(await currentPage.getText()).toBe('Images')
  })
});
