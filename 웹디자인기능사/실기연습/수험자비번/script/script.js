$(function(){
    /*** header menu */
    $('li.main-menu').mouseenter(function(){
        $('ul.sub-menu').stop().slideDown();
    });
    $('li.main-menu').mouseleave(function(){
        $('ul.sub-menu').stop().slideUp();
    });
})
