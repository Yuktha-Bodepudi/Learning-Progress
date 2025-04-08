//Ex:3
const number=[1,2,34,1,1];
const output= exclude(number,[1]);
console.log(output);
function exclude(number , n){
       const output =[];
for(let value of number){
    if(value != n){
        output.push(value);
        }
}
    return output;
}