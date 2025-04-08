//Ex:6
let arr=[1,-8,5,6,-9];
let max=arr[1];
for(let value of arr){
    if(value >= max){
        max=value;
    }
}
console.log(max);