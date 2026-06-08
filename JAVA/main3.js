let num = 1;
while(num <= 2)
{
    console.log(num);
    num++;
}

do{
    console.log('at least work once');
}while (false)

for(let i = 0 ; i < 5 ; i ++)
{
    if(i==3) continue;
    console.log(i);
    if(i==4) break;
}

const arr = ['apple','banana','orange'];
for(let i = 0 ; i  < arr.length;i++)
{
    console.log(arr[i]);
}