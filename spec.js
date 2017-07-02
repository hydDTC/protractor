describe( 'add add add ', function () {
    it( 'add one and two',  function() {



        browser.get('http://localhost:9000/angular.html');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('btn')).click();
        console.log( element(by.model('last')).getText())
        element(by.model('last')).getText().then(function(text) {
            console.log("哈哈");
            console.log(text);
        });
        browser.sleep(1500);
        //有bug
        expect(element(by.model('last')).getValue()).toEqual('3');





        // await browser.waitForAngularEnabled(false);
        // await browser.driver.get('https://www.baidu.com');
        // await $('#kw').sendKeys('protractor');
        // await $('#su').click();
        //
        // var EC = protractor.ExpectedConditions;
        // await browser.wait(EC.presenceOf($('.result.c-container h3')), 5000);
        //
        // await expect($$('.result.c-container h3 a').first().getText())
        //     .toBe('Protractor - end-to-end testing for AngularJS');
    });
});