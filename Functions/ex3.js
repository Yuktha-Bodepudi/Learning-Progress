//ex:3 
 try{
const arr =[1,2,3,4];
const  count=occur(arr,1);
console.log(count);
}catch(e){
  console.log(e.message);
}

function occur(numbers,element){
  if(Array.isarray(numbers)){
   throw new Error('invalid array);}
  return numbers.reduce((accumulator,current) =>{
    let c = if(current== element) ? 1:0;
	return c+accumulator;},0);
}
