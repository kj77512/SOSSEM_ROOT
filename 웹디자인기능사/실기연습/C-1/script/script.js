$(function(){
    /*** 동작하는 기능 */
    $('.tabMenu > li').click(function(){
        $('.tabMenu > li').removeClass('tabOn');
        $(this).addClass('tabOn');
        /*** tabItem change */
        let idx = $(this).index();
        // console.log( idx );
        $('.tabItem > ul').hide().removeClass('tabOn');
        $('.tabItem > ul').eq(idx).show().addClass('tabOn');
    });
    /*** slide */
    setInterval(function(){
        $('.slide-item:first').fadeOut(2000).next().fadeIn(2000);
        $('.slide-item:first').appendTo('.slide-wrap');
    },3000);
    /*** menu */
    $('.main-menu').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('.main-menu').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
    });
})