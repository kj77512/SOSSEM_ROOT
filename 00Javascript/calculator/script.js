//필요한 객체를 가지고 온다.
const elemInput = document.querySelector('input');
const elemBtn = document.querySelectorAll('button');
//변수 만들기
let strDisplay = '';

const updateDisplay = ()=> {
    elemInput.value = strDisplay;
}
const strCalc = () => {
    let value = eval(strDisplay);
    strDisplay += '=';
    strDisplay += value;
    // elemInput.value = value;
    updateDisplay();
    strDisplay = '';
}
//각 버튼의 click 이벤트가 실행되면
const onClickBtn = (event) =>{
    // console.dir( event.target );
    switch( event.target.className ){
        case 'ac' :
            //input에 입력된 수식을 모두 삭제
            strDisplay = '';
            updateDisplay();
            break;
        case 'equals' :
            //input에 입력된 수식을 계산
            strCalc();
            break;
        default :
            //input에 값을 추가해야 한다.
            strDisplay += event.target.textContent;
            updateDisplay();
            break;
    }
}
//button 객체에 click 이벤트를 등록
for( let i=0 ; i<elemBtn.length ; i++ ){
    elemBtn[i].addEventListener('click',onClickBtn);
}