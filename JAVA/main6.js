let str = 'abc';
console.log(str.length);
if(str.includes('abc')) console.log('includes(\'str\')');
str = str.replace('abc','Hello hello Hello');
console.log(str);
str = str.replace('Hello','hi');
console.log(str);
str = str.replace('hi','Hello'); str = str.replaceAll('Hello','hi');
console.log(str);
if(str.indexOf('HI') == -1) console.log("there's no HI");
str = "    hi    ";
str = str.trim();
console.log(str);
str = str.toUpperCase();
if(str.indexOf('HI') == -1) console.log("there's no HI");
else console.log('There\'s now HI');
str = "Hello,Hi,hello,hi";
str = str.split(",");
console.log(str);

let arr = [1,2,3];
console.log(arr, "push 4");
arr.push(4);
console.log(arr, "pop");
console.log(`arr.pop() = ${arr.pop()}`);
console.log(arr, "unshift 0");
arr.unshift(0);
console.log(arr, "shift");
console.log(`arr.shift() = ${arr.shift()}`);
console.log(`arr.reverse() = ${arr.reverse()}`);
arr.reverse();
console.log(`arr.sort() = ${arr.sort()}`);
arr = ['a','b','c','d','e'];
console.log(`new arr = ${arr} and gonna forEach`);
arr.forEach((i,j) =>{console.log(`${j}번째 값 = ${i}`);});
console.log(arr,"gonna filter");
arr = arr.filter((_,index) => index % 2 == 0);//element[,index[,array]])[,thisArg])있는데 알아서 찾기;
//arr = arr.filter(cn => cn % 2 === 1); 보통은 이렇게
console.log(arr);
arr = ["###" , "is" , "name" , "my" , "Hello"];
console.log(`new arr = ${arr.reverse()} and gonna find ${arr[4]}`);
name = arr.find(a => a == "###");
console.log(name, `is at ${arr.findIndex(a => a == "###")}`);
if(arr.includes("name")) console.log(`arr includes ${arr.find(a => a == "name")}`);
for(let a in arr)
{
    console.log(a);
}
console.log(arr.join(" ehm "));

let time = new Date();
console.log(time);

let math = 5.5;
console.log(`Math.floor(math) = ${Math.floor(math)} and Math.ceil() = ${Math.ceil(math)} lastly Math.round(math) = ${Math.round(math)}`);
console.log(`Math.floor(Math.random() * 99) + 1 = ${Math.floor(Math.random() * 99 ) + 1}`);

let array = [10,120,30,50,20];
let n1 = 0;
for(let i = 0 ; i < 5 ; i ++)
{
    if(array[i] > n1) n1 = array[i];
}
console.log(n1);
array = array.reverse();
let n2 = 0;
array = array.sort((a,b) => a - b); n2 = array[4]; console.log(n2);