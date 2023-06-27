var swiper = new Swiper(".mySwiper", {
    // 小圆点
    pagination: {
      el: ".swiper-pagination",
    },
    //自动轮播
    autoplay: {
        delay: 1000,//1秒切换一次
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
},
});