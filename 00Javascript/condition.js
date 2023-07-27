/***
 * if (조건문) { } else { }
 * if (조건문) { } else if (조건문) { }
 */

// const score = 75;
// if( score >= 90 ){
//     console.log( "A" );
// } else if( score >= 80 ){
//     console.log( "B" );
// } else if( score >= 70 ){
//     console.log( "C" );
// } else if( score >= 60 ){
//     console.log( "D" );
// } else{
//     console.log( "F" );
// }
// if( score >= 90 ){
//     console.log( "A" );
// } else if( score < 90 && score >= 80 ){
//     console.log( "B" );
// } else if( score < 80 && score >= 70 ){
//     console.log( "C" );
// } else if( score < 70 && score >= 60 ){
//     console.log( "D" );
// } else{
//     console.log( "F" );
// }

// if( true ){
//     console.log( "참입니다");
//     if( false ) {
//         console.log( "참입니다");
//     } else {
//         console.log( "거짓입니다");
//     }
// }

/***
 * 조건문
 *  if ~ else if ~ else
 * switch~case 문
 * switch (조건식) {
 *      case 비교조건식 :
 *          실행문;
 * }
 */

/***
 * 입력값 : 사과, 바나나, 딸기 -> 과일
 * 입력값 : 토마토 -> 채소
 * 그 이외 값은 : 다시 입력하세요
 */
// let value = "바나나";
// if( value === "사과" ){
//     console.log( "과일입니다");
// } else if( value === "바나나" ){
//     console.log( "과일입니다");
// } else if( value === "딸기" ){
//     console.log( "과일입니다");
// } else if( value === "토마토" ){
//     console.log( "채소입니다");
// } else {
//     console.log( "다시 입력하세요" );
// }
let value = "바나나";
// switch(value) {
//     case "바나나" :
//         console.log( "과일입니다" );
//         break;
//     case "사과" :
//         console.log( "과일입니다" );
//         break;
//     case "딸기" :
//         console.log( "과일입니다");
//         break;
//     case "토마토" :
//         console.log( "채소입니다.");
//         break;
//     default :
//         console.log( "다시 입력하세요");
//         break;
// }
// switch(value) {
//     case "바나나" :
//     case "사과" :
//     case "딸기" :
//         console.log( "과일입니다");
//         break;
//     case "토마토" :
//         console.log( "채소입니다.");
//         break;
//     default :
//         console.log( "다시 입력하세요");
//         break;
// }

/***
 * 조건연산자(3항연산자)
 * (조건) ? 참 : 거짓;
 */

let data = (6 > 4) ? "참입니다" : "거짓입니다";
console.log( data );