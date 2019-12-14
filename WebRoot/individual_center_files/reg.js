$(function() {
    var choose = $('.app-body').data('item');
    if(choose == 'choose_s_dev') {
        $('input.type_1').iCheck('check');
    }else {
        $('input.type_0').iCheck('check');
    }
    $('.'+ choose).show();

    $('input[name=reg_type]').on('ifClicked', function(event) {
        if($(this).val() == '1') {
            $('.choose_c_dev').hide();
            $('.choose_s_dev').show();
        }else {
            $('.choose_s_dev').hide();
            $('.choose_c_dev').show();
        }
    });

    $('input[name=reg_check]').on('ifClicked', function(event) {
		if($(this).attr('checked') == 'checked') {
			$(this).removeAttr('checked');
		}else {
			$(this).attr('checked', 'checked');
		}
	});

	$('.reg_checksc').click(function() {
		window.location.href = "http://www.yiban.cn/user/info/index?type=2";
	});

	$('.reg_checkco').click(function() {
		window.location.href = "/ajax/regcompany";
	});

	$('.adduser').click(function() {
        if($('.adduser').attr('disabled') == 'disabled') {
            return false;
        }
        $('.adduser').attr('disabled', 'disabled');
		if($('input[name=reg_check]').attr('checked') != 'checked') {
			$.toast('请阅读易班开发者协议、免责声明');
            $('.adduser').removeAttr('disabled');
			return;
		}
		var typeRedio = $('input[name=reg_type]');
		for(var i = 0; i < typeRedio.length; i++) {
			if(typeRedio[i].checked) {
				var reg_type = typeRedio[i].value;
				break;
			}
		}
		var item = (reg_type > 0) ? '_s' : '_c';
		$.post("/ajax/reg", {
			reg_uname : $('#reg_uname').val(),
			reg_cnum : $('#reg_cnum').val(),
			reg_email : $('#reg_email').val(),
			reg_phone : $('#reg_phone').val(),
			reg_type : reg_type,
			reg_home : $('#reg_home'+ item).val(),
			reg_snum : $('#reg_snum'+ item).val(),
			reg_job : $('#reg_job'+ item).val(),
			reg_pic : $('#see_pic'+ item).attr('src')
		}, function(data) {
			if(data > 0) {
				window.location.href = '/global/regfour';
			}else {
				var re = eval('(' + data + ')');
				$.toast(re.msgCN);
                $('.adduser').removeAttr('disabled');
			}
		});
	});

	$('.upduser').click(function() {
        if($('.upduser').attr('disabled') == 'disabled') {
            return false;
        }
        $('.upduser').attr('disabled', 'disabled');
		if($('input[name=reg_check]').attr('checked') != 'checked') {
			$.toast('请阅读易班开发者协议、免责声明');
            $('.upduser').removeAttr('disabled');
			return;
		}
		var typeRedio = $('input[name=reg_type]');
		for(var i = 0; i < typeRedio.length; i++) {
			if(typeRedio[i].checked) {
				var reg_type = typeRedio[i].value;
				break;
			}
		}
		var item = (reg_type > 0) ? '_s' : '_c';
		$.post("/ajax/regchange", {
			reg_uname : $('#reg_uname').val(),
			reg_cnum : $('#reg_cnum').val(),
			reg_email : $('#reg_email').val(),
			reg_phone : $('#reg_phone').val(),
			reg_type : reg_type,
			reg_home : $('#reg_home' + item).val(),
			reg_snum : $('#reg_snum' + item).val(),
			reg_job : $('#reg_job' + item).val(),
			reg_pic : $('#see_pic'+ item).attr('src')
		}, function(data) {
			if(data > 0) {
				window.location.href = '/global/regfour';
			}else {
				var re = eval('(' + data + ')');
				$.toast(re.msgCN);
                $('.upduser').removeAttr('disabled');
			}
		});
	});

	$('.updusercall').click(function() {
        if($('.updusercall').attr('disabled') == 'disabled') {
            return false;
        }
        $('.updusercall').attr('disabled', 'disabled');
		var email = $('#change_email').val();
		var phone = $('#change_phone').val();
		$.post("/ajax/touchchange", {
			email : email,
			phone : phone
		}, function(data) {
			if(data > 0) {
				window.location.href = '/global/user';
			}else {
				var re = eval('(' + data + ')');
				$.toast(re.msgCN);
                $('.updusercall').removeAttr('disabled');
			}
		});
	});
});
