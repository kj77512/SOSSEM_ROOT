//객체 가져오기
const elemSmall = document.querySelectorAll('.small>img');
const elemBig = document.querySelector('.img-wrap>img');
const elemPrev = document.querySelector('button:nth-of-type(1)');
const elemNext = document.querySelector('button:nth-of-type(2)');
//변수선언
let imgIndex = 1;

//이벤트 함수 선언
const showSmallBorder = (obj) => {
    //전체 small img 테두리 제거
    for( let i=0 ; i<elemSmall.length ; i++ ){
        elemSmall[i].style.outline = '';
    }
    //작은 이미지 테두리 만들기
    obj.style.outline = '2px solid blue';
}
const onClickSmall = (event) => {
    //테두리 만들기
    // showSmallBorder(event.target);
    // let path = event.target.getAttribute('src');
    // elemBig.setAttribute('src',path);    
    btnImgChange(event.target);
}
const btnImgChange = (obj) => {
    showSmallBorder(obj);
    let path = obj.getAttribute('src');
    elemBig.setAttribute('src',path);    
}

//이벤트 등록
for( let i=0 ; i<elemSmall.length ; i++ ){
    elemSmall[i].addEventListener('click',onClickSmall);
}
elemPrev.addEventListener('click',()=>{
    imgIndex--;
    if( imgIndex <= 1 ){
        imgIndex = 1;
    }
    btnImgChange(elemSmall[imgIndex-1]);
});
elemNext.addEventListener('click',()=>{
    imgIndex++;
    if( imgIndex >= elemSmall.length ) {
        imgIndex = elemSmall.length;                
    }
    btnImgChange(elemSmall[imgIndex-1]);
});