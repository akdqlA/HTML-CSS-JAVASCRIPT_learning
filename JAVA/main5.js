let person = {
    name:'HongGildong',
    age:20,
    isAdult:false,
    'phone number': '010-000-0000',
    printInfo: function(msg) {
        console.log(msg);
    }
};
console.log(person.name)
console.log(person['phone number']);
person.printInfo('hello');
person.name = 'idk';
console.log(person.name);
person.loc = 'somewhere';//const로 객체 만들어도 추가가 가능함
console.log(person.loc);

delete person.age;
console.log(person);

let n1 = 10;
let n2 = n1;
n1 = 30;
console.log(n1,n2);


const obj1 = {
    name:'철수'
};
const obj2 = obj1;

delete obj1.name;
console.log(obj1,obj2);//객체는 뭐 주소 그런 걸로 이루어져서 얕은 복사가 됌 얕은 복사는 포인터 느낌이고