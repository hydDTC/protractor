/**
 * Created by lifei on 2017/6/27.
 */
/**
 * Created by lifei on 2017/6/22.
 */

/**
 * Created by Administrator on 2015/4/24.
 */
function loginFunc(address){       //登录
    browser.get(address);
    element(by.model("form.username")).sendKeys("admin");
    element(by.model("form.password")).sendKeys("admin");
    element(by.css("input.loginbtn")).click();
    var userName = element(by.binding("user.name")).getText();
    expect(userName).toEqual("admin");
}
function save(save){        //点击完成按钮
    element(by.cssContainingText("button",save)).click()//完成
    browser.wait(function () {
        return browser.isElementPresent(element(by.css("button.confirm")));
    }, 2000);
    element(by.css("button.confirm")).click();
}

function deleteTd(number1, number2){      //删除某一列;number1 第几列,number2,删除按钮所在的a排第几个;
    element(by.css("button.dropdown-toggle")).click();
    element.all(by.repeater("x in $data")).get(number1).$$("a").get(number2).click();
    browser.sleep(1000);
    element(by.cssContainingText("button","确定!")).click();

    element(by.cssContainingText("button","OK")).click();
}

//测试service;
describe("describe", function() {
    beforeEach(function() {
    })

    //登录
    it("login", function() {
        //登录
        loginFunc("http://localhost:8004/src/#/login")
    });

    it("network", function() {
        browser.wait(function () {
            return browser.isElementPresent(element(by.cssContainingText(".title"," 网络管理 ")));
        }, 2000);
        element(by.cssContainingText(".title"," 网络管理 ")).click();
    })

    it("create", function() {
        browser.wait(function () {
            return browser.isElementPresent(element(by.cssContainingText("button","创建网络规则")));
        }, 2000);
        element(by.cssContainingText("button","创建网络规则")).click();
        browser.wait(function () {
            return browser.isElementPresent(element(by.model("form.name")));
        }, 2000);
        element(by.model("form.name")).sendKeys("lifei11111");   //名称

        //适用应用
        element.all(by.options("x.objectMeta.name for x in appArr")).get(2).click();

        //选择允许应用
        element(by.css("button[ng-click='openModal()']")).click();
        element.all(by.repeater("x in roles")).get(2).click();
        element(by.cssContainingText("button", "确定")).click();

        save("完成");

        //验证
        var service = element.all(by.repeater("x in $data")).get(0).$$("a").get(0).getText();
        expect(service).toEqual("lifei1111")
    })

    it("edit", function() {
        element.all(by.repeater("x in $data")).get(0).$$("a").get(0).click()
        expect(element(by.css("h5")).getText()).toEqual("adc");
        var title = element(by.binding("form.app")).getText();
        expect(title).toEqual("lifei11111");

        //返回
        element(by.cssContainingText("a","网络管理")).click();
        service = element.all(by.repeater("x in $data")).get(0).$$("td").get(2).getText();
        expect(service).toEqual("testtttt");
    });

    it("delete", function(){
        //删除

        var buttondelete = element.all(by.repeater("x in $data")).get(0).$$("a").get(1).getText();
        expect(buttondelete).toEqual("删除");
        var a =  element.all(by.repeater("x in $data")).get(0).$$("a").get(1);

        deleteTd(0,1);

        var name = element.all(by.repeater("x in $data")).get(0).$$("a").get(0).getText();
        expect(name).toEqual("lifei");
    })
    afterEach(function(){
        browser.sleep(2000);
    })
})

