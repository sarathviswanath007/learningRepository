
//from 1 to 100, give common multiple values of 2 and 5, print only 1st 5 numbers

let n = 5
for(let i=1;i<=100;i++)
{
    
    if(i%2==0 && i%5==0)
    {
        n++
        console.log(i)
        if(n==3)
        {
            break;
        }
    }
   
}