//객체 가져오기
const elemSmall = document.querySelectorAll('.small>img');
const elemBig = document.querySelector('.img-wrap>img');
//이벤트 함수 선언
const showSmallBorder = (obj) => {
    for( let i=0 ; i<elemSmall.length ; i++ ){
        elemSmall[i].style.outline = '';
    }
    //작은 이미지 테두리 만들기
    obj.style.outline = '2px solid blue';
}
const onClickSmall = (event) => {
    //테두리 만들기
    showSmallBorder(event.target);
    let path = event.target.getAttribute('src');
    elemBig.setAttribute('src',path);    
}
for( let i=0 ; i<elemSmall.length ; i++ ){
    elemSmall[i].addEventListener('click',onClickSmall);
}