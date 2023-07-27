document.write('<main>');
for( let i=2 ; i<=9 ; i++ ){
    // console.log( `*** ${i}단 출력 ***`);
    document.write('<div>');
    document.write( `<h2>${i}단</h2>` );
    for( let j=1; j<=9 ; j++ ){
        // console.log( `${i} * ${j} = ${i*j}`);
        document.write( `${i} * ${j} = ${i*j}<br>`);
    }
    document.write('</div>');
}
document.write('</main>');