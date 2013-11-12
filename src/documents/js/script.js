var content = document.querySelector('.container');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('.blurredwrap');
header.appendChild(contentBlurred);

var contentWrapper = window,
translation;

contentWrapper.addEventListener('scroll',function(){
    if($(window).width() < 800) return;
    console.log('scroll');
  translation = 'translate3d(0,' + (-$(window).scrollTop() + 'px') + ',0)';
  console.log(translation);
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['transform'] = translation;
});


var nav = $("header nav");
var pos = nav.offset();

$(window).resize(function() {
$(".blurredwrap").css({
    top: pos.top,
    left: pos.left,
    height: nav.height(),
});

$(contentBlurred).css({
    top: -pos.top,
    left: -pos.left,
    width: $(window).width()
});

});

$(window).resize();
