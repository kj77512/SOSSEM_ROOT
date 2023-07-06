$(function(){
    /*** header menu */
    $('li.main-menu').mouseenter(function(){
        $('ul.sub-menu').stop().slideDown();
    });
    $('li.main-menu').mouseleave(function(){
        $('ul.sub-menu').stop().slideUp();
    });

    /*** slide*/
    setInterval(function(){
        $('.slide-wrap').animate(
            {'marginLeft':'-100%'},function(){
                $('.item:first').appendTo('.slide-wrap');
                $('.slide-wrap').css({'marginLeft':'0'});
            }
        );
    },3000);
})
