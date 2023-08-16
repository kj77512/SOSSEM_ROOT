//변수 정의
// const MAX_USER = Number( prompt("몇명이 참가하나요?") );
const MAX_USER = 3;

//객체 정의
const elemInput = document.querySelector('input');
const elemBtn = document.querySelector('button');
const elemWord = document.querySelector('.word');
//함수 정의
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