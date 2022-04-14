let name = "Malayalam"
let reverse = " "
for(let i=name.length-1;i>=0;i--)
{
    reverse = reverse + name[i]
}
console.log(reverse)
if(reverse==name)
{
    console.log("Paliandrome")
}
else{
    console.log("Not Paliandrome")
}