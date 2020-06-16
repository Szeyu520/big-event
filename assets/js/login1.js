$(function () {

    var form = layui.form
    form.verify({
        uname: [/^[\S]{6,12}$/, '用户名必须是6-12位字符'],
        pwd: function (value, item) {
            var reg = /^\d{6}$/
            if (!reg.test(value)) {
                return '密码必须是6位数字'
            }
        }
    })

    //控制表单的提交
    $('.layui-form').submit(function (e) {
        // 阻止表单默认提交行为
        e.preventDefault()
        var formData = $(this).serialize()

        // 调用后台接口，验证是否正确
        $.ajax({
            type: 'post',
            url: 'http://ajax.frontend.itheima.net/api/login',
            data: formData,
            success: function (res) {
                //登录成功后，跳转到主页面
                if (res.status === 0) {
                    location.href = './index.html'
                }
            }
        })
    })
})