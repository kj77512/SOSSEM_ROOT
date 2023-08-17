//변수 정의
// const MAX_USER = Number( prompt("몇명이 참가하나요?") );
const MAX_USER = 3;
const arrHistory = [];

//객체 정의
const elemInput = document.querySelector('input');
const elemBtn = document.querySelector('button');
const elemWord = document.querySelector('.word');
const elemHistory = document.querySelector('.history');
const elemOrder = document.querySelector('.order');
//함수 정의
//history를 추가해 주는 함수
const addStrHistory = (str) => {
    arrHistory.push(str);
    let view = '';
    arrHistory.forEach( (value) => {
        view += value + '->';
    } );
    elemHistory.textContent = view;
}
//order를 변경해 주는 함수 
const changeOrder = () => {
    let idx = Number(elemOrder.textContent);
    if( idx+1 > MAX_USER ){
        elemOrder.textContent = 1;
    } else {
        elemOrder.textContent = idx+1;
    }
}
const onClickBtn = () => {
    //1. input의 value 값을 먼저 읽어오기
    let strInput = elemInput.value;
    if( strInput ){
        //제시어 옆에 있는 단어의 끝 문자와 지금 입력된 단어의 첫문자가 같은지 확인
        let strWord = elemWord.textContent;
        if( !strWord || strWord[strWord.length-1] === strInput[0] ){
            //끝말잇기가 가능
            //글씨가 있는 경우 : 제시어 옆에 표시
            elemWord.textContent = strInput;  
            //history도 남겨져야 한다.
            addStrHistory(strInput);
            //order 숫자 변경
            changeOrder();
        } else {
            alert("올바르지 않은 단어입니다");
        }              
    } else {
        //글씨가 없는 경우 경고창을 띄운다
        alert("올바르지 않은 단어입니다");
    }
    //입력되고 난 다음에는 입력값 삭제
    elemInput.value = '';
    //입력값이 삭제되고 다시 깜빡이게 함
    elemInput.focus();
}
const init = () => {
    console.log("바로 시작");
    elemInput.focus();
    elemBtn.addEventListener('click',onClickBtn);
}

//처음시작
init();