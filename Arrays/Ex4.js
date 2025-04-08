//Ex:4
let numbers=[1,2,3,4];
let output =move(numbers,1,3);
console.log(output);

function move(numbers,index,offset){
    //const output=[];
     for(let i=0;i<numbers.length;i++){
        if(index + offset < 0 || index +offset >=numbers.length){
            return 'error';
        }
        let a= numbers[index+offset];
        if( i === index + offset){
           numbers[i] = numbers[index];
           numbers[index] = a;
        }
    }
    return numbers;
}