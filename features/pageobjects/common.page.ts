class commonPage{
    openHomePage = async()=>{
        await browser.url('https://practicesoftwaretesting.com/');
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

export default new commonPage;