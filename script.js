	
	var divElement=document.createElement("div");
		var divatt = document.createAttribute("id")
		divatt.value="container"
		divElement.setAttributeNode(divatt)
		
		document.body.appendChild(divElement)
		
		var divE1=document.getElementById("container")
	
	var divElement=document.createElement("div");
		var divatt = document.createAttribute("id")
		divatt.value="main-container"
		divElement.setAttributeNode(divatt)
		
		divE1.appendChild(divElement)
		
		var divE=document.getElementById("main-container")
	   var hElement=document.createElement("h2")
		hElement.innerHTML="Enter the person name to find the country and it's probability value    "
		var h1att = document.createAttribute("id")
		h1att.value="title"
		hElement.setAttributeNode(h1att)
		divE.appendChild(hElement)
		
		var inputElement1=document.createElement("input")
		var inputtype=document.createAttribute("type")
		inputtype.value="text"
		inputElement1.setAttributeNode(inputtype)
		var inputtype=document.createAttribute("placeholder")
		inputtype.value="Enter the name"
		inputElement1.setAttributeNode(inputtype)
		var inputatt=document.createAttribute("id")
		inputatt.value="nameText"
		inputElement1.setAttributeNode(inputatt)
		divE.appendChild(inputElement1)
		
		var inputElement2=document.createElement("input")
		var inputtype=document.createAttribute("type")
		inputtype.value="button"
		inputElement2.setAttributeNode(inputtype)
		var inputtype=document.createAttribute("value")
		inputtype.value="Search"
		inputElement2.setAttributeNode(inputtype)
		var inputatt=document.createAttribute("id")
		inputatt.value="search"
		inputElement2.setAttributeNode(inputatt)
		divE.appendChild(inputElement2)
		
		var inputElement3=document.createElement("input")
		var inputtype=document.createAttribute("type")
		inputtype.value="button"
		inputElement3.setAttributeNode(inputtype)
		var inputtype=document.createAttribute("value")
		inputtype.value="Reset"
		inputElement3.setAttributeNode(inputtype)
		var inputatt=document.createAttribute("id")
		inputatt.value="reset"
		inputElement3.setAttributeNode(inputatt)
		divE.appendChild(inputElement3)
		
		var divElement=document.createElement("div");
		var divatt = document.createAttribute("id")
		divatt.value="result-container"
		divElement.setAttributeNode(divatt)
		
		divE1.appendChild(divElement)
		
		var divEle=document.getElementById("result-container")
		
		var hElement=document.createElement("h3")
		var h1att = document.createAttribute("id")
		h1att.value="result-text"
		hElement.setAttributeNode(h1att)
		divEle.appendChild(hElement)
		
		var resText=document.getElementById("result-text")
		
		var hElement=document.createElement("h3")
		var h1att = document.createAttribute("id")
		h1att.value="result"
		hElement.setAttributeNode(h1att)
		divEle.appendChild(hElement)
		
		var hElement=document.createElement("h3")
			var h1att = document.createAttribute("id")
			h1att.value="error"
			hElement.setAttributeNode(h1att)
			divEle.appendChild(hElement)
			var errorText=document.getElementById("error")
		
		
	let searchText=document.querySelector("#nameText");
	let searchButton=document.querySelector("#search");
	let resetButton=document.querySelector("#reset");
	let resultValue=document.querySelector("#result");
	
	
	searchButton.addEventListener("click", async ()=>{

		let value=document.getElementById("nameText").value;
	
		if(value.length==0||value.includes(" ")){
			
				resultValue.innerHTML="";
				resText.innerHTML="";
				errorText.innerHTML="";
	
				errorText.innerHTML="Enter the value/valid name without any space"
				 errorText.style.color="red"
				}
		else {
			try{
				let data=await fetch(`https://api.nationalize.io/?name=${value}`);
			   let result= await data.json();
			   
			   if(result.country.length>0){
				   
					resultValue.innerHTML="";
					resText.innerHTML="";
					errorText.innerHTML="";
					
			   resText.innerHTML="Top two countries and the probabilities values"
			   resultValue.innerHTML="";
			   
			   for(let i=0;i<2;i++){
			  resultValue.innerHTML+=
				 `
				 <div class="sub-result">
				 <h5>Top Country-${i+1}</h5>
				  <table>
				 <tr>
				 <th>Country_id</th>
				  <th>Probability</th>
				  </tr>
				  <tr>
					 <td>${result.country[i].country_id}</td>
					 <td>${result.country[i].probability}</td>
					 </tr>
					 </table>
				 </div>
				   `
				  
			   }
			   }
			   else{
				   
				   resultValue.innerHTML="";
					resText.innerHTML="";
					errorText.innerHTML="";
					
				   resText.innerHTML="No country list present for entered name"
				   resultValue.innerHTML="";
			   }
			   
			}
			catch{
				console.log(error);
			}
    }
});

	resetButton.addEventListener("click",()=>{
	//document.querySelector("#result-container").style.display="none";
	searchText.value="";
	resultValue.innerHTML="";
	resText.innerHTML="";
	errorText.innerHTML="";
	});