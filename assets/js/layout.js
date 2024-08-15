// 헤더 스크롤 이벤트
let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    headerH = $('#header').height();

    if (curr > headerH) {
        $('#header').addClass('fix');

        if (curr > lastScroll) {
            $('#header').removeClass('show');
        } else {
            $('#header').addClass('show');
        };
    } else if (curr === 0) {
        $('#header').removeClass('fix');
        $('#header').removeClass('show');
    };

    lastScroll = curr;
});

// 메인메뉴 슬라이드
memuReset();
$('#header .main-item').hover(function(){
    if ($(this).find('.sub-list').length) {
        $('#header').addClass('hover');
    }

    $(this).addClass('on');

    $(this).find('.sub-list').addClass('show')
},function(){
    $('#header').removeClass('hover');

    $('#header .main-item').removeClass('on');

    $(this).find('.sub-list').removeClass('show')

    memuReset()
});

$('#header .sub-list .sub-item').hover(function() {
    $(this).siblings().find('a').removeClass('on');
    $(this).find('a').addClass('on');
});

function memuReset() {
    $('#header .sub-list .sub-item a').removeClass('on');
    $('#header .sub-list .sub-item:first-child a').addClass('on');
};

// 모바일 메뉴
$('#header .btn-menu').click(function(){
    $('html').addClass('hidden');
    $('#header .side-nav').addClass('on');
});

$('#header .side-nav .group-header').click(function(){
    $('html').removeClass('hidden');
    $('#header .side-nav').removeClass('on');
});

// 모바일 슬라이드 메뉴
$('#header .side-nav .gnb .main-item .btn-sub').click(function(){
    $(this).toggleClass('active').parent().siblings('.sub-list').stop().slideToggle();
});

// 사이트 클릭 이벤트
$('.site-link .btn-site').click(function() {
    $('.site-link .site-list').toggleClass('active');
    
    $(this).toggleClass('on');
});