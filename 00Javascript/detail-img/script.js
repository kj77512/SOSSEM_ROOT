/***
 * 1. 상세설명보기 버튼을 클릭한다.
 *      1-1. 상세설명보기 버튼이 click 이라는 동작을 할 수 있도록 명령을 부여
 *      1-2. 명령을 줄려면 상세설명보기 버튼의 정보를 가지고 있어야 한다
 * 2. 클릭을 하면 상세설명 div가 보여야 한다
 */

//1. 상세설명보기 버튼의 정보를 가지고 와야 한다.
const elemOpen = document.querySelector('button.open');
// 상세설명 div의 정보를 가지고 온다.
const elemDetail = document.querySelector('.detail');
//3. onOpenClick 함수 생성
const onOpenClick = () => {
    //click 이벤트가 발생이 되는 실행되야 하는 기능을 묶어 놓은 함수
    console.log( "상세설명보기 click");
    /***
     * 1. div.detail 인 요소가 보여지도록 한다.
     *      1-1. 현재는 display : none
     *      1-2. div.detail 의 display : block 으로 변경
     * 2. button.open 사라지도록 한다.
     *      2-1. 현재는 display : block
     *      2-2. 안보이게 하려면 ? display : none;
     */
    // console.dir(elemDetail);
    elemDetail.style.display = 'block';
    elemOpen.style.display = "none";
}
//2. 'click 이벤트 등록'
elemOpen.addEventListener('click',onOpenClick);
