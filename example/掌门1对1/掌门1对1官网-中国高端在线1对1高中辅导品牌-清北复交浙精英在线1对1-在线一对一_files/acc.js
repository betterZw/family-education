(function() {
    try {
        if (!window.require) return
        var deviceId = require('electron').remote.require('node-environment').deviceId;
        if (deviceId) localStorage.setItem('__accId__', deviceId);
        if (deviceId) localStorage.setItem('__accid__', deviceId);
    } catch(e) {}
})();
(function () {

    // 统计域名 && 1px base64 image data
    var analyticsDomain = (location.protocol || '') + '//acc.zhangmen.com';
    var base64Iamge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";

    // 设置用户标示
    var accId;
    var __accId = (+new Date) + '' + Math.random();
    if (window.localStorage) {
        accId = localStorage.getItem('__accId__') || __accId;
        (accId == __accId) && localStorage.setItem('__accId__', accId);
    } else {
        accId = (document.cookie.match(/__accId__=([^;]*);?/) || [])[1] || __accId;
        accId == __accId && (document.cookie = "__accId__=" + escape(accId) + ";expires=" + (new Date('2580/01/01')).toGMTString());
    }

    // 构造统计方法
    var __acc__ = window.__acc__ = function (obj) {
        if (typeof obj !== 'object') return;
        var logerMessage;
        try {
            obj.accId = obj.accId || accId; // 追加访问标示
            logerMessage = JSON.stringify(obj);
        } catch (e) {
            logerMessage = '{"accId": "' + accId + '", "action": "' + obj.action + '", "message": "' + obj.message + '", "ua": "' + navigator.userAgent + '", "error": "Parse JSON Error"}';
        }
        var accUrl = analyticsDomain + '/acc?logInfo=' + encodeURIComponent(logerMessage);
        var imgDom = new Image;
        imgDom.src = accUrl;
        setTimeout(function () {
            imgDom.src = base64Iamge; // 放弃图片加载，防止出现请求无返回数据的情况
        }, 500);
    };

    // 默认错误统计，只监控 js 执行报错，只能用于 web 环境错误收集
    var lastErrorInfos = {};
    window.onerror = function (msg, url, line, col, error) {
        var nowDate = +new Date;
        var errorSign = msg + (url || '') + (line || '') + (col || '');
        if (lastErrorInfos[errorSign]) return; // 增加报错限制，相同错误只提示一遍
        __acc__({
            action: 'window.onerror',
            message: {
                message: msg,
                url: url,
                line: line,
                col: col,
                error: error
            },
            time: nowDate,
            project: location.host,
            path: location.pathname,
            url: location.href.replace(location.origin, ''),
            ua: navigator.userAgent
        });
        lastErrorInfos[errorSign] = nowDate;
        return true; // 阻止控制台显示错误
    };
})();
