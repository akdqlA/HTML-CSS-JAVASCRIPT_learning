let num = 1;
if(num % 2 == 0)
{
    if(num == 2)
        console.log('num은 2입니다.');
    else
        console.log('num은 짝수입니다.');
}else if(num % 3 == 0){
    console.log('num은 홀수입니다.');
}else{
    console.log('num은 1입니다.');
}

let food = 'melon';
switch(food){
    case 'melon':
    case "apple":
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vegetable');
        break;
    default:
        console.log('아무것도 아닙니다');
        break;
}