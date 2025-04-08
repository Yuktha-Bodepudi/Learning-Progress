//Ex:5
let numbers=[1,2,3,4,1 ,1,1];
let output =move(numbers,1);
console.log(output);

function move(numbers,index){
 //   let count =0;
  //   for(let value of numbers){
    //    if(value === index){
      //  count=count+1;
        //}
//}
  //  return count;
  return numbers.reduce((accumulator,current)=>{
    let occ = (current === index)? 1:0;
    return accumulator +occ;
},0);}
//}

