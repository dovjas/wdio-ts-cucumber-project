class CommonPage{
    openHomePage = async()=>{
        await browser.url('https://practicesoftwaretesting.com/');
        await console.log('Page opened:https://practicesoftwaretesting.com/');
    }
}

export default new CommonPage;