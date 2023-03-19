//1. Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array
//anonymous function

var numArray=[3,5,4,6,7,10,13,16,17]
const arr=function(){
    let value=[]
    for(let i of numArray){
        if(i%2!==0){
           value.push(i)
        }
    }
    return value
};
console.log(`odd numbers in an array ${arr(numArray)}`)

//Output : odd numbers in an array 3,5,7,13,17

//b. Convert all the strings to title caps in a string array

var strArray=['vaidee','krishna','krithvik']
var arr1=[]

const nameArray=function(){
    for(let i=0;i<strArray.length;i++){
        arr1.push(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1))
    }
    return arr1;
}

console.log(`string array ${nameArray(strArray)}`)

//Output: string array Vaidee,Krishna,Krithvik

//c.Sum of all numbers in an array

let numArray=[1,2,3,4,5,6]

const total=function(){
    let sum=0
    for(let i of numArray){
        sum+=i
    }
    return sum
}
console.log(`Sum of all numbers in an array ${total(numArray)}`)

//OutPut : Sum of all numbers in an array 21

//d.Return all the prime numbers in an array

let numArray=[1,2,3,4,5,6]

const primeNum=function(){
    for(let i=0;i<numArray.length;i++){
        for(let j=2;j<numArray[i]-1;j++)
    }
}


//d. Return all the prime numbers in an array

let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const primeNumbers1=function(){
			let isPrime=true
			let arr=[]
	for(let i=0;i<numArray.length;i++){
		if(numArray[i]<=2)
		arr.push(numArray[i])
		else{
			for(let j=2;j<numArray[i];j++){
				if(numArray[i]%j==0){
					isPrime=false
					break;
				}
			}
			if(isPrime==true){
			arr.push(numArray[i])
			}
		}
		isPrime=true
	}
	return arr
}

console.log(`prime numbers in an array is ${primeNumbers1(numArray)}`)

//e. Return all the palindromes in an array

let strArray=['aba','wert','oneeno','rtytr','wetwrt']

const palindromes1=function(){
		let arr=[]
		let revStr=""
	for(let i=0;i<strArray.length;i++){
		revStr=strArray[i].split('').reverse().join('')
		if(strArray[i]==revStr)
			arr.push(strArray[i])
	}
	if(arr.length==0)
	return -1
	else
	return arr
}
console.log(`palindromes in an array is ${palindromes1(strArray)}`)

//f Return median of two sorted arrays of the same size.

let arrayA=[1,2,3,4,5,6]
let arrayB=[10,20,30,40,50,60]
let m1=Math.floor(array1.length/2)

const medianValues1=function(){
		let m=Math.floor(array1.length/2)
		
		return `${arrayA[m]} and ${arrayB[m]}`
}
console.log(`median of two sorted arrays of the same size is ${medianValues1(arrayA,arrayB)}`)

//g. Remove duplicates from an array

let arrayNumber=[1,2,1,3,4,2,6,5,3]

const UniqueValues1=function(){
		let arr=[]
	for(let i of array){
		if(!arr.includes(i)){
			arr.push(i)
			}
	}
	return arr
}

console.log(`Array with Unique values ${UniqueValues1(arrayNumber)}`)

//h. Rotate an array by k times

let numArray=[1,2,3,4,5,6]
let k1=3

const finalArray1=function(){
		let value=0
		for(let i=0;i<k1;i++){
		value=numArray[numArray.length-1]
			for(let j=numArray.length-2;j>=0;j--){
				numArray[j+1]=numArray[j]
			}
			numArray[0]=value
		}
		return numArray
}

console.log(`Final array after rotating it for K times ${finalArray1(numArray,k1)}`)

//IIFE


//d. Return all the prime numbers in an array

let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

(function (){
			let isPrime=true
			let arr=[]
	for(let i=0;i<numArray.length;i++){
		if(numArray[i]<=2)
		arr.push(numArray[i])
		else{
			for(let j=2;j<numArray[i];j++){
				if(numArray[i]%j==0){
					isPrime=false
					break;
				}
			}
			if(isPrime==true){
			arr.push(numArray[i])
			}
		}
		isPrime=true
	}
console.log(`prime numbers in an array is ${arr}`)	
})(numArray)

//e. Return all the palindromes in an array

let strArray=['aba','wert','oneeno','rtytr','wetwrt']

(function(){
		let arr=[]
		let revStr=""
	for(let i=0;i<strArray.length;i++){
		revStr=strArray[i].split('').reverse().join('')
		if(strArray[i]==revStr)
			arr.push(strArray[i])
	}
	if(arr.length==0)
	console.log(`palindromes in an array is -1`)
	else
	console.log(`palindromes in an array is ${arr}`)
})(strArray)


//f Return median of two sorted arrays of the same size.

let arrayNum1=[1,2,3,4,5,6]
let arrayNum2=[10,20,30,40,50,60]
let m2=Math.floor(array1.length/2)

(function(){
		let m=Math.floor(array1.length/2)
		
		console.log(`median of two sorted arrays are ${arrayNum1[m]} and ${arrayNum2[m]})`)
})(arrayNum1,arrayNum2)


//g. Remove duplicates from an array

let arrayNumber1=[1,2,1,3,4,2,6,5,3]

(function(){
		let arr=[]
	for(let i of array){
		if(!arr.includes(i)){
			arr.push(i)
			}
	}
	return console.log(`Array with Unique values ${arr}`)
})(array)



//h. Rotate an array by k times

let numArray=[1,2,3,4,5,6]
let k2=3

(function(){
		let value=0
		for(let i=0;i<k2;i++){
		value=numArray[numArray.length-1]
			for(let j=numArray.length-2;j>=0;j--){
				numArray[j+1]=numArray[j]
			}
			numArray[0]=value
		}
		console.log(`Final array after rotating it for K times ${numArray}`)
})(numArray,k2)


//3. Do the below programs in arrow functions.


//d. Return all the prime numbers in an array

let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const primeNumbers=(numArray) =>{
			let isPrime=true
			let arr=[]
	for(let i=0;i<numArray.length;i++){
		if(numArray[i]<=2)
		arr.push(numArray[i])
		else{
			for(let j=2;j<numArray[i];j++){
				if(numArray[i]%j==0){
					isPrime=false
					break;
				}
			}
			if(isPrime==true){
			arr.push(numArray[i])
			}
		}
		isPrime=true
	}
	return arr
}

console.log(`prime numbers in an array is ${primeNumbers(numArray)}`)

//e. Return all the palindromes in an array

let strArray=['aba','wert','oneeno','rtytr','wetwrt']

const palindromes=(strArray)=>{
		let arr=[]
		let revStr=""
	for(let i=0;i<strArray.length;i++){
		revStr=strArray[i].split('').reverse().join('')
		if(strArray[i]==revStr)
			arr.push(strArray[i])
	}
	if(arr.length==0)
	return -1
	else
	return arr
}
console.log(`palindromes in an array is ${palindromes(strArray)}`)

//f Return median of two sorted arrays of the same size.

let array1=[1,2,3,4,5,6]
let array2=[10,20,30,40,50,60]
let m=Math.floor(array1.length/2)

const medianValues=(array1,array2)=>{
		let m=Math.floor(array1.length/2)
		
		return `${array1[m]} and ${array2[m]}`
}
console.log(`median of two sorted arrays of the same size is ${medianValues(array1,array2)}`)

//g. Remove duplicates from an array

let array=[1,2,1,3,4,2,6,5,3]

const UniqueValues=(array)=>{
		let arr=[]
	for(let i of array){
		if(!arr.includes(i)){
			arr.push(i)
			}
	}
	return arr
}

console.log(`Array with Unique values ${UniqueValues(array)}`)

//h. Rotate an array by k times

let numArray=[1,2,3,4,5,6]
let k=3

const finalArray=(numArray,k)=>{
		let value=0
		for(let i=0;i<k;i++){
		value=numArray[numArray.length-1]
			for(let j=numArray.length-2;j>=0;j--){
				numArray[j+1]=numArray[j]
			}
			numArray[0]=value
		}
		return numArray
}

console.log(`Final array after rotating it for K times ${finalArray(numArray,k)}`)

