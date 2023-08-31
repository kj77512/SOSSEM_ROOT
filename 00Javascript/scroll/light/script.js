//객체 가져오기
const elemBg = document.querySelectorAll('.bg');
console.log( elemBg );
const changeBgImage = (percent)=>{
    //클래스가 active 인 요소를 찾아서 삭제
    const obj = document.querySelector('.active');
    obj.classList.remove('active');
    
    //구간
    if( percent>=0 && percent<25 ){
        //sky1
        elemBg[0].classList.add('active');
    } else if( percent>=25 && percent<50 ){
        //sky2
        elemBg[1].classList.add('active');
    }else if( percent>=50 && percent<75 ){
        //sky3
        elemBg[2].classList.add('active');
    } else if( percent>=75 && percent<=100 ){
        //sky4
        elemBg[3].classList.add('active');
    }
}

const onScrollEvent = ()=>{
    const {scrollHeight , clientHeight , scrollTop} = document.documentElement;
    const realHeight = scrollHeight - clientHeight;
    const percent = Math.floor( (scrollTop/realHeight)*100 );
    changeBgImage(percent);
}
const init = ()=>{
    window.addEventListener('scroll',onScrollEvent);
}
init();