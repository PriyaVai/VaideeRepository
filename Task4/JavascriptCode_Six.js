const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = num.reduce((sum,currentValue)=>{
	return sum+currentValue
},0);
console.log(sum);