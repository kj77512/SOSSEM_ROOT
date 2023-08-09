/***
 * 객체
 * 변수선언 = {
 *      속성이름 : 속성값;
 * }
 */
//장난감을 객체
const toyRobot = {
    productID : '123-45',
    name : 'Robot',
    price : '25,000',
    madein : 'korea',
    showInfo : function() {
        console.log( `이 장난감 이름은 ${this.name} 입니다`);
    }
}
// console.log( toyRobot.name );
// console.log( toyRobot.price );
toyRobot.price = '20,000';
toyRobot.showInfo();
// delete toyRobot.madein;
// console.log( toyRobot );