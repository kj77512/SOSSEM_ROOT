$(function(){
    /*** 동작하는 기능 */
    $('.tabMenu > li').click(function(){
        $('.tabMenu > li').removeClass('tabOn');
        $(this).addClass('tabOn');
    });
})