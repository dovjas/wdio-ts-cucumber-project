class commonPage{
    openHomePage = async()=>{
        await browser.url('https://practicesoftwaretesting.com/');
        await console.log('Page opened:https://practicesoftwaretesting.com/');

        const pageTitle = await browser.getTitle();
        console.log('Page title is: ',await pageTitle);
    }
}

export default new commonPage;