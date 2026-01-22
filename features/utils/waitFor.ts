export async function waitForInputValue(locator: WebdriverIO.Element) {
  await browser.waitUntil(async () => {
    if(!(await locator.isExisting())){
        return false
    }
    let value;
    value = await locator.getValue();
    console.log(`Input: text value is: `, value);
    return value.trim().length > 0;
  });
}
