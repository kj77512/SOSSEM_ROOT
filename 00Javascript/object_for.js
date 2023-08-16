/***
 * for .... of : 배열
 * for .... in : 객체
 */

//for .... of
let arr = ['a','b','c','d','e'];
// for( let i=0 ; i<arr.length ; i++ ){
//     console.log( arr[i] );
// }
//for ... each 메소드
arr.forEach( (value,idx)=>{
    //code
    console.log( value);
    console.log( value, idx);
} );
// for( let item of arr ){
//     console.log( item );
// }

//for in
// let obj = {
//     a : 'aaaaa',
//     b : 'bbbbb',
//     c : 'ccccc',
//     d : 'ddddd',
//     e : 'eeeee'
// }
// for( let item in obj ){
//     console.log( item );
// }