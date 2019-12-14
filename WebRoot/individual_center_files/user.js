/**
 * Created by wurenjie on 16/10/26.
 */
$(function(){
    //初始化选择框
    //icheck init
    $('input:checkbox').iCheck();
    $('input:radio').iCheck();
    $('.uisconfig input:radio').iCheck();
    //button reset
    $(".btn-reset").click(function() {
        $('.box input:checkbox').iCheck('uncheck');
    });

    //身份证图片预览
    var natureWidth = "-" + $('.big').width() + "px";
    $('.big').css('right',natureWidth);
    $.inputValidate('.email', /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, 'error', '邮箱格式不正确')
    $.inputValidate('.cellphone', /^1[3456789]\d{9}$/, 'error', '手机号码格式不正确')


})
