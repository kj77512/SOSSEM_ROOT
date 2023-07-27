/***
 * Object : 객체
 * 파이썬(리스트) - 배열(객체)
 */

// let arr = ["사과","딸기","배","오렌지"];
// console.log( arr[2] );
// console.log( arr.length );
// for( let i=0 ; i<arr.length ; i++ ){
//     console.log( arr[i] );
// }

/***
 * 1부터 10까지를 배열에 저장하고 출력
 * 출력
 * arr = [1,2,3,4,5,6,7,8,9,10]
 */
// let arr = [];
// for( let i=0 ; i<10 ; i++ ){
//     arr[i] = i+1;
// }
// console.log( arr );

/***
 * 10부터 100까지를 배열에 저장하고 출력
 * 출력
 * arr = [10,20,30,40,50,60,70,80,90,100]
 * rev = [100,90,80,70,60,50,40,30,20,10]
 */
// const arr = [];
// const rev = [];
// for( let i=0; i<10 ; i++ ){
//     arr[i] = (i*10)+10;
// }
// for( let j=0 ; j<arr.length ; j++ ){
//     rev[j] = arr[ (arr.length-1)-j ]
// }
// console.log( rev );


// const a = [1,2,3,4,5];
// // a = [1,2,3];/
// a[0] = 9;
// console.log( a );

const arrOfarr = [ [1,2,3],'aaa',true];
arrOfarr[3] = 5000;
arrOfarr[arrOfarr.length] = '끝';
arrOfarr.push('진짜끝');
let a = arrOfarr.pop();
arrOfarr.unshift('처음');
arrOfarr.shift();
console.log( arrOfarr );
let data = arrOfarr.splice(1,0,"추가1","추가2","추가3");
console.log( data );
console.log( arrOfarr );
let idx = arrOfarr.indexOf('추가6');
console.log( idx );
let temp = arrOfarr.includes( '추가6');
console.log( temp );
