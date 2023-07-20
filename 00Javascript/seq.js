/***
 * 순차구조
 * 두 수의 덧셈과 곱셈 출력
 * 1. 두수를 정한다. 3 , 6
 * 2. 연산 : 덧셈 3+6 기억
 * 3. 출력
 * 4. 연산 : 곱셈 3*6
 * 5. 출력
 */

/***1.변수저장 */
// const a=3;
// const b=6;
// const a=3,b=6;
const a = Number(prompt("숫자를 입력하세요"));
const b = Number(prompt("숫자를 입력하세요"));
/*** 2. 연산 */
// const add = a+b;
/*** 3. 출력 */
console.log( "a+b=", a+b );
document.write( "a+b=",a+b);
document.write('<br>');
/*** 4. 연산 a*b */
// const mul = a*b;3

/*** 5. 출력 */
console.log( "a*b=", a*b );
document.write('a*b=',a*b );
/*** - , / */
document.write( 'a-b=',a-b);
document.write('a/b=',a/b);