/***
 * while문, do~while문
 * while(조건식) {
 *      실행문;
 * }
 */

// for( let i=1 ; i<=10 ; i++ ){
//     console.log( `i = ${i}` );
// }

// let i=1;
// while( true ){
//     console.log( `i = ${i}` );
//     i++;
//     if( i > 10 ) {
//         break;
//     }
// }

/***
 * hello 문자열을 10개를 출력
 */
// for문 활용
// for( let i=1 ; i<=10 ; i++ ) {
//     console.log( 'hello' );
// }

//while문 활용
// let i=100;
// while( i <= 10 ){
//     console.log( 'hello' );
//     i++;
// }

//do~while문
// let i=100;
// do{
//     console.log( 'hello' );
//     i++;
// } while( i<=10 )

// let i=0;
// while ( i < 10 ) {
//     i++;
//     if( i % 2 === 0 ) continue;
//     console.log( i );
// }

/***
 * 구구단 출력
 */
for( let i=2 ; i<=9 ; i++ ){
    console.log( `*** ${i}단 출력 ***`);
    for( let j=1; j<=9 ; j++ ){
        console.log( `${i} * ${j} = ${i*j}`);
    }
}