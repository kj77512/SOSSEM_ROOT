/***
 * function 함수명() { 
 *      //명령어 추가
 * }
 * 변수선언 = () => { 
 *      //명령어 추가
 * }
 */

// 두수를 더하는 기능을 가진 함수를 구현하여 사용한다.
/***
 * 2+3
 * 3+4
 * 4+5
 * 5+6
 * 6+7
 */

// console.log( `2+3=${2+3}`);
// console.log( `3+4=${3+4}`);
// console.log( `4+5=${4+5}`);
// console.log( `5+6=${5+6}`);
// console.log( `6+7=${6+7}`);

//함수 선언
/*
function add() {
    console.log( "add function" );
}
*/

// const add = (a,b) => {
//     // console.log( "add function" );
//     console.log( `${a} + ${b} = ${a+b}`);
// }
const add = (a) => {
    // console.log( "add function" );
    console.log( `${a} + ${a+1} = ${a+a+1}`);
}
//함수 호출
// add(2,3);
// add(3,4);
// add(4,5);
// add(5,6);
// add(6,7);

for( let i=2; i<=6 ; i++ ) {
    // add( i , i+1 );
    add(i);
}