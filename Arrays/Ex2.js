\\Ex:2
const example = [1,2,3,4];
let a=2;
let f=search(example,a);
console.log(f);
function search(ex,searchelement){
    for(let i=0;i<ex.length;i++){
        if( i === searchelement){
            return true;
        }
    }
    return false;
}