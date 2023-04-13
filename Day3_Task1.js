var resume = {
'name' : 'Vaideeswari',
'last name':'Thangavelu',
'age':29,
'dateofbirth':'01:05:1993',
'address':{
'no':'3/11',
'street':'cross main road',
'city':'chenai',
'state':'Tamilnadu',
'country':'India',
},
'education':'BE-CSE',
'occupation':'Test Lead',
'hobbies':['running','gardening','reading books'],
}

var keyValue=Object.keys(resume)
//for
for(let i=0;i<keyValue.length;i++){
	console.log(`Keys of resume object is ${keyValue[i]} and Values of resume object is ${resume[keyValue[i]]}`)
	}
	
//for in
for(let i in keyValue){
	console.log(`Keys of resume object is ${keyValue[i]} and Values of resume object is ${resume[keyValue[i]]}`)
	}
	
//for of
for(let i of keyValue){
	console.log(`Keys of resume object is ${i} and Values of resume object is ${resume[i]}`)
	}
	
//forEach
keyValue.forEach(myFunction);

function myFunction(keys){
	console.log(`Keys of resume object is ${keys} and Values of resume object is ${resume[keys]}`)
}