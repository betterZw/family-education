<%@ page language="java" contentType="text/html; charset=utf-8"%>
<html class="expanded">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>前台登录页面</title>
    <meta charset="utf-8">
    <meta name="keywords" content="寒假在线一对一辅导,高中生在线1对1辅导,高中生在线一对一补习,在线一对一,高考">
    <meta name="description" content="中国高端在线1对1高中辅导品牌|在线一对一">


    <link rel="shortcut icon" href="https://www.zhangmen.com/static/common/static/lib/img/favicon.ico">
    <script async="" src="./files/analytics.js"></script>
    <script src="https://hm.baidu.com/hm.js?2158a4d2a4a595edf73129ee30dd7481"></script>
    <script type="text/javascript" async="" defer="" src="./files/piwik.js"></script>
    <script type="text/javascript" src="./files/4b9d2a8b77e041c761bcd1d626488278.js"></script>



    <link rel="stylesheet" href="./files/common_40bb2b7.css">
    <link rel="stylesheet" href="./files/all_87c2b88.css">
    <link rel="stylesheet" href="./files/minimalist_04aeee2.css">
    <link rel="stylesheet" href="./files/fullpage_f1b36a2.css">
    <link rel="stylesheet" href="./files/widget_bacafe3.css">
    <link rel="stylesheet" href="./files/declaration-popup_e299361.css">
    <link rel="stylesheet" href="./files/sem-zixun_869585e.css">
    <script type="text/javascript" src="./files/picker_b092db4.js"></script>
    <style type="text/css">
        #waf_nc_block {
            position: fixed;
            _position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 9999;
        }

        .waf-nc-mask {
            background: #f8f8f8;
            opacity: 0.5;
            filter: alpha(opacity=50);
            width: 100%;
            height: 100%;
        }

        .waf-nc-wrapper {
            width: 480px;
            height: 254px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -127px;
            margin-left: -240px;
            margin-bottom: 16px;
            background: #ffffff;
            border: 3px solid #00A2CA;
        }

        .waf-nc-icon {
            position: absolute;
            top: 18px;
            left: 20px;
        }

        .waf-nc-title {
            margin-top: 23px;
            margin-left: 47px;
            font-size: 16px;
            color: #333333;
            line-height: 10px;
            text-align: left;
        }

        .waf-nc-splitter {
            margin-left: 26px;
            margin-top: 5px;
            width: 430px;
            height: 0px;
            border: 1px solid #f4f4f4;
        }

        .waf-nc-description {
            margin-top: 22px;
            margin-left: 23px;
            font-size: 12px;
            color: #333333;
            text-align: left;
        }

        #nocaptcha {
            margin-top: 20px;
            margin-left: 92px;
            width: 300px;
            height36px;
        }
    </style>
    <script src="./files/nc.js"></script>
    <style>
        @charset "utf-8";

        @font-face {
            font-family: 'nc_iconfont';
            src: url("//at.alicdn.com/t/font_1465353706_4784257.eot");
            src: url("//at.alicdn.com/t/font_1465353706_4784257.eot?#iefix") format('embedded-opentype'), url("//at.alicdn.com/t/font_1465353706_4784257.woff") format('woff'), url("//at.alicdn.com/t/font_1465353706_4784257.ttf") format('truetype'), url("//at.alicdn.com/t/font_1465353706_4784257.svg#iconfont") format('svg')
        }

        @font-face {
            font-family: 'ncpc_iconfont';
            src: url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot");
            src: url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot?#iefix") format('embedded-opentype'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.woff") format('woff'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.ttf") format('truetype'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.svg#ncpc_iconfont") format('svg')
        }

        .nc-container div#nc-loading-circle {
            background: transparent;
            width: 20px;
            height: 20px;
            display: inline-block;
            position: relative;
            vertical-align: middle
        }

        .nc-container div#nc-loading-circle .sk-circle {
            background: transparent;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0
        }

        .nc-container #nc-loading-circle .sk-circle:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: #818181;
            border-radius: 100%;
            -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both
        }

        .nc-container #nc-loading-circle .sk-circle2 {
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            transform: rotate(30deg)
        }

        .nc-container #nc-loading-circle .sk-circle3 {
            -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            transform: rotate(60deg)
        }

        .nc-container #nc-loading-circle .sk-circle4 {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg)
        }

        .nc-container #nc-loading-circle .sk-circle5 {
            -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            transform: rotate(120deg)
        }

        .nc-container #nc-loading-circle .sk-circle6 {
            -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
            transform: rotate(150deg)
        }

        .nc-container #nc-loading-circle .sk-circle7 {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg)
        }

        .nc-container #nc-loading-circle .sk-circle8 {
            -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
            transform: rotate(210deg)
        }

        .nc-container #nc-loading-circle .sk-circle9 {
            -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
            transform: rotate(240deg)
        }

        .nc-container #nc-loading-circle .sk-circle10 {
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg)
        }

        .nc-container #nc-loading-circle .sk-circle11 {
            -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
            transform: rotate(300deg)
        }

        .nc-container #nc-loading-circle .sk-circle12 {
            -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
            transform: rotate(330deg)
        }

        .nc-container #nc-loading-circle .sk-circle2:before {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s
        }

        .nc-container #nc-loading-circle .sk-circle3:before {
            -webkit-animation-delay: -1s;
            animation-delay: -1s
        }

        .nc-container #nc-loading-circle .sk-circle4:before {
            -webkit-animation-delay: -.9s;
            animation-delay: -.9s
        }

        .nc-container #nc-loading-circle .sk-circle5:before {
            -webkit-animation-delay: -.8s;
            animation-delay: -.8s
        }

        .nc-container #nc-loading-circle .sk-circle6:before {
            -webkit-animation-delay: -.7s;
            animation-delay: -.7s
        }

        .nc-container #nc-loading-circle .sk-circle7:before {
            -webkit-animation-delay: -.6s;
            animation-delay: -.6s
        }

        .nc-container #nc-loading-circle .sk-circle8:before {
            -webkit-animation-delay: -.5s;
            animation-delay: -.5s
        }

        .nc-container #nc-loading-circle .sk-circle9:before {
            -webkit-animation-delay: -.4s;
            animation-delay: -.4s
        }

        .nc-container #nc-loading-circle .sk-circle10:before {
            -webkit-animation-delay: -.3s;
            animation-delay: -.3s
        }

        .nc-container #nc-loading-circle .sk-circle11:before {
            -webkit-animation-delay: -.2s;
            animation-delay: -.2s
        }

        .nc-container #nc-loading-circle .sk-circle12:before {
            -webkit-animation-delay: -.1s;
            animation-delay: -.1s
        }

        @-webkit-keyframes sk-circleFadeDelay {

            0%,
            39%,
            100% {
                opacity: 0
            }

            40% {
                opacity: 1
            }
        }

        @-webkit-keyframes sk-circleFadeDelay {

            0%,
            39%,
            100% {
                opacity: 0
            }

            40% {
                opacity: 1
            }
        }

        @keyframes sk-circleFadeDelay {

            0%,
            39%,
            100% {
                opacity: 0
            }

            40% {
                opacity: 1
            }
        }

        .nc-container .scale_text2 #nc-loading-circle .sk-circle:before {
            background-color: #fff
        }

        .nc_iconfont {
            font-family: "nc_iconfont";
            color: #ff3f08;
            font-size: 16px;
            font-style: normal
        }

        .ncpc_iconfont {
            font-family: "ncpc_iconfont";
            color: #ff3f08;
            font-size: 16px;
            font-style: normal
        }

        .captcha-error .icon_ban {
            float: left;
            font-size: 16px;
            padding-right: 5px;
            line-height: 14px
        }

        .clickCaptcha_text .btn_refresh {
            font-style: normal;
            cursor: pointer;
            background: #fff;
            color: #737383
        }

        .imgCaptcha .btn_refresh {
            font-size: 20px;
            cursor: pointer;
            background: #fff;
            color: #737383
        }

        .nc_voice {
            display: none;
            position: relative;
            margin-top: -34px;
            z-index: 99;
            width: auto;
            height: 34px;
            background: #fff
        }

        .omeo-code-img,
        .omeo-code-audio {
            font-size: 0;
            text-align: left
        }

        .omeo-code-audiobox,
        .omeo-code-img a,
        .omeo-code-audio a,
        .omeo-code-state {
            display: inline-block;
            *display: inline;
            zoom: 1;
            height: 32px;
            vertical-align: top;
            font-size: 12px
        }

        .omeo-code .omeo-code-refresh {
            background: transparent;
            width: 32px;
            height: 32px;
            font-size: 20px;
            color: #888;
            text-align: center;
            text-decoration: none;
            padding-left: 4px;
            line-height: 32px
        }

        .omeo-code .omeo-switch {
            display: none;
            width: 32px;
            height: 32px;
            border-left: 1px solid #e1e1e1;
            background-image: url("//g.alicdn.com/sd/ncpc/images/checkcode.png");
            background-repeat: no-repeat
        }

        .omeo-img-active .omeo-code-img {
            display: block
        }

        .omeo-img-active .omeo-code-audio {
            display: none
        }

        .omeo-code-img img {
            border: 1px solid #cdcdcd;
            cursor: pointer
        }

        .omeo-code-img .omeo-switch {
            background-position: 9px -41px
        }

        .omeo-audio-active .omeo-code-audio {
            display: block
        }

        .omeo-audio-active .omeo-code-img {
            display: none
        }

        .omeo-code-refresh {
            position: relative;
            left: 95px
        }

        .omeo-code-audiobox {
            position: relative;
            height: 30px;
            line-height: 32px;
            border: 1px solid #e1e1e1;
            text-align: center;
            overflow: hidden;
            left: 100px;
            top: 1px;
            width: 45%;
            min-width: 80px;
            background-color: #eee
        }

        .omeo-code-audiobox a {
            display: block;
            text-decoration: none;
            color: #06c
        }

        .omeo-code-audiobox-playing a {
            visibility: hidden
        }

        .omeo-code-audiobox span,
        .omeo-code-audiobox b {
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            height: 30px;
            font-weight: 100;
            overflow: hidden
        }

        .omeo-code-audiobox-playing span,
        .omeo-code-audiobox-playing b {
            visibility: visible
        }

        .omeo-code-audiobox span {
            z-index: 0;
            width: 0;
            background: #186bca
        }

        .omeo-code-audiobox b {
            width: 100%;
            z-index: 1;
            text-align: left;
            text-indent: 30px;
            color: #999;
            background: url("//g.alicdn.com/sd/ncpc/images/checkcode.png") no-repeat 14px -89px
        }

        .omeo-code-audio .omeo-switch {
            background-position: 5px 10px
        }

        input[type=text]::-ms-clear {
            display: none
        }

        .omeo-box {
            position: relative;
            background-color: #fff
        }

        .omeo-code-echo {
            position: absolute;
            top: 2px;
            left: 2px
        }

        .omeo-code-echo input {
            padding: 5px;
            height: 18px;
            line-height: 18px;
            border: 1px solid #ddd;
            width: 80px;
            outline: 0
        }

        .omeo-code-state {
            height: 30px;
            line-height: 30px;
            text-indent: 25px;
            white-space: nowrap;
            background-image: url("//g.alicdn.com/sd/ncpc/images/checkcode.png");
            background-repeat: no-repeat;
            background-position: 100px 100px
        }

        .omeo-code-echo .omeo-code-state-error {
            width: auto;
            background-position: 7px -193px
        }

        .omeo-code-echo .omeo-code-state-success {
            position: absolute;
            width: 30px;
            background-position: 7px -243px
        }

        .omeo-code-state {
            position: absolute;
            left: 0;
            top: 28px
        }

        .nc_voice_close {
            display: inline-block;
            position: relative;
            cursor: pointer;
            left: 95px;
            top: 0;
            border-left: #ddd 2px solid;
            padding: 0 0 0 7px;
            background-color: #fff;
            font-size: 20px;
            color: #888;
            line-height: 32px
        }

        .nc_help {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 99999
        }

        .nc_help .mask {
            background-color: #000;
            opacity: .5;
            filter: alpha(opacity=50);
            width: 100%;
            height: 100%;
            top: 0;
            left: 0
        }

        .nc_btn_close {
            position: absolute;
            height: 20px;
            left: 500px;
            border-radius: 20px;
            padding: 10px 30px;
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
            z-index: 10
        }

        .nc_btn_close:hover {
            background-color: #afafaf
        }

        .nc_hand {
            position: absolute;
            width: 68px;
            height: 53px;
            background-image: url("//g.alicdn.com/sd/ncpc/images/hand.png");
            z-index: 3
        }

        .nc_slide_bg {
            z-index: 3;
            font-size: 12px;
            text-align: center;
            color: #fff;
            line-height: 34px
        }

        .nc_voicebtn {
            position: absolute;
            padding: 0;
            right: -25px;
            font-size: 23px;
            color: #888;
            cursor: pointer;
            line-height: 34px
        }

        .nc_helpbtn {
            position: absolute;
            cursor: pointer;
            right: -95px;
            top: 4px;
            font-size: 12px;
            background-color: #ffb668;
            color: #fff;
            padding: 4px;
            border-radius: 2px;
            line-height: 18px;
            display: none
        }

        .nc_helpbtn:before {
            width: 0;
            height: 0;
            content: "";
            position: absolute;
            left: -2px;
            top: 6px;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 4px solid #ffb668
        }

        .nc-container .errloading {
            border: #faf1d5 1px solid;
            text-indent: 3px;
            background-image: none;
            font-size: 12px;
            width: 290px;
            line-height: 20px;
            padding: 7px 5px 8px 5px;
            color: #ef9f06;
        }

        .nc-container .errloading a {
            color: #30a7fc
        }

        .nc_captcha_text .nc_err {
            float: left;
            text-indent: 0
        }

        .button_move {
            transition: left .5s;
            -moz-transition: left .5s;
            -webkit-transition: left .5s;
            -o-transition: left .5s
        }

        .bg_move {
            transition: width .5s;
            -moz-transition: width .5s;
            -webkit-transition: width .5s;
            -o-transition: width .5s
        }

        .nc_slide_box {
            position: absolute
        }

        .nc_captcha_text {
            height: auto;
            line-height: 20px;
            visibility: hidden;
            font-size: 12px;
            color: #999;
            font-weight: normal
        }

        .nc-container .nc_captcha_img_text {
            width: auto;
            height: auto;
            line-height: 20px;
            visibility: hidden;
            font-size: 12px;
            color: #999;
            font-weight: normal;
            display: none;
            padding: 0 0 10px 0;
            background-position: 0 0;
        }

        .nc-container .nc_captcha_img_text span.nc-lang-cnt {
            line-height: inherit
        }

        .nc-container .imgCaptcha .nc_captcha_img_text {
            width: auto
        }

        .nc_captcha_img_text {
            height: auto;
            line-height: 20px;
            visibility: hidden;
            font-size: 12px;
            color: #999;
            font-weight: normal;
            display: none;
            padding: 0 0 10px 3px;
            background-position: 0 0
        }

        .nc-container .nc_wrapper {
            width: auto
        }

        .nc_scale {
            width: auto;
            height: 34px;
            background: #e8e8e8;
            position: relative;
            margin: 0;
            padding: 0
        }

        .nc_scale.is_audio {
            margin-right: 25px
        }

        .nc-container .nc_scale div {
            height: auto
        }

        .nc-container .nc_scale ul {
            list-style: none
        }

        .nc-container .nc_scale .btn_slide {
            color: #737383;
            background-image: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .nc-container .nc_scale span {
            text-align: center;
            width: 40px;
            height: 32px;
            line-height: 32px;
            border: 1px solid #ccc;
            position: absolute;
            left: 0;
            cursor: move;
            background: #fff;
            z-index: 2
        }

        .nc-container .nc_scale span.nc-lang-cnt {
            *line-height: 34px;
            float: none;
            width: auto;
            height: auto;
            *height: 34px;
            border: none;
            position: static;
            cursor: inherit;
            background: none;
            z-index: 0;
            display: inline
        }

        .nc_slide_button {
            width: 40px;
            height: 32px;
            border: 1px solid #ccc;
            position: absolute;
            left: 0;
            cursor: move;
            background: #fff url("//g.alicdn.com/sd/ncpc/images/rt.png") no-repeat center;
            z-index: 2
        }

        @media screen and (-ms-high-contrast:active),
        (-ms-high-contrast:none) {
            .nc_scale span {
                height: 32px
            }
        }

        .nc-container .nc_scale .btnok {
            cursor: default;
            background: #fff url("//g.alicdn.com/sd/ncpc/images/yes.png") no-repeat center;
            z-index: 3
        }

        .nc-container .nc_scale .btnok2 {
            cursor: default;
            font-size: 20px;
            background: #fff url("//g.alicdn.com/sd/ncpc/images/no.png") no-repeat center;
            z-index: 3
        }

        .nc-container .nc_scale .btn_warn {
            cursor: default;
            color: #ff3f08;
            line-height: 34px;
            text-align: center;
            font-size: 20px;
            background: #fff;
            z-index: 3
        }

        .nc-container .clickCaptcha_text .btn_refresh {
            font-size: 20px
        }

        .nc-container .clickCaptcha_text .icon_close {
            line-height: 30px;
            margin-left: 8px;
            cursor: default;
            color: #ff3f08;
            font-size: 16px;
            float: left;
            margin-right: 2px;
            background: transparent;
            z-index: 3
        }

        .nc-container .nc_captcha_img_text .icon_close {
            cursor: default;
            color: #ff3f08;
            font-size: 16px;
            float: left;
            margin-right: 4px;
            background: transparent;
            z-index: 3;
            line-height: 18px
        }

        .nc-container .errloading .icon_warn {
            cursor: default;
            color: #ff3f08;
            font-size: 18px;
            float: left;
            background: transparent;
            z-index: 3
        }

        .nc-container .nc_scale .btn_ok {
            cursor: default;
            line-height: 34px;
            text-align: center;
            font-size: 20px;
            background: #fff;
            z-index: 3;
            color: #76c61d
        }

        .nc-container .nc_scale .nc_ok,
        .nc-container .nc_scale .nc_bg {
            background: #7ac23c
        }

        .nc-container .nc_scale .nc_bg {
            position: absolute;
            height: 100%;
            _height: 34px;
            left: 0;
            width: 10px
        }

        .nc-container .nc_scale div.redbar {
            background: #fc461e;
            opacity: .5;
            filter: alpha(opacity=50)
        }

        .nc-container .nc_scale div.orange {
            background: #f00
        }

        .nc-container .nc_scale .scale_text {
            width: 100%;
            height: 100%;
            text-align: center;
            position: absolute;
            z-index: 1;
            background: transparent;
            color: #9c9c9c;
            line-height: 34px;
            font-size: 12px;
            cursor: pointer
        }

        .nc-container .nc_scale .scale_text2 {
            text-align: left;
            color: #fff;
            font-size: 12px;
            text-indent: 10px
        }

        .nc-container .nc_scale .scale_text2 b {
            padding-left: 0;
            font-weight: normal
        }

        .nc-container .nc_scale .scale_text.scale_loading_text {
            text-align: center
        }

        .nc-container .nc_scale .imgCaptcha,
        .nc-container .nc_scale .clickCaptcha {
            display: none;
            overflow: hidden;
            border: 1px solid #ccc;
            background: #fff;
            z-index: 20000;
        }

        .nc-container .nc_scale .imgCaptcha p.error span,
        .nc-container .nc_scale .clickCaptcha p.error span {
            line-height: normal
        }

        .nc-container .nc_scale .imgCaptcha {
            height: auto
        }

        .nc-container .nc_scale .clickCaptcha {
            position: absolute;
            left: 0;
            top: 35px;
            height: 270px;
            background: #fff;
            display: none;
        }

        .nc-container .nc_scale .clickCaptcha p.error i {
            color: #ff3f08;
            font-style: normal
        }

        .nc-container .nc_scale .clickCaptcha div {
            position: static;
            clear: both;
            width: 100%;
            background: #fff;
            height: auto
        }

        .nc-container .nc_scale .clickCaptcha .clickCaptcha_text {
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #999;
        }

        .nc-container .nc_scale .clickCaptcha .clickCaptcha_text b {
            font-weight: normal
        }

        .nc_btn_2 {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            margin: 2px 9px 0 0
        }

        .nc_iconfont.nc_btn_2 {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer
        }

        .nc_iconfont.nc_btn_1 {
            position: absolute;
            top: 10px;
            right: 5px
        }

        .nc_btn_1 {
            top: 10px;
            right: 10px
        }

        .scale_text i {
            font-style: normal;
            border: none;
            position: static;
            cursor: default;
            color: #fffc00;
            background: none;
            display: inline;
            width: 100%
        }

        .nc-container .clickCaptcha .clickCaptcha_img {
            margin: 0 auto;
            clear: both;
            position: relative;
        }

        .nc-container .clickCaptcha .clickCaptcha_img img {
            width: 230px;
            height: 230px;
            margin-left: 10px;
            margin-top: 5px
        }

        .nc-container .clickCaptcha .clickCaptcha_btn {
            margin: 10px 0 0 15px;
            position: relative;
            text-align: left;
        }

        .nc-container .clickCaptcha .clickCaptcha_btn img {
            cursor: pointer
        }

        .nc-container .imgCaptcha {
            position: absolute;
            left: 0;
            top: 35px;
            height: auto;
            padding-bottom: 15px;
            border: 1px solid #ccc;
            background: #fff;
        }

        .nc-container .imgCaptcha div {
            position: static;
            width: 90%;
            background-color: #fff
        }

        .nc-container .imgCaptcha,
        .nc-container .clickCaptcha {
            text-align: left;
        }

        .nc-container .imgCaptcha a,
        .nc-container .clickCaptcha a {
            color: #ff3f08
        }

        .nc-container .imgCaptcha .imgCaptcha_text {
            height: 42px;
            line-height: 42px;
            width: 120px;
            background: #fff;
            font-size: 14px;
            text-align: left;
            color: #747474;
            float: left;
            margin-left: 10px;
        }

        .nc-container .imgCaptcha .imgCaptcha_text input {
            margin-top: 5px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            width: 90px;
            background: #fff
        }

        .nc-container .imgCaptcha .imgCaptcha_text input:focus {
            outline: none;
            color: #bbb
        }

        .nc-container .imgCaptcha .imgCaptcha_btn {
            margin: 0 0 0 12px;
            *margin-left: 0;
            clear: both;
            padding-top: 5px;
            width: 90%;
        }

        .nc-container .imgCaptcha .imgCaptcha_btn img {
            cursor: pointer
        }

        .nc-container .imgCaptcha .nc_scale_submit {
            margin: 0 auto;
            cursor: pointer;
            background-color: #fc461e;
            width: 120px;
            height: 32px;
            line-height: 32px;
            color: #fff;
            text-align: center
        }

        .nc-container .imgCaptcha .imgCaptcha_img {
            margin: 4px 0 0 100px;
            height: 40px;
            width: 130px;
            overflow: hidden;
            cursor: pointer;
        }

        .nc-container .imgCaptcha .imgCaptcha_img img {
            width: 130px
        }

        .nc-container .imgCaptcha .imgCaptcha_img input {
            border: solid 1px #ccc
        }

        .nc-lang-ar_MA,
        .nc-lang-ar_SA,
        .nc-lang-iw_HE,
        .nc-lang-iw_IL {
            text-align: right;
            *text-align: left;
        }

        .nc-lang-ar_MA .nc_scale .scale_text2,
        .nc-lang-ar_SA .nc_scale .scale_text2,
        .nc-lang-iw_HE .nc_scale .scale_text2,
        .nc-lang-iw_IL .nc_scale .scale_text2 {
            text-align: right;
        }

        .nc-lang-ar_MA .nc_scale .scale_text2 span,
        .nc-lang-ar_SA .nc_scale .scale_text2 span,
        .nc-lang-iw_HE .nc_scale .scale_text2 span,
        .nc-lang-iw_IL .nc_scale .scale_text2 span {
            *display: inline-block;
            padding: 0 56px 0 0
        }

        .nc-lang-ar_MA .nc_captcha_img_text,
        .nc-lang-ar_SA .nc_captcha_img_text,
        .nc-lang-iw_HE .nc_captcha_img_text,
        .nc-lang-iw_IL .nc_captcha_img_text {
            *text-align: right
        }

        .nc-lang-ar_MA span.nc-lang-cnt,
        .nc-lang-ar_SA span.nc-lang-cnt,
        .nc-lang-iw_HE span.nc-lang-cnt,
        .nc-lang-iw_IL span.nc-lang-cnt {
            text-align: right;
            direction: rtl
        }

        .nocaptcha span.nc-lang-cnt {
            float: none;
            height: auto;
            line-height: 30px
        }

        .nc-container {
            font-size: 12px;
            -ms-touch-action: none;
            touch-action: none;
        }

        .nc-container p {
            margin: 0;
            padding: 0;
            display: inline
        }

        .nc-container .scale_text.scale_text span[data-nc-lang="_startTEXT"] {
            display: inline-block;
            width: 100%
        }

        .nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"] {
            background: -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, #fff), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-animation: slidetounlock 3s infinite;
            -webkit-text-size-adjust: none
        }

        .nc-container .nc_scale .nc-align-center.scale_text2 {
            text-align: center;
            text-indent: -42px
        }

        @-webkit-keyframes slidetounlock {
            0% {
                background-position: -200px 0
            }

            100% {
                background-position: 200px 0
            }
        }

        .nc-container.tb-login .clickCaptcha_text .icon_close {
            line-height: 30px;
            margin-left: 0;
            cursor: default;
            color: #ff3f08;
            font-size: 16px;
            float: left;
            margin-right: 0;
            background: transparent;
            z-index: 3
        }

        .nc-container.tb-login {
            position: relative;
            margin-top: 20px;
            display: none;
        }

        .nc-container.tb-login .nc_scale {
            width: auto;
        }

        .nc-container.tb-login .nc_scale .scale_text2 {
            text-indent: -42px;
            text-align: center;
        }

        .nc-container.tb-login .nc_scale .scale_text2 b {
            padding: 0
        }

        .nc-container.tb-login .nc_scale.nc_err div.scale_text {
            background: #f79977
        }

        .nc-container.tb-login .errloading {
            width: auto
        }

        .nc-container.tb-login .imgCaptcha,
        .nc-container.tb-login .clickCaptcha {
            width: 252px;
            *width: 256px;
            border: 0;
            *height: 300px;
            min-height: 300px;
            max-height: inherit !important;
        }

        .nc-container.tb-login .imgCaptcha div.login-msg.error,
        .nc-container.tb-login .clickCaptcha div.login-msg.error {
            background: #fff2f2
        }

        .nc-container.tb-login .imgCaptcha .captcha-error,
        .nc-container.tb-login .clickCaptcha .captcha-error {
            position: absolute;
            top: 0;
            width: 244px;
            height: auto;
            margin-bottom: 15px;
            padding: 3px;
            border: solid 1px #ff8e8e;
            line-height: 18px
        }

        .nc-container.tb-login .imgCaptcha .captcha-inform,
        .nc-container.tb-login .clickCaptcha .captcha-inform {
            font-size: 110%;
            margin-left: 20px
        }

        .nc-container.tb-login .imgCaptcha {
            padding-top: 66px;
        }

        .nc-container.tb-login .imgCaptcha .imgCaptcha_text {
            width: 100px;
            margin-left: 0;
        }

        .nc-container.tb-login .imgCaptcha .imgCaptcha_text input:focus {
            color: #000
        }

        .nc-container.tb-login .imgCaptcha .imgCaptcha_img {
            width: 120px;
            _width: 100px
        }

        .nc-container.tb-login .imgCaptcha .imgCaptcha_btn {
            width: 100%;
            margin-left: 0
        }

        .nc-container.tb-login .imgCaptcha .nc_scale_submit {
            width: 100%;
            height: 36px;
            line-height: 36px;
            margin-top: 20px;
            margin-left: 0;
            border-radius: 3px;
            font-size: 16px;
            font-family: Tahoma, Helvetica, Arial, sans-serif;
            background: #ff3f08
        }

        .nc-container.tb-login .clickCaptcha {
            padding-top: 40px;
        }

        .nc-container.tb-login .clickCaptcha .clickCaptcha_text {
            text-indent: 4px
        }

        .nc-container.tb-login .clickCaptcha .clickCaptcha_img img {
            margin-left: 10px
        }

        .nc-container.tb-login .nc_btn_1 {
            top: 77px;
            _top: 57px
        }

        .nc-container.tb-login .nc_btn_2 {
            top: 36px
        }

        .login .nc-container.tb-login .login-msg p,
        .login-box .nc-container.tb-login .login-msg p {
            width: auto;
            float: left
        }

        .nc-container.tb-login.nc-old-login {
            margin: 20px 0 10px 0;
            width: 250px;
        }

        .nc-container.tb-login.nc-old-login .nc_wrapper {
            width: 250px
        }

        .nc-container.tb-login.nc-old-login .imgCaptcha,
        .nc-container.tb-login.nc-old-login .clickCaptcha {
            width: 250px;
            min-height: auto;
        }

        .nc-container.tb-login.nc-old-login .imgCaptcha .captcha-error,
        .nc-container.tb-login.nc-old-login .clickCaptcha .captcha-error {
            line-height: 16px
        }

        .nc-container.tb-login.nc-old-login .clickCaptcha {
            padding-top: 28px;
        }

        .nc-container.tb-login.nc-old-login .clickCaptcha .clickCaptcha_img img {
            width: 200px;
            height: 200px
        }

        .nc-container.nc-old-login.show-click-captcha {
            padding-bottom: 60px
        }

        .nc-container.nc-old-login.show-click-captcha.nc-tm-min-fix {
            padding-bottom: 40px
        }

        .nc-container.tb-login.nc-tm-min-fix .clickCaptcha {
            max-height: 340px !important
        }

        #content .login-box .bd .nc-container.tb-login .login-msg {
            margin: 10px auto 15px auto
        }

        #content .login-box .bd .nc-container.tb-login.nc-old-login.show-click-captcha .login-msg {
            margin: 2px 0 0 0
        }

        .nc-container .nc_scale .nc-cc {
            display: none;
            position: absolute;
            left: 0;
            top: 35px;
            z-index: 20000;
            width: 360px;
            height: 570px;
            border: 1px solid #5eaef1;
            border-radius: 4px;
            background: #fff;
            font-size: 14px;
            line-height: 18px;
            color: #333;
        }

        .nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,
        .nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn {
            background-color: #90c1eb
        }

        .nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,
        .nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn,
        .nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,
        .nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh {
            cursor: default
        }

        .nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,
        .nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh {
            color: #999
        }

        .nc-container .nc_scale .nc-cc a {
            color: #3199f4;
            text-decoration: none
        }

        .nc-container .nc_scale .nc-cc .nc_iconfont {
            vertical-align: top;
            margin-right: 8px
        }

        .nc-container .nc_scale .nc-cc-btn {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: top;
            letter-spacing: normal;
            word-spacing: normal;
            width: 100px;
            line-height: 30px;
            text-align: center;
            background-color: #3199f4;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }

        .nc-container .nc_scale .nc-cc-btn.nc-cc-disabled {
            background-color: #90c1eb;
            cursor: default
        }

        .nc-container .nc_scale .nc-cc-btn .nc-lang-cnt {
            line-height: 18px
        }

        .nc-container .nc_scale .nc-cc-header {
            padding: 20px 20px 19px 20px;
            height: 100px;
            background: #f4f8fa;
            border-bottom: 1px solid #ccc
        }

        .nc-container .nc_scale .nc-cc-img1-box {
            float: left;
            width: 100px;
            height: 100px;
            margin-right: 16px
        }

        .nc-container .nc_scale .nc-cc-txt {
            overflow: hidden;
            *zoom: 1;
            line-height: 30px;
            padding-top: 11px
        }

        .nc-container .nc_scale .nc-cc-img2-box {
            position: relative;
            padding: 0 20px;
            margin-top: 20px
        }

        .nc-container .nc_scale .nc-cc-items {
            position: absolute;
            left: 20px;
            _left: 0;
            top: 0;
            width: 320px;
            overflow: hidden
        }

        .nc-container .nc_scale .nc-cc-items-inner {
            margin-right: -20px
        }

        .nc-container .nc_scale .nc-cc-item {
            position: relative;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: top;
            letter-spacing: normal;
            word-spacing: normal;
            margin-right: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            width: 98px;
            height: 98px;
            background: url("//gtms02.alicdn.com/tps/i2/T1ty2QFNNXXXc6Yc2r-1-1.gif");
        }

        .nc-container .nc_scale .nc-cc-item:hover {
            border-color: #3199f4
        }

        .nc-container .nc_scale .nc-cc-item .nc_iconfont {
            display: none;
            position: absolute;
            right: 0;
            bottom: 0;
            color: #3199f4;
            font-size: 22px;
            margin-right: 0
        }

        .nc-container .nc_scale .nc-cc-item.nc-cc-selected .nc_iconfont {
            display: block
        }

        .nc-container .nc_scale .nc-cc-tip {
            display: none;
            position: absolute;
            left: 0;
            bottom: 60px;
            width: 360px;
            line-height: 18px;
            text-align: center;
            color: #eb4f38;
        }

        .nc-container .nc_scale .nc-cc-tip span {
            line-height: normal
        }

        .nc-container .nc_scale .nc-cc-footer {
            position: absolute;
            left: 0;
            bottom: 20px;
            width: 360px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }

        .nc-container .nc_scale .nc-cc-footer .nc_iconfont {
            color: #c4cbd0
        }

        .nc-container .nc_scale .nc-cc-refresh,
        .nc-container .nc_scale .nc-cc-wait {
            position: absolute;
            left: 20px;
            top: 0;
            color: #3199f4;
            cursor: pointer
        }

        .nc-container .nc_scale .nc-cc-wait {
            display: none
        }

        .nc-container .nc_scale .nc-cc-cancel {
            position: absolute;
            right: 20px;
            top: 0;
            color: #3199f4;
            cursor: pointer;
        }

        .nc-container .nc_scale .nc-cc-cancel .nc_iconfont {
            position: relative;
            top: -1px
        }

        .nc-container .nc_scale .nc-cc-loading {
            margin-top: 247px;
            text-align: center;
            line-height: 14px
        }

        .nc-container .nc_scale .nc-cc-loading-img {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: top;
            letter-spacing: normal;
            word-spacing: normal;
            vertical-align: middle;
            background: url("//img.alicdn.com/tps/TB1OdxsKpXXXXcgXFXXXXXXXXXX-14-14.gif") no-repeat;
            width: 14px;
            height: 14px;
            position: relative;
            top: -1px;
            margin-right: 9px
        }

        .nc-container .nc_scale .nc-cc-fail {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 320px;
            height: 180px;
            margin-left: -160px;
            margin-top: -90px;
            background: #fff;
            border-radius: 4px
        }

        .nc-container .nc_scale .nc-cc-fail-inner {
            text-align: center;
            padding: 55px 10px 10px
        }

        .nc-container .nc_scale .nc-cc-fail-action {
            margin: 28px 0 18px;
        }

        .nc-container .nc_scale .nc-cc-fail-action a {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: top;
            letter-spacing: normal;
            word-spacing: normal;
            line-height: 30px;
            margin-left: 16px
        }

        .nc-container .nc_scale .nc-cc-contact {
            text-align: right;
            color: #666;
            padding-right: 9px
        }

        .nc-container .nc_scale .nc-cc-mask {
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            width: 360px;
            height: 570px;
            background: rgba(0, 0, 0, 0.3);
            filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr='#4C000000', endColorstr='#4C000000');
        }

        :root .nc-container .nc_scale .nc-cc-mask {
            -webkit-filter: none;
            filter: none
        }

        .nc-container .nc_scale .nc-cc-arrow-1,
        .nc-container .nc_scale .nc-cc-arrow-2 {
            display: none;
            position: absolute;
            top: 340px;
            border: solid transparent;
            height: 0;
            width: 0
        }

        .nc-container .nc_scale .nc-cc-arrow-1 {
            border-width: 16px;
            margin-top: -1px
        }

        .nc-container .nc_scale .nc-cc-arrow-2 {
            border-width: 15px
        }

        .nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1,
        .nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1,
        .nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2,
        .nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2 {
            display: block;
            _display: none
        }

        .nc-container .nc_scale .nc-cc-right {
            left: 180px;
            top: -339px;
        }

        .nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1 {
            border-right-color: #5eaef1;
            left: -32px
        }

        .nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2 {
            border-right-color: #fff;
            left: -30px
        }

        .nc-container .nc_scale .nc-cc-left {
            left: -335px;
            top: -339px;
        }

        .nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1 {
            border-left-color: #5eaef1;
            right: -32px
        }

        .nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2 {
            border-left-color: #fff;
            right: -30px
        }
    </style>
</head>


<!--[if lt IE 7]> <body class="lt-ie10 lt-ie9 lt-ie8 lt-ie7" > <![endif]-->
<!--[if IE 7]> <body class="lt-ie10 lt-ie9 lt-ie8 ie7" > <![endif]-->
<!--[if IE 8]> <body class="lt-ie10 lt-ie9 ie8" > <![endif]-->
<!--[if IE 9]> <body class="lt-ie10 ie9" > <![endif]-->
<!--[if gt IE 9]> -->

<body>
    <!-- <![endif]-->


    <script>
        window.__URL__ = window.URL;
        window._hmt = window._hmt || [];

        window._mvq = window._mvq || [];
        window._mvq = _mvq;
        _mvq.push(['$setAccount', 'm-138150-0']);

        //_mvq.push(['$setGeneral', '', '', /*用户名*/ '', /*用户id*/ '']);//如果不传用户名、用户id，此句可以删掉
        _mvq.push(['$logConversion']);

        (function () {
            if (!(window.console && typeof window.console.log === "function")) {
                var prop = ["log", "error", "info"];
                var n = 0;
                window.console = {};
                for (n = prop.length; n--;) {
                    window.console[prop[n]] = function () { };
                }
            }
        })()
    </script>




    <div id="wrapper">

        <div id="banner" style="background:url('./files/banner-01_f4a2ea9.jpg')">
            <div class="layout">
                <div class="content-box">
                    <form class="signup-mask" id="subscribe" novalidate="novalidate" data-widget-cid="widget-5"
                        method="post" action="${pageContext.request.contextPath}/UserLoginServlet">
                        <div class="signup-input">

                            <div class="input-wp form-group ui-form-item">
                                <label class="control-label" for="name"></label>
                                <input data-v-label="姓名" type="text" class="form-control" name="name"
                                    placeholder="请输入登录名" id="s-name" data-widget-cid="widget-6" data-explain="">
                                <div class="ui-form-explain"></div>
                            </div>
                            <div class="input-wp">
                                <div class="form-group ui-form-item">
                                    <label class="control-label" for="grade"></label>
                                    <select name="grade" id="grade" class="form-control" placeholder="年级">
                                        <option value="幼儿园小班">幼儿园小班</option>
                                        <option value="幼儿园中班">幼儿园中班</option>
                                        <option value="幼儿园大班">幼儿园大班</option>
                                        <option value="小一">小一</option>
                                        <option value="小二">小二</option>
                                        <option value="小三">小三</option>
                                        <option value="小四">小四</option>
                                        <option value="小五">小五</option>
                                        <option value="小六">小六</option>
                                        <option value="初一">初一</option>
                                        <option value="初二">初二</option>
                                        <option value="初三">初三</option>
                                        <option value="初三">初四</option>
                                        <option value="高一" selected="">高一</option>
                                        <option value="高二">高二</option>
                                        <option value="高三">高三</option>
                                    </select>

                                </div>
                                <div class="form-group ui-form-item">
                                    <label class="control-label" for="weakSubject"></label>
                                    <select name="weakSubject" id="weak_subject" class="form-control" placeholder="科目">
                                        <option value="数学" selected=""> 数学</option>
                                        <option value="语文"> 语文</option>
                                        <option value="英语"> 英语</option>
                                        <option value="政治"> 政治</option>
                                        <option value="历史"> 历史</option>
                                        <option value="地理"> 地理</option>
                                        <option value="化学"> 化学</option>
                                        <option value="生物"> 生物</option>
                                        <option value="钢琴陪练"> 钢琴陪练</option>
                                        <option value="物理"> 物理</option>
                                        <option value="小提琴陪练"> 小提琴陪练</option>
                                    </select>
                                </div>

                                <div class="form-group ui-form-item">
                                    <label class="control-label" for="weakSubject1"></label>
                                    <select style="width:286px" name="selector" id="weak_subject1" class="form-control"
                                        placeholder="身份">
                                        <option value="学生" selected=""> 学生</option>
                                        <option value="老师"> 老师</option>

                                    </select>
                                </div>
                            </div>
                            <br><br>
                            <div class="input-wp form-group ui-form-item">
                                <label class="control-label" for="mobile"></label>
                                <input name="pwd" id="stu_mobile1" class="form-control" type="password"
                                    placeholder="请输入密码" data-widget-cid="widget-7" data-explain="">
                                <br>
                                <a href="${pageContext.request.contextPath}/UserLoginServlet"><input type="submit"
                                        value="登陆" data-widget-cid="widget-7" data-explain=""></a>

                                <br>
                                <div class="ui-form-explain"></div>
                            </div>

                            <input type="hidden" name="completed" value="1">
                            <input type="hidden" name="comeFrom" value="网站">
                            <input type="hidden" name="program" value="pc">
                            </button>
                        </div>
                    </form>

                    <a href="${pageContext.request.contextPath}/register.jsp">
                        <div style="position:absolute;left:800px;top:470px;" class="input-wp form-group ui-form-item">
                            <input type="submit" value="注册">
                        </div>

                    </a>
                    
                    <a href="${pageContext.request.contextPath}/background/htlogin.jsp" style="position:absolute;left:800px;top:530px;">
                    	<h1 style="font-color:blue">管理员登录,请点击 >这里!</h1>
                    </a>


                </div>
            </div>
        </div>



        <!-- <script src="https://www.sobot.com/chat/frame/js/entrance.js?sysNum=bfc2a73dae7342ada3d886355e2b10c3" data-args="manual=true" class="zhiCustomBtn" id="zhichiScript"></script> -->
        <div id="n-footer">
            <div class="guarantee">
                <div class="layout mods">
                    <div class="mod free-listen">
                        <div class="wrap">
                            <h3>免费试听承诺</h3>
                            <p>首节测评课免费试听</p>
                            <p>满意后再付费上课</p>
                        </div>
                    </div>
                    <div class="mod change-teacher">
                        <div class="wrap">
                            <h3>随时换老师承诺</h3>
                            <p>任何时候对老师不满</p>
                            <p>意均可申请更换老师</p>
                        </div>
                    </div>
                    <div class="mod refund-full">
                        <div class="wrap">
                            <h3>全额退款承诺</h3>
                            <p>付款31天内，且所上课时不超过3节</p>
                            <p>可申请全额退款</p>
                        </div>
                    </div>
                    <div class="mod refund-anytime">
                        <div class="wrap">
                            <h3>随时退款承诺</h3>
                            <p>上课期间不满意</p>
                            <p>可随时申请退款</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contactUs">
                <div class="layout">
                    <div class="AboutUs">
                        <ul class="zmLogo">
                            <li>
                                <a href="https://www.zhangmen.com/"><img src="./files/zmLogo_210efeb.png"
                                        title="掌门1对1官网" alt="掌门1对1官网Logo图片"></a>
                            </li>
                        </ul>


                    </div>
                    <ul class="lastUl">
                        <li class="titInfo">下载与支持</li>
                        <li class="download"><a href="https://www.zhangmen.com/client-download">客户端&amp;APP下载</a></li>

                        <li class="price"><a href="https://www.zhangmen.com/study-card">激活学习卡</a></li>
                    </ul>
                    <div class="callPhone">
                        <span class="callInfo">全国统一客服电话</span>
                        <span class="callNum">1010-8868</span>
                    </div>
                </div>
            </div>
            <div class="contactWay">
                <div class="layout">
                    <ul class="contactWay">
                        <li class="footWei"><img src="./files/footWei_d6c15e6.png">
                            <div class="dropdown">
                                <img src="./files/qrcode_1787a81.png" alt="掌门人微信公众号">
                            </div>
                        </li>
                        <li class="footMusic"><a class="zhiCustomBtn"><img src="./files/footMusic_98ed990.png"></a></li>
                        <li class="footHome"><img src="./files/footHome_afad227.png"><span>上海掌小门教育科技有限公司</span></li>
                        <li class="footPosition"><img src="./files/footPosition_5d8edc6.png"><span>上海市宝山区</span></li>
                    </ul>
                </div>
            </div>
            <div class="other" style="border-top: none;">
                <div class="layout">
                    <div class="copyright-content" style="position: relative;">
                        <div class="copyright col-ll" style="height: 50px;">
                            <p>Copyright 上海掌小门教育科技有限公司（沪ICP备16015460-1号） 客服电话: 10108868</p>
                            <p style="position: absolute;bottom: 15px;left: 471px;">上海市宝山区</p>
                        </div>
                        <div class="cerfication col-rr">
                            <div class="col-ll" style="width:230px;">
                                <a target="_blank"
                                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010902002669"
                                    style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                                    <img src="./files/beian_d0289dc.png" style="float:left;">
                                    <p
                                        style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
                                        沪公网安备 31010902002669号</p>
                                </a>
                            </div>
                            <div class="authentication col-rr">
                                <a class="anquan" key="574bdb6fefbfb00a5a3c3e43" logo_size="83x30" logo_type="business"
                                    href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.zhangmen.com&at=business"
                                    target="_blank" rel="nofollow">
                                    <img src="./files/safe_230f939.png" alt="安全联盟认证" width="83" height="30"
                                        style="border: none;">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="declaration-popup" class="">
                <!--<div class="mask"></div>-->
                <div class="inner-box">
                    <b class="title">声明</b>
                    <b class="member">各位家长学员:</b>
                    <p>上海掌小门教育科技有限公司是一家依据中华人民共和国法律法规合法设立的有限责任公司，掌门1对1由于战略发展部署规划，现授权上海掌小门教育科技有限公司进行掌门1对1课程协议的签署与课程价款的收付。
                    </p>
                    <p>掌门1对1郑重声明，我们将会以一贯的真诚品质为各位家长学员提供优质高效的课程服务！ </p>
                    <div>
                        <span>掌门1对1</span>
                        <i>2017年2月18日</i>
                    </div>
                    <img class="J-close-btn close" src="./files/close_ee16b2b.png">
                </div>
            </div>


        </div>







        <script type="application/json" data-id="zm.data.url">
		 {"register":"/register","courseSystem":"/course-system","popularTeacher":"/popular-teacher","examCheats":"/exam-cheats","dailyLesson":"/exam-cheats/daily-lesson","cheatsResource":"/exam-cheats/cheats-resource","appointment":"/appointment","bookTestLesson":"/book-test-lesson","examSkill":"http://zmlearn.com/exam-cheats/exam-skill","oldOpenLesson":"http://zmlearn.com/exam-cheats/open-lesson","openLesson":"http://open.","lesson":"/lesson","lessons":"/zm-lessons","studentCourseManagement":"/course-management","forgotPassword":"/forgot-password","studentPayResult":"/pay-result","studentUpdateInfo":"/update-info","studentPerfectInfo":"/perfect-info","studentInbox":"/inbox","studentRechargeAccountPlan":"/recharge-account-plan","studentCourseCalendar":"/student-course-calendar","studentRechargeAccountHistory":"/recharge-account-history","studentOutlayHistory":"/outlay-history","studentZCardHistory":"/zcard-history","studentChangePassword":"/change-password","questionLibrary":"/t","zmziXun":"/tuijian/","downloadClientIndex":"/client-download","special":{"sprint1":"/zhuanti/start2015-level1","sprint2":"/zhuanti/start2015-level2","winter":"/zhuanti/special-training","art":"/zhuanti/arts-exam-easy","seniorOneSprint":"/zhuanti/course-pack/senior-one-sprint","seniorTwoSprint":"/zhuanti/course-pack/senior-two-sprint"},"index":"/","home":"/","login":"/login","logout":"/api/logout","zmAdvantage":"/zm-advantage","zmAchievement":"/zm-achievement","zmReputation":"/zm-reputation","aboutUsIndex":"/about-us/index","zmTablet":"/tablet","zmTaobaoStore":"https://shop141155570.taobao.com/index.htm?spm=a1z10.1-c.w5002-12959537281.14.Pdw1KN","tuijian":"/tuijian","sitemap":"/sitemap","liveList":"/live","xiaoxue":"/xiaoxue","bbs":"https://bbs.zhangmen.com","zhaoshi":"http://open.zmlearn.com/api/teacher-service"} 
	</script>




        <script type="application/json" data-id="zm.data.api">
		 {"download":"/api/download","studentRegisterBook":"/api/student/register-and-book-new","login":"/api/user/login","logout":"/api/logout","zixunTag":"/api/zixun/get-zixun-tags"} 
	</script>













        <script type="application/json" data-id="zm.data.sem">
		 {"semChannelSwitch":false} 
	</script>




        <script type="application/json" data-id="zm.data.appHost">
		 "https://app-gateway.zmlearn.com" 
	</script>




        <script type="application/json" data-id="zm.data.processEnv">
		 "prod" 
	</script>




        <script type="application/json" data-id="zm.data.gradeTosubject">
		 {"幼儿园小班":["数理逻辑训练"],"幼儿园中班":["语文思维训练","数理逻辑训练","学习力训练","钢琴陪练"],"幼儿园大班":["语文思维训练","数理逻辑训练","学习力训练","钢琴陪练"],"小一":["语文思维训练","数理逻辑训练","学习力训练","钢琴陪练","小提琴陪练"],"小二":["语文思维训练","数理逻辑训练","学习力训练","钢琴陪练","小提琴陪练"],"小三":["语文思维训练","数理逻辑训练","学习力训练","钢琴陪练","小提琴陪练"],"小四":["数学","语文","英语","数理思维","钢琴陪练","小提琴陪练"],"小五":["数学","语文","英语","数理思维","钢琴陪练","小提琴陪练"],"小六":["数学","语文","英语","数理思维","钢琴陪练","小提琴陪练"],"初一":["数学","语文","英语","政治","历史","地理","生物","科学","钢琴陪练","小提琴陪练"],"初二":["数学","语文","英语","政治","历史","地理","生物","科学","钢琴陪练","物理","小提琴陪练"],"初三":["数学","语文","英语","政治","历史","地理","化学","生物","科学","钢琴陪练","物理","小提琴陪练"],"初四":["数学","语文","英语","政治","历史","地理","化学","生物","科学","钢琴陪练","物理","小提琴陪练"],"高一":["数学","语文","英语","政治","历史","地理","化学","生物","钢琴陪练","物理","小提琴陪练"],"高二":["数学","语文","英语","政治","历史","地理","化学","生物","钢琴陪练","物理","小提琴陪练"],"高三":["数学","语文","英语","政治","历史","地理","化学","生物","钢琴陪练","物理","小提琴陪练"]} 
	</script>




        <script type="application/json" data-id="zm.data.subjectLabel">
		 {"数理逻辑训练":"奥数","语文思维训练":"语文","数理思维":"奥数"} 
	</script>




        <script type="application/json" data-id="zm.data.gradeLabel">
		 [["幼儿园小班","幼儿园小班"],["幼儿园中班","幼儿园中班"],["幼儿园大班","幼儿园大班"],["小一","小一"],["小二","小二"],["小三","小三"],["小四","小四"],["小五","小五"],["小六","小六"],["初一","初一"],["初二","初二"],["初三","初三"],["初三","初四"],["高一","高一"],["高二","高二"],["高三","高三"]] 
	</script> -->










        <script type="text/javascript" src="./files/mod_96dd55b.js"></script>
        <script
            type="text/javascript">require.resourceMap({ "res": { "common:widget/picker/src/legacy.js": { "url": "/static/common/widget/picker/src/legacy_c9e7119.js", "pkg": "common:p4" }, "common:widget/picker/src/picker.js": { "url": "/static/common/widget/picker/src/picker_039f21b.js", "deps": ["common:widget/jquery/1.11.3/jquery.js"], "pkg": "common:p4" }, "common:widget/picker/src/picker.date.js": { "url": "/static/common/widget/picker/src/picker.date_99ad5a9.js", "deps": ["common:widget/picker/src/picker.js", "common:widget/jquery/1.11.3/jquery.js"], "pkg": "common:p4" }, "common:widget/picker/src/picker.time.js": { "url": "/static/common/widget/picker/src/picker.time_0bf3d0a.js", "deps": ["common:widget/picker/src/picker.js", "common:widget/jquery/1.11.3/jquery.js"], "pkg": "common:p4" }, "common:widget/picker/src/translations/zh_CN.js": { "url": "/static/common/widget/picker/src/translations/zh_CN_519689b.js", "deps": ["common:widget/jquery/1.11.3/jquery.js"], "pkg": "common:p4" }, "common:widget/picker/picker.js": { "url": "/static/common/widget/picker/picker_dac137e.js", "deps": ["common:widget/picker/src/legacy.js", "common:widget/picker/src/picker.js", "common:widget/picker/src/picker.date.js", "common:widget/picker/src/picker.time.js", "common:widget/picker/src/translations/zh_CN.js"], "pkg": "common:p4" } }, "pkg": { "common:p4": { "url": "/static/common/pkg/picker_b092db4.js" } } });</script>
        <script type="text/javascript" src="./files/common_e3a1aa0.js"></script>
        <script type="text/javascript" src="./files/flowplayer_57ab358.js"></script>
        <script type="text/javascript" src="./files/all_a8d1492.js"></script>
        <script type="text/javascript" src="./files/tj_5ec92bd.js"></script>
        <script type="text/javascript" src="./files/tool_efcab92.js"></script>
        <script type="text/javascript" src="./files/evaluate_9c498a1.js"></script>
        <script type="text/javascript" src="./files/widget_e839aa6.js"></script>
        <script type="text/javascript" src="./files/declaration-popup_7b4a0f1.js"></script>
        <script type="text/javascript" src="./files/easing_1046537.js"></script>
        <script type="text/javascript" src="./files/book-options-relative_6967dd7.js"></script>
        <script type="text/javascript" src="./files/jquery.SuperSlide.2.1.1_cc074b2.js"></script>
        <script type="text/javascript" src="./files/sem-zixun_3447800.js"></script>
        <script type="text/javascript">!function () {

                var _hmt = _hmt || [];
                (function () {
                    var hm = document.createElement("script");
                    hm.src = "//hm.baidu.com/hm.js?2158a4d2a4a595edf73129ee30dd7481";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                })();
            }();
            !function () {
                require("desktop:widget/quick-appoint-renew/quick-appoint-renew.js");
            }();
            !function () {
                require("desktop:widget/footer-version-renew/footer-version-renew.js");
            }();
            !function () {
                require("desktop:widget/declaration-popup/declaration-popup.js");
            }();
            !function () {


                window.onerror = function (message, url, line, column, error) {
                    $.ajax({
                        url: '/api/log/write',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            pageUrl: top.location.href,
                            fileUrl: url,
                            line: line || 0,
                            column: column || 0,
                            message: message,
                            userAgent: navigator.userAgent,
                            stack: error && error.stack,
                            time: new Date().getTime()
                        })
                    });

                    return false;
                };
            }();
            !function () {
                (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-85726094-1',
                    'auto'); ga('send', 'pageview');
            }();</script>
        <script type="text/javascript" src="./files/acc.js" crossorigin="" defer=""></script>
    </div>
    <div id="waf_nc_block" style="display: none;">
        <div class="waf-nc-mask"></div>
        <div id="WAF_NC_WRAPPER" class="waf-nc-wrapper"><img class="waf-nc-icon"
                src="./files/TB1_3FrKVXXXXbdXXXXXXXXXXXX-129-128.png" alt="" height="20" width="20">
            <p class="waf-nc-title">安全验证</p>
            <div class="waf-nc-splitter"></div>
            <p class="waf-nc-description">请完成以下验证后继续操作：</p>
            <div id="nocaptcha"></div>
        </div>
    </div>
</body>

</html>