function multiplication_table(n1,n2 = 10,n3)
{
    console.log(n1,n2,n3);
    for(let i = 1 ; i <= 9 ; i ++)
    {
        result = n1 * i;
        console.log(`${n1} x ${i} = ${result}`);
    }
}
multiplication_table(2);

function sum(n1,n2)
{
    return n1+n2;
}
console.log(sum(10,10));


function SUM()
{
    //안에 let a = 10;이면 당연하지만 여기 변수인지라 사용 안 됌
    var A = 100;
    console.log(`함수 내부에서 A 참조 : ${A}`);
}
SUM();
console.log(`${A}`);
{
    //신기하게도 var을 쓴다면 외부에서도 지역 변수처럼 사용 가능 함수에선 안 됌s
    var A  = 0;
}
console.log(A);

console.log(num);
var num = 10;

printing();
function printing()
{
    console.log("actually it working");
}