/**
 * Created by wurenjie on 16/9/26.
 */
(function($) {
    "use strict";

    $.fn.transitionEnd = function(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
        // var events = ['click'],
            i, dom = this;
        function fireCallBack(e) {
            /*jshint validthis:true */
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    };


})($);
/**
 * Created by wurenjie on 16/9/27.
 */
+ function($){
    "use strict";
    var defaults;
    $.modal = function(params, onOpen){
    	$(document.activeElement).blur();
        params = $.extend({}, defaults, params);//???
        var buttons = params.buttons;
        var buttonsHtml = buttons.map(function(o,i){
            return '<div class="yw-btn yw-btn-dialog yw-btn-sm mr-10 btn-'+ (o.className || "")+'">'+ o.text +'</div>'
        }).join("")

        var tpl = '<div class="dialog-main'+' '+(params.className?params.className:'')+'">' +
            (params.title ? '<div class="dialog-title"><span class="dialog-title-text">'+params.title+'</span><i class="iconfont icon-close pull-right"></i></div>' : '')+
                     '<div class="dialog-content">' +
            (params.text? '<div class="dialog-txt">' + params.text + '</div>' : params.content)+
                        '<div class="dialog-buttonGroup">' + buttonsHtml +'</div>'+
                    '</div>'+
                  '</div>';
        var dialog = $.openModal(tpl, onOpen, params.closeBtn);

        dialog.find('.yw-btn-dialog').each(function(i,e){
            var el = $(e)
            el.click(function(){
                if(params.autoClose){
                    if(params.className){
                        $.closeModal(params.className)
                    }else{
                        $.closeModal()
                    }
                }
                if(buttons[i].onClick){
                    buttons[i].onClick.call(dialog)
                }
            })
        });
        dialog.find('.icon-close').click(function(){
            if(params.className){
                $.closeModal(params.className)
            }else{
                $.closeModal()
            }
        })

    };
    $.openModal = function(tpl, onOpen, closeBtn){
        var mask = $("<div class='pop-mask'></div>");
        mask.appendTo(document.body);
        mask.show();///延时作用????

        var dialog = $(tpl).appendTo(document.body);

        if (onOpen) {
            onOpen.call(dialog);
        }
        if(closeBtn != undefined & !closeBtn){
        	$('.icon-close').remove();
        }
        dialog.show();
        mask.addClass("pop-mask-visible");
        dialog.addClass('dialog-visible');

        return dialog;

    };
    $.closeModal = function(className){
        $(".pop-mask-visible").removeClass("pop-mask-visible").transitionEnd(function() {
            $(".pop-mask").remove();
        });
        if(className){
            var $className = '.'+className
            $($className).removeClass('dialog-visible').transitionEnd(function(){
                $($className).remove()
            })
        }else{
        	console.log(1)
            $('.dialog-main').removeClass('dialog-visible').transitionEnd(function(){
                $('.dialog-main').remove()
            })
        }

    };
    $.alert = function(text,title,onOK,closeBtn){
        var config;
        if(typeof text === 'object'){
            config = text;
        }else{
            if(typeof title === 'function'){
                onOK = arguments[1];
                title = undefined;
                closeBtn = arguments[2];
            }
            config = {
                text:text,
                title:title,
                onOK:onOK,
                closeBtn:closeBtn
            }
        }
        return $.modal({
            text:config.text,
            title:config.title,
            closeBtn:config.closeBtn,
            buttons:[{
                text:defaults.buttonOK,
                className:'primary',
                onClick:config.onOK
            }]
        })

    };
    $.confirm = function(text, title, onOK, onCancel){
        var config;
        config = {
            text: text,
            title: title,
            onOK: onOK,
            onCancel: onCancel
        };
        if(typeof text === 'object'){
            config = text;
        }
        if(typeof title === 'function'){
            config.onCancel = arguments[2];
            config.onOK = arguments[1];
            title = undefined;

        }
        return $.modal({
            text:config.text,
            title:config.title,
            className:config.className,
            buttons:[
                {
                    text:defaults.buttonOK,
                    className:"primary",
                    onClick:config.onOK
                },
                {
                    text:defaults.buttonCancel,
                    className:"default",
                    onClick:config.onCancel
                }
            ]
        })
    }
    defaults = $.modal.prototype.defaults = {
        title: "提示",
        text: undefined,
        buttonOK: "确定",
        buttonCancel: "取消",
        buttons: [{
            text: "确定",
            className: "primary"
        }],
        autoClose: true //点击按钮自动关闭对话框，如果你不希望点击按钮就关闭对话框，可以把这个设置为false
    };


}($);
/**
 * Created by wurenjie on 16/9/26.
 */
+function($){
    "use strict";
    var defaults;
    var show = function(html){
        var mask = $("<div class='pop-mask-transparent'></div>");
        var tpl = '<div class="pop-main">'+ (html || '已经完成') +'</div>';
        mask.appendTo(document.body);
        $(tpl).appendTo(document.body);
        var toastMain = $('.pop-main');
        toastMain.addClass('toast-visible');
    };
    var hide = function(callback){
        var mask = $(".pop-mask-transparent");
        mask.remove();
        $('.toast-visible').removeClass('toast-visible').transitionEnd(function(){
            var $this = $(this);
            $this.remove();//???
            callback && callback($this);
        })
    };
    $.toast = function(text,time,callback){
        if(typeof time === "function"){
            callback = time;
            time = toastDefaults.duration
        }
        show(text);
        setTimeout(function(){
            hide(callback)
        },time || toastDefaults.duration)
    };
    var toastDefaults = $.toast.prototype.defaults = {
        duration: 2000
    }

}($);
/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          }
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Check ARIA option
          aria = !!settings.aria,

          // Set ARIA placeholder
          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),

          // Parent & helper
          parent = '<div class="' + className + '" ' + (aria ? 'role="' + node[_type] + '" ' : ''),
          helper;

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function() {
            parent += 'aria-labelledby="';

            if (this.id) {
              parent += this.id;
            } else {
              this.id = ariaID;
              parent += ariaID;
            }

            parent += '"';
          });
        }

        // Wrap input
        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        //yibanWidget CSS iradio
        $('<span class="iradio-icon"></span>').appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className || '');
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                if ($(event.target).is('a')) {
                  return;
                }
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseout|touchend
                if (/ut|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                }
              }

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              }
            }
          });
        }

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              }
            }

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          }
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              }

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              }
            }

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            }
          }
        });
      });
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);

/**
 * Created by wurenjie on 16/10/10.
 */
(function($){
    var $dropDownMenu = $('.dropDown-menu');
    $(document).on('click','.dropDown-box',function(){
        var $thisSubMenu = $(this).siblings('.dropDown-menu');
        var $contentBox = $(this).children('.dropDown-content');
        if($thisSubMenu.hasClass("hidden")){
            $thisSubMenu.removeClass("hidden");
            $contentBox.addClass('choosing');
        }else{
            $thisSubMenu.addClass("hidden");
            $contentBox.removeClass("choosing");
        }
    });
    //列表项点击
    $(document).on('click','.dropDown-menu li',function(){
        var text = $(this).text();
        var param = $(this).data('param');
        var $thisParentMenu = $(this).parent();
        var $contentBox = $(this).parents('.dropDown-group').find('.dropDown-content');
        $contentBox.data('param',param).text(text).removeClass("default choosing");
        $thisParentMenu.addClass("hidden");
    });
    //空白区域点击
    $(document).mouseup(function(e){
        var $dropBox = $('.dropDown-group');
        if(!$dropBox.is(e.target) && $dropBox.has(e.target).length === 0){
            $dropDownMenu.addClass("hidden");
            $('.dropDown-content').removeClass("choosing");
        }
    });
    //switch
    $.SwitchCallBack = {}
    $(document).on('click','.yw-switch',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $.SwitchCallBack.switchFalse && $.SwitchCallBack.switchFalse($(this));

        }else{
            $(this).addClass('active');
            $.SwitchCallBack.switchTrue && $.SwitchCallBack.switchTrue($(this))

        }
    });



    //validate
    /*
     element:选择器 '.input'
     reg:'正则表达式',
     type:'correct,warning,info,error'
     text:'提示信息'
     */
    $.inputValidate = function(element, reg, type, text){
        //只检查是否为空
        var $element = $(element);
        if(typeof arguments[3] === 'undefined') {
            text = type;
            type = reg;
        }
        var param = arguments
        $element.blur(function(){

            var $thisValidateBox = $element.siblings('.validate-info');
            $thisValidateBox && $thisValidateBox.remove();
            if(typeof param[3] === 'undefined'){
                if ($element.val() == '') {
                    appendToElement()
                }
            }else{
                if(!reg.test($(element).val())){
                    appendToElement()
                }
            }
        });
        function appendToElement(){
            var html =
                '<div class="validate-info">' +
                '<i class="iconfont icon-'+type+'"></i>'+
                '<span>'+text+'</span>'+
                '</div>';
            $element.after(html)
        }
    }


})($);
