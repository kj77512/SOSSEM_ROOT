/***
 * 숫자를 입력받아 짝수/홀수 여부 체크
 * 1. 숫자를 입력받는다 -> 몇개> 1개
 *    window.prompt 를 이용 > 문자를 숫자로 변경
 * 2. 입력받은 숫자가 짝수인지 홀수 인지 체크
 *    (숫자 % 2) 값이 0과 같다면 --> 짝수
 *     그렇지 않다면 --> 홀수
 * 3. 결과를 출력
 */
//숫자를 입력
// let input = prompt("숫자를 입력하세요");
//입력받은 문자를 숫자로 변환
// let num = parseInt( input );
//조건에 의해서 홀수 짝수 판별
// if( num%2 ) {
//     //홀수
// } else {
//     //짝수
// }
let num = 6;
if( num%2 !== 0 ){
    //짝수
    console.log( "짝수입니다");
} else {
    //홀수
    console.log( "홀수입니다");
}

//두수를 설정하고 큰 수를 출력하시오
// let num1 = parseInt( prompt("1. 숫자를 입력하세요") );
// let num2 = parseInt( prompt("2. 숫자를 입력하세요") );
// let num1 = 6;
// let num2 = 9;

// if( num1 > num2 ){
//     console.log( "큰 수는 = " + num1 + "입니다" );
// } else {
//     console.log( "큰 수는 =" , num2 , "입니다" );
// }

/***
 * 숫자를 설정하여 양수, 음숙, 0일 경우를 출력하시오
 */

let num1= 0;
if( num1 > 0 ){
    console.log( "양수입니다." );
} else if( num1 < 0 ) {
    console.log( "음수입니다.");
} else{
    console.log( "0 입니다");
}

``