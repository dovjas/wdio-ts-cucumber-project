export async function waitForInputValue(locator: WebdriverIO.Element) {
  await browser.waitUntil(async () => {
    if (!(await locator.isExisting())) {
      return false;
    }
    let value;
    value = await locator.getValue();
    console.log(`Input: text value is: `, value);
    return value.trim().length > 0;
  });
}

export async function waitForPageComplete() {
  await browser.waitUntil(
    async () => {
      const state = await browser.execute(() => document.readyState);
      return state === 'complete';
    },
    {
      timeout: 10000,
      timeoutMsg: 'Page never reached readyState=complete',
    },
  );
}
