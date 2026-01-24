class CommonPage{
    openHomePage = async()=>{
        await browser.url('https://practicesoftwaretesting.com/');
        const html = await browser.getPageSource();
        console.log('IS THIS CF?????????',html.substring(0, 2000));
        await browser.saveScreenshot('cf.png');
        await console.log('Page opened:https://practicesoftwaretesting.com/');

        await browser.waitUntil(
          async () => (await browser.getTitle()) !== 'Just a moment...',
          {
            timeout: 20000,
            timeoutMsg: 'Cloudflare protection page did not disappear',
          },
        );
    }
}

export default new CommonPage;