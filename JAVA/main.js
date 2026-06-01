var num = 10 + 20;
var num = 50;
console.log(num);
let Num = 10;
/*let Num = 20; let은 위처럼 겹치지 않게 함. 겹치면 오류 날림*/
console.log(Num);

console.log(A);
/*let A = 0; 이렇게 하면 A는 undefined가 안 나오고 에러가 뜸*/
var A = 0;

const B = 20;
/*B = 20; const는 재할당 불가능함*/
console.log(B);

let str = "Hello";
let str1 = 'Hello';
console.log(str,str1);

// let str2 = '문자열은 큰따옴표(") 또는 작은 따옴표로(' + "'') 정의합니다.';
let str2 = '문자열은 큰따옴표("") 또는 작은따옴표로(\'\') 정의합니다.'
let str3 = `문자열은 큰따옴표(") 또는 작은따옴표로(') 정의합니다.`
console.log(str2);
console.log(str3);

const msg = '문자열';
let str4 = `${msg}입니다.`;/*문자열 안에 변수 넣으려면 `이거 써야 함 '이거나 "이거 아니고 1키보드 왼쪽꺼*/
let str5 = '${msg}입니다.';

console.log(str4);

console.log(str5);

const C = 0.1 + 0.2;
console.log(C);
const D = ((0.1 * 10) + (0.2 * 10)) / 10;
console.log(D);

const b = C > D;/*bool*/
console.log(`${C} > ${D} = ${b}`);

let N = null;
console.log(N);

let n = [10,20,'a','40']

console.log(n); console.log(n[0]);