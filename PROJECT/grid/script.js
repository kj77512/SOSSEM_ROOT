//객체 선언
const elemBar = document.querySelector('nav');
const elemMenuList = document.querySelectorAll('nav>ul>li>a');
const elemIcon = document.querySelector('.menu-icon');
const elemSection = document.querySelectorAll('section');
const elemMain = document.querySelector('main');

//메뉴 별 section이 보여지도록
const viewSection = (obj) => {
    if( obj.id ) {
        //모든 section 에서 class를 삭제
        elemSection.forEach( (value) => {
            value.classList.remove('viewOn');
        });
        //선택한 메뉴의 section 이 보이도록 class=viewOn 을 추가
        elemSection[Number(obj.id)].classList.add('viewOn');
    }
}

//메뉴 리스트에서 클릭을 하면 실행되는 함수
const onClickMenu = (event) => {
    // console.log( "menu list click" );
    //menubar 에 class=menu-off 추가 되도록    
    elemBar.classList.toggle('menu-off');  
    //menu-icon 에 call=icon-on 추가 되도록  
    elemIcon.classList.toggle('icon-on');
    //main 도 class=mainOn 추가 되도록
    elemMain.classList.toggle('mainOn');
    //id에 맞는 section 이 보이도록 해준다.
    viewSection(event.target);
}
const init = () => {
    //처음 시작 함수
    elemMenuList.forEach( (value) =>{
        value.addEventListener('click',onClickMenu );
    } );
    elemIcon.addEventListener('click',onClickMenu);
}
init();