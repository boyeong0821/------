// 비주얼 슬라이드
const visualSlide = new Swiper('.sc-visual .swiper',{
    autoplay: {
        delay: 5000
    },

    loop: true,

    pagination:{
        el: ".pagination",
    }
});

// 스토리 슬라이드
const storySlide = new Swiper('.sc-story .swiper',{
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },

    speed: 2000,

    loop: true,

    slidesPerView: "auto",
    spaceBetween: 16
});

// 동영상 재생정지버튼
const video = $('.sc-service video').get(0)

$('.sc-service .btn-play').click(function() {
    video.currentTime = 0;

    video.play();

    $(this).hide();
    $('.sc-service .btn-stop').show();
});

$('.sc-service .btn-stop').click(function() {
    video.pause();

    $(this).hide();
    $('.sc-service .btn-play').show();
});