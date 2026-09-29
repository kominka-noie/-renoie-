// JavaScript Common

// Loading
jQuery(window).on('load', function () {
	jQuery('html').addClass('is_ready');
	jQuery("#loading").delay(0).fadeOut(2000);
	jQuery("#first h2.catch").addClass('is-view');
});

// Page transition
jQuery(window).on('load', function () {
	jQuery('#wrapper').removeClass('fadeout');
});

// Page
window.onpageshow = function (event) {
	if (event.persisted) {
		window.location.reload();
	}
};
window.onunload = function () {}

// Fade non
jQuery(function () {
	jQuery('.single article .blocks-gallery-item a,.single .wp-block-image a,a.fancyboxforwp').attr('class', 'non hover motion');
	jQuery('a:not([href^="#"]):not([target]):not([href^="mailto:"]):not([onclick^="window.open"]):not([class^="non"])').on('click', function (e) {
		e.preventDefault();
		url = jQuery(this).attr('href');
		if (url !== '') {
			jQuery('#wrapper').addClass('fadeout');
			setTimeout(function () {
				window.location = url;
			}, 1500);
		}
		return false;
	});
});

// Scroll Action
jQuery(function () {
	jQuery(window).scroll(function () {
		jQuery('header,.logo_header').each(function () {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 100) {
				jQuery(this).addClass("action");
			} else {
				jQuery(this).removeClass("action");
			}
		});
	});
});

// Current
jQuery(function(){
  var pageURL = location.pathname,
  pageURLArr = pageURL.split('/'),
  pageURLArrCategory = pageURLArr[1];
  jQuery('nav a,ul a').each(function (i, v) {
    var selfhref = jQuery(v).attr('href'),
      hrefArr = selfhref.split('/'),
      hrefArrCategory = hrefArr[1];
    if (pageURLArrCategory === hrefArrCategory) {
      jQuery(v).addClass('active');
		jQuery('nav a.non').removeClass("active");		
    }
  });
});
jQuery(function(){
	jQuery("nav li:has(a.active)").addClass("active");
});

jQuery(function(){
  jQuery('nav.cat .active').removeClass('active');
  jQuery('nav.cat a').filter(function(){return jQuery(this).prop('href')==location.href;}).addClass('active');
});

// Single Active remove
jQuery(function(){
	jQuery(".single #subcate a.active").removeClass("active");
});

// Category Current
jQuery(function(){
	jQuery('.category #subcate li.active,.category #subcate a.active,.archive #subcate li.active,.archive #subcate a.active').removeClass('active');
	jQuery('.category #subcate a,.archive #subcate a').filter(function(){return jQuery(this).prop('href')==location.href;}).addClass('active');
});

// Category Current
jQuery(function(){
	jQuery('.home li.active,.home a.active').removeClass('active');
});

// Page Moving Ready Text
jQuery(function(){
setTimeout(function() {
jQuery('.readytext').each(function(){
		jQuery('.readytext').children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        jQuery(this).replaceWith(jQuery(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
		jQuery(this).css({'opacity':1});
        for (var i = 0; i <= jQuery(this).children('span').length; i++) {
						jQuery(this).children('span').eq(i).delay(100*i).animate({'opacity':1},150);
				}
});		
}, 1000);
});

// Scroll Text Tachiage
jQuery(function () {
  jQuery(window).scroll(function () {
    jQuery('.tachiage').each(function () {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        jQuery(this).addClass('onpage bottomUp');
      } else {
        jQuery(this).removeClass('bottomUp');
      }
    });
  });
});

// Scroll Text fadein
jQuery(function(){
jQuery(window).scroll(function (){
jQuery('.onetext').each(function(){
var elemPos = jQuery(this).offset().top;
var scroll = jQuery(window).scrollTop();
var windowHeight = jQuery(window).height();
	if (scroll > elemPos - windowHeight + 100){
		jQuery('.onetext').children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        jQuery(this).replaceWith(jQuery(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
		jQuery(this).css({'opacity':1});
        for (var i = 0; i <= jQuery(this).children('span').length; i++) {
        jQuery(this).children('span').eq(i).delay(100*i).animate({'opacity':1},150);
				}
	}
});
});
});

// Scroll Text Ichigyo fadein
jQuery(function(){
jQuery(window).scroll(function (){
jQuery('.ichigyo').each(function(){
var elemPos = jQuery(this).offset().top;
var scroll = jQuery(window).scrollTop();
var windowHeight = jQuery(window).height();
	if (scroll > elemPos - windowHeight + 100){
		jQuery(this).css({'opacity':1});
        for (var i = 0; i <= jQuery(this).children('p').length; i++) {
        jQuery(this).children('p').eq(i).delay(300*i).animate({'opacity':1},200);
				}
	}
});
});
});

// Scroll Timeline
function ScrollTimelineAnime(){
	jQuery('#service.c_box,#strength .c_box').each(function(){
		var elemPos = jQuery(this).offset().top;
		var scroll = jQuery(window).scrollTop();
		var windowHeight = jQuery(window).height();
		var startPoint = 300;
		if (scroll >= elemPos - windowHeight-startPoint){
			var H = jQuery(this).outerHeight(true)
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;
			if(percent  > 100){
				percent  = 100;
			}
			jQuery(this).children('.border-line').css({
				height: percent + "%",
			});
		} 
		if (scroll > elemPos - windowHeight + 400) {
			jQuery(this).addClass('is-inview');
		}
		else {
			jQuery(this).removeClass('is-inview');
		}
	});
	
	jQuery('.about section.c_box').each(function(){
		var elemPos = jQuery(this).offset().top;
		var scroll = jQuery(window).scrollTop();
		var windowHeight = jQuery(window).height();
		var startPoint = 0;
		if (scroll >= elemPos - windowHeight-startPoint){
			var H = jQuery(this).outerHeight(true)
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;
			if(percent  > 100){
				percent  = 100;
			}
			jQuery(this).children('.bg_hex').css({
				transform : 'translateY(' + percent + 'vh)'
			});
		} 
		if (scroll > elemPos - windowHeight + 100) {
			jQuery(this).addClass('is-inview');
		}
		else {
			jQuery(this).removeClass('is-inview');
		}
	});
	
	jQuery('.career section.c_box').each(function(){
		var elemPos = jQuery(this).offset().top;
		var scroll = jQuery(window).scrollTop();
		var windowHeight = jQuery(window).height();
		var startPoint = 0;
		if (scroll >= elemPos - windowHeight-startPoint){
			var H = jQuery(this).outerHeight(true)
			var percent = (scroll+startPoint - elemPos) / (H/2) *100;
			if(percent  > 100){
				percent  = 100;
			}
			jQuery(this).children('.bg_ball').css({
				transform : 'translateY(' + percent + 'vh)'
			});
		} 
		if (scroll > elemPos - windowHeight + 100) {
			jQuery(this).addClass('is-inview');
		}
		else {
			jQuery(this).removeClass('is-inview');
		}
	});
}
jQuery(window).on('scroll', function(){
	ScrollTimelineAnime();
});

// Flow chart
jQuery(function () {
  jQuery(window).scroll(function () {
    jQuery('.flow_box').each(function () {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        jQuery(this).addClass('is-inview');
      }
    });
  });
});

// Fixin
jQuery(window).on('load', function () {
	jQuery('.fixin').css("opacity", "0");
});
jQuery(function () {
  jQuery(window).scroll(function () {
    jQuery('.fixin').each(function () {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        jQuery(this).addClass('onpage');
        jQuery(this).css("opacity", "1");
      } else {
        jQuery(this).css("opacity", "0");
      }
    });
  });
});

// UP
jQuery(window).on('load', function () {
	jQuery('.up').css("opacity", "0");
	jQuery('.up').css({
		"transform": "translateY(100%)"
	});
});
jQuery(function () {
  jQuery(window).scroll(function () {
    jQuery('.up').each(function () {
      var elemPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        jQuery(this).addClass('onpage slideup');
        jQuery(this).css("opacity", "1");
        jQuery(this).css({
          "transform": "translateY(0%)"
        });
      } else {
        jQuery(this).removeClass('slideup');
        jQuery(this).css("opacity", "0");
        jQuery(this).css({
          "transform": "translateY(100%)"
        });
      }
    });
  });
});

// Subnavi
jQuery(function(){
	jQuery('header nav li.have').hover(function(){
		jQuery(this).toggleClass('opened');
		jQuery(this).children('.subnavi').stop().slideToggle();
  });
});

// Toggle
jQuery(function(){
    jQuery('.togglebox').wrap('<div class="togglebox-wrap">');
    jQuery('.togglebox-wrap').css({
      'overflow': 'hidden',
      'height': 0,
      'transition': 'height 1s ease-in-out'
    });
    jQuery('.toggleswitch').on('click',function(){
      if(jQuery(this).hasClass('toggle-open')){
        jQuery(this).next('.togglebox-wrap').css('height','0');
        jQuery(this).next('.togglebox-wrap').removeClass('open');
        jQuery(this).removeClass('toggle-open');
      }else{
        var target_height = jQuery(this).next('.togglebox-wrap').children('.togglebox').outerHeight();
        jQuery(this).next('.togglebox-wrap').css('height',target_height);
        jQuery(this).next('.togglebox-wrap').addClass('open');
        jQuery(this).addClass('toggle-open');
      }
    });
});

// Subcate Select
jQuery(function(){
	jQuery('.selectbox .subcate:first-child .toggleswitch').on('click',function(){
		jQuery('.selectbox .subcate:last-child .toggleswitch').removeClass('toggle-open');
        jQuery('.selectbox .subcate:last-child .toggleswitch').next('.togglebox-wrap').css('height','0');
        jQuery('.selectbox .subcate:last-child .toggleswitch').next('.togglebox-wrap').removeClass('open');
    });
	jQuery('.selectbox .subcate:last-child .toggleswitch').on('click',function(){
		jQuery('.selectbox .subcate:first-child .toggleswitch').removeClass('toggle-open');
        jQuery('.selectbox .subcate:first-child .toggleswitch').next('.togglebox-wrap').css('height','0');
        jQuery('.selectbox .subcate:first-child .toggleswitch').next('.togglebox-wrap').removeClass('open');
    });
});

// Career Img Size
jQuery(window).on('load', function () {
	jQuery('img.strength_img').each(function(){
        var img_height = jQuery(this).height();
        var img_width  = jQuery(this).width();
        var img = new Image();
        img.src = jQuery(this).attr('src');
        if((img_width / img_height) >= 1){
					jQuery(this).addClass("hrzntl");
        }else{
					jQuery(this).addClass("vrtcl");
				}
    });
});

// Modal scroll fixed
jQuery(function () {
	// 変数に要素を入れる
	var open = jQuery('.modal-open'),
			close = jQuery('.modal-close'),
			smooth = jQuery('.modal-content a.smooth'),
			container = jQuery('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		jQuery(".modal-open").addClass('action');
		jQuery("html").addClass("nonscroll");
		jQuery("body").addClass("fixed");
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
		jQuery(".modal-open").removeClass('action');
		var current_scrollY = jQuery(window).scrollTop();
		jQuery("html").removeClass("nonscroll");
		jQuery("body").removeClass("fixed");
		jQuery("body").prop({
			scrollTop: current_scrollY
		});
	});
	
	//Smoothメニューをクリックしたらモーダルを閉じる
	smooth.on('click',function(){	
		container.removeClass('active');
		jQuery(".modal-open").removeClass('action');
		var current_scrollY = jQuery(window).scrollTop();
		jQuery("html").removeClass("nonscroll");
		jQuery("body").removeClass("fixed");
		jQuery("body").prop({
			scrollTop: current_scrollY
		});
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	jQuery(document).on('click',function(e) {
		if(!jQuery(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		jQuery(".modal-open").removeClass('action');
		var current_scrollY = jQuery(window).scrollTop();
		jQuery("html").removeClass("nonscroll");
		jQuery("body").removeClass("fixed");
		jQuery("body").prop({
			scrollTop: current_scrollY
		});
		}
	});
	
});

// Smooth Scroll & Anchor Scroll
jQuery(document).ready(function(){
  var urlHash = location.hash;
  if(urlHash) {
    jQuery('body,html').stop().scrollTop(0);
    setTimeout(function () {
      scrollToAnker(urlHash) ;
    }, 800);
  }

  jQuery('a[href^="#"].smooth').click(function() {
    var href= jQuery(this).attr("href");
    var hash = href == "#" || href == "" ? 'html' : href;
    scrollToAnker(hash);
    return false;
  });

  function scrollToAnker(hash) {
    var target = jQuery(hash);
		var headH = 100;
    var position = target.offset().top - headH;
    jQuery('body,html').stop().animate({scrollTop:position}, 800);
  }
});

// Mouse Stalker
jQuery(function(){
    // マウスストーカー関連の要素（任意で変更してください）
    var mouseStalker = "#stkr";           // マウスストーカーになる要素を指定
    var mouseTarget = ".stkr-target";     // リンクなどアクションを付けたい要素を指定
    var mouseStalkerArea = "#wrapper";        // マウスストーカーが機能する要素を指定

    // 処理で使う変数たち
    var stkrSize = parseInt($(mouseStalker).css("width").replace(/px/, ""));
    var stkrPosX = parseInt($(mouseStalker).css("left").replace(/px/, ""));
    var stkrPosY = parseInt($(mouseStalker).css("top").replace(/px/, ""));
    var cssPosAjust = stkrPosX + (stkrSize / 2);
    var scale = 2;

    // 追従用の処理
    $(mouseStalkerArea).hover(function(){
      $(mouseStalkerArea).mousemove(function(e){
        var x = e.clientX - cssPosAjust;
        var y = e.clientY - cssPosAjust;
        $(mouseStalker).css({
          "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
        });
      });
    });

    // リンクホバーの処理
    $(mouseTarget).hover(function(e){
      scale = 1;
      var x = e.clientX - cssPosAjust;
      var y = e.clientY - cssPosAjust;
      $(mouseStalker).css({
        "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
      }).addClass('hovercolor');
    }, function(e){
      scale = 2;
      var x = e.clientX - cssPosAjust;
      var y = e.clientY - cssPosAjust;
      $(mouseStalker).css({
        "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
      }).removeClass('hovercolor');
    });
});

jQuery('.pNum-target').hover(
  function (){
		jQuery(this).children('.p_num').addClass('hoverscale');
  },
  function () {
		jQuery(this).children('.p_num').removeClass('hoverscale');
  }
);

// Responsive
jQuery(window).on('load resize', function(){
var windowWidth = jQuery(window).width();
var windowSm = 640;
var windowTm = 999;
var windowPc = 1024;
if (windowWidth <= windowSm) {//SP
	jQuery('body').addClass('underSm');
	jQuery('body').removeClass('underPc');
	jQuery('body').removeClass('underTm');
	jQuery('body').removeClass('orverPc');
	// action code
} else if (windowWidth <= windowTm) {//iPad
	jQuery('body').addClass('underTm');
	jQuery('body').removeClass('underSm');
	jQuery('body').removeClass('underPc');
	jQuery('body').removeClass('orverPc');
} else if (windowWidth <= windowPc) {//iPadPro
	jQuery('body').addClass('underPc');
	jQuery('body').removeClass('underSm');
	jQuery('body').removeClass('underTm');
	jQuery('body').removeClass('orverPc');
} else {//PC
	jQuery('body').addClass('orverPc');
	jQuery('body').removeClass('underSm');
	jQuery('body').removeClass('underTm');
	jQuery('body').removeClass('underPc');
}
});

//landscape
jQuery(window).on('load resize', function(){
var windowWidth = jQuery(window).width();
var windowHeight = jQuery(window).height();
if (windowWidth > windowHeight) {
	jQuery('body').addClass('landscape');
} else if (windowWidth < windowHeight) {
	jQuery('body').removeClass('landscape');
}
});

// iOS13〜対策：macintosh 有無での分岐
var ua = window.navigator.userAgent.toLowerCase();
if(ua.indexOf('ipad') > -1 
  || ua.indexOf('macintosh') > -1 && 'ontouchend' in document){
	jQuery('body').addClass('ipad');
}else{
	jQuery('body').removeClass('ipad');
}

// #top hight
jQuery(window).on('load resize', function(){
	var windowHeight = jQuery(window).height();
	var headHeight = windowHeight * 0.382;
	var topHeight = windowHeight * 0.618;
//	jQuery('.ipad.landscape header, .ipad.landscape section#data, .ipad.underPc header, .ipad.underPc section#data').css('height',headHeight);
	jQuery('.ipad.landscape section#top, .ipad.landscape .modal-window, .ipad.underPc section#top, .ipad.underPc .modal-window').css('height',topHeight);
});

// Sticky AddClass
jQuery(document).ready(function(){
var myIntersectionFunc = function(entries){
	entries.forEach(entry =>  {
		var target = jQuery(entry.target);
		if(entry.isIntersecting){
			if( entry.target.id == "intersection-observer-dummy"){
				jQuery('.sticky').removeClass('sticky-on');
			}
		}else{
			if( entry.target.id == "intersection-observer-dummy"){
				jQuery('.sticky').addClass('sticky-on');
			}
		}
	});
}
});

// Tab Hober
jQuery(function(){
  jQuery('.tab-label').mouseover(function(){
    jQuery(this).addClass('on');
    jQuery(this).removeClass('off');
  });
  jQuery('.tab-label').mouseout(function(){
    jQuery(this).removeClass('on');
    jQuery(this).addClass('off');
  });
});
