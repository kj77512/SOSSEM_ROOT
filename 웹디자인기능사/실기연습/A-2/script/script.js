$(function(){
    //source 추가
    /*** header menu */
    $('.gnb > ul').mouseenter(function(){
        $('.sub-menu').slideDown();
    });
    $('.gnb > ul').mouseleave(function(){
        $('.sub-menu').slideUp();
    });

    /*** image slide */
    setInterval(function(){
        $('.slideWrap').animate({'margin-top':'-300px'},function(){
            $('.item:first').appendTo('.slideWrap');
            $('.slideWrap').css({'margin-top':'0'});
        })
      },3000);

      /*** popupBox show */
      $('.notice > ul > li:first').click(function(){
        $('.popupBox').show();
      });
      $('.popup > button').click(function(){
        $('.popupBox').hide();
      });
})

