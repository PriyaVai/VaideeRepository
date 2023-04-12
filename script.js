
	let formSubmit=document.getElementById("form");
	
	formSubmit.addEventListener("submit", (event)=>{
		
		event.preventDefault();
		
		var getValue=document.querySelector('input[name="gender"]:checked');
		if(getValue==null){
			document.getElementById("res").innerHTML="Select the Gender value"
			
			 
		}else{
			document.getElementById("res").innerHTML="";
			var genderCell=document.createElement("td");
			genderCell.innerHTML=getValue.value;
		}
		
		var markedCheckbox=document.querySelectorAll('[name="fav_food"]');
		let count=0,food="";
		
		for(var checkbox of markedCheckbox){
			if(checkbox.checked){
				count++;
				food=food+" "+checkbox.value;
			}
		}
		if(count<2){
			document.getElementById("checkres").innerHTML="Select atleast two food choices";
		}else{
			document.getElementById("checkres").innerHTML="";
			var foodCell=document.createElement("td");
			foodCell.innerHTML=food;
		}
		
		var tbody=document.getElementById("tableBody")
		let row=document.createElement("tr");
		
		var fname=document.getElementById("first-name")
		var lname=document.getElementById("last-name")
		var address=document.getElementById("address")
		var pincode=document.getElementById("pincode")
		var state=document.getElementById("state")
		var country=document.getElementById("country")
		
		var fnameCell=document.createElement("td");
		var lnameCell=document.createElement("td");
		var addressCell=document.createElement("td");
		var pincodeCell=document.createElement("td");
		var stateCell=document.createElement("td");
		var countryCell=document.createElement("td");
		
		fnameCell.innerHTML=fname.value;
		lnameCell.innerHTML=lname.value;
		addressCell.innerHTML=address.value;
		pincodeCell.innerHTML=pincode.value;
		stateCell.innerHTML=state.value;
		countryCell.innerHTML=country.value;

		row.appendChild(fnameCell)
		row.appendChild(lnameCell)
		row.appendChild(addressCell)
		row.appendChild(pincodeCell)
		row.appendChild(genderCell)
		row.appendChild(foodCell)
		row.appendChild(stateCell)
		row.appendChild(countryCell)
		
		tbody.appendChild(row)
		
		formSubmit.reset();
	
	});
	