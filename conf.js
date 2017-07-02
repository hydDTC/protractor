// exports.config = {
//     framework: 'jasmine',
//     directConnect: true,
//     SELENIUM_PROMISE_MANAGER: false,
//     specs: ['spec.js']
// }


exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
    },
    specs: ['spec.js'],     //运行的测试文件地址
    framework: 'jasmine',
    //framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval:30000
    },
    //输出测试报告
    //onPrepare: function(){
    //    jasmine.getEnv().addReporter(
    //        new Jasmine2HtmlReporter({
    //            savePath: 'e2e/',
    //            takeScreenshots: true,  //是否截屏
    //            takeScreenshotsOnlyOnFailures: true //测试用例执行失败时才截屏
    //        })
    //    );
    //}
};

//http://blog.csdn.net/github_39212680/article/details/73410097  protractor基础一
//http://blog.csdn.net/wosishui21/article/details/38340527      protractor详细解析
//基于node.js 粘进来的