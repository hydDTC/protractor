//包装函数
module.exports = function(grunt) {
    // 项目配置
    grunt.initConfig({
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: ['*.html', "*.js"],
            tasks: ['connect']
        },
        connect: {
            options: {
                livereload: 35729,
                port: 9000,
                open: true
            },
            server: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 默认任务
    grunt.registerTask('default',['connect','watch']);
    // grunt.registerTask('default', function(target) {
    //     console.log("--BEGIN--");
    //     grunt.task.run(['connect']);
    // });
}


// Contrib-jshint——javascript语法错误检查；
    //
    // Contrib-watch——实时监控文件变化、调用相应的任务重新执行；
    //
    // Contrib-clean——清空文件、文件夹；
    //
    // Contrib-uglify——压缩javascript代码
    //
    // Contrib-copy——复制文件、文件夹
    //
    // Contrib-concat——合并多个文件的代码到一个文件中
    //
    // karma——前端自动化测试工具

