const elemInput = document.querySelector('input');
const elemBtn = document.querySelectorAll('button');

//
const clickBtn = () =>{
    console.log( "click" );
}
for( let i=0 ; i<elemBtn.length ; i++ ){
    elemBtn[i].addEventListener('click',clickBtn);
}