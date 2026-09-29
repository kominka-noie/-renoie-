// JavaScript Document

// Slick
jQuery('.fade').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 1000,
	autoplaySpeed: 5000,
  fade: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  cssEase: 'linear',
  arrows: true,
	prevArrow: '<div class="prev notxt motion">PREV</div>',
	nextArrow: '<div class="next notxt motion">NEXT</div>'
});
jQuery(function(){
  jQuery(".fade button");
});

jQuery('.carousel').slick({
  dots: false,
  centerMode: false,
  centerPadding: '0px',
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  infinite:true,
  variableWidth: true,
  touchThreshold: 15,
  arrows: true,
	prevArrow: '<div class="prev notxt motion">PREV</div>',
	nextArrow: '<div class="next notxt motion">NEXT</div>'
	});
jQuery(function(){
  jQuery(".carousel button");
});

jQuery('.hslide').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	centerMode: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  arrows: true,
  infinite:true,
  variableWidth: true,
  touchThreshold: 15
});

jQuery('.hslide-rtl').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	centerMode: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  arrows: true,
  infinite:true,
  variableWidth: true,
  touchThreshold: 15,
	rtl: true
});

jQuery('.hslide-cntr').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	centerMode: true,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  arrows: false,
  infinite:true,
  variableWidth: true,
  touchThreshold: 15
});