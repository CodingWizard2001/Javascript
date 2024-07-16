// What is local scope


let a = 10;
{
    a = 5;
    console.log("Inner : ",a);
}
console.log(a);