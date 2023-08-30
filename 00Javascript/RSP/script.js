const elemCom = document.querySelector('#com');
const elemBtn = document.querySelector("#self>div");
const elemCalc = document.querySelector("#result");
//전역변수선언
let timeID=0;  //setInterval-ID
let change=0;

const checkResult = (userIdx) => {
    let calc = Number(change) - Number(userIdx);
    if ( [-1,2].includes(calc) ){
        //사람이 이긴 경우
        console.log( "사람이 이기는 경우");
        elemCalc.textContent = "사람이 이겼습니다";
    } else if( [-2,1].includes(calc) ){
        //컴퓨터가 이기는 경우
        console.log( "컴퓨터가 이기는 경우");
        elemCalc.textContent = "컴퓨터가 이겼습니다";
    } else if( calc === 0 ) {
        //무승부
        console.log( "무승부" );
        elemCalc.textContent = "무승부 입니다";
    } 
}
const onClickBtn = (event) => {
    // console.dir( event.target.dataset.index );
    let idx = event.target.dataset.index;
    const elemSelf = document.querySelector("#self");
    elemSelf.style.backgroundPosition = `${idx*(-220)}px`;
    //인터벌을 종료
    clearInterval(timeID);
    checkResult(idx);
}

const handlerChange = () => {
    //타이머 핸들러
    // console.log( "타이머" );
    /*
    change++;
    if( change > 2 ){
        change = 0;
    }
    */
    change = (change >= 2) ? 0 : ++change; 
    // console.log( change );
    elemCom.style.backgroundPosition = `${change*(-220)}px`;
}

//처음 시작 함수
const init = () => {
    timeID = setInterval(handlerChange,500);
    elemBtn.addEventListener("click",onClickBtn);
}
init();