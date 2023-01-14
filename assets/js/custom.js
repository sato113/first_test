$(document).ready(function(){
    //ページ内リンクのスムーススクロール
    $('a[href^="#"]').click(function(){
        const speed = 500;
        const href =$(this).attr("href");
        const target = $(href === "#" || href === "" ? 'html' : href);
        const position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

     //ページトップスクロール
    const pagetop = $('.page_top');
     // ボタン非表示
        pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});