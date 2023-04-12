
	var divElement=document.createElement("div");
		var divatt = document.createAttribute("id")
		divatt.value="main-container"
		divElement.setAttributeNode(divatt)
		
		document.body.appendChild(divElement)
		
		var divE=document.getElementById("main-container")
	   var hElement=document.createElement("h1")
		hElement.innerHTML="Calculator function"
		var h1att = document.createAttribute("id")
		h1att.value="title"
		hElement.setAttributeNode(h1att)
		divE.appendChild(hElement)
		
		var pElement=document.createElement("p")
		pElement.innerHTML="Calculator function with DOM"
		var patt = document.createAttribute("id")
		patt.value="description"
		pElement.setAttributeNode(patt)
		divE.appendChild(pElement)
		
		var formE=document.createElement("form")
		var formatt = document.createAttribute("id")
		formatt.value="form"
		formE.setAttributeNode(formatt)
		divE.appendChild(formE)
		
		var formid=document.getElementById("form")
		
		var tableelement=document.createElement("table")
		var tableatt=document.createAttribute("id")
		tableatt.value="table"
		tableelement.setAttributeNode(tableatt)
		formid.appendChild(tableelement)
		
		var tableid=document.getElementById("table")
		
		var inputElement1=document.createElement("input")
		var inputtype=document.createAttribute("type")
		inputtype.value="text"
		inputElement1.setAttributeNode(inputtype)
		var inputatt=document.createAttribute("id")
		inputatt.value="result"
		inputElement1.setAttributeNode(inputatt)
		tableid.appendChild(inputElement1)
		
		var rowE=document.createElement("tr")
		tableid.appendChild(rowE)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="clear"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="clearScreen()"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="C"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="C"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="arrow"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="back()"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="<-"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="<-"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="dot"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('.')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="."
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="."
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="multiplication"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('*')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="*"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="*"
		rowE.appendChild(buttonElement)
		
		var rowE=document.createElement("tr")
		tableid.appendChild(rowE)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="seven"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('7')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="7"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="7"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="eight"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('8')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="8"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="8"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="nine"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('9')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="9"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="9"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="divition"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('/')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="/"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="/"
		rowE.appendChild(buttonElement)
		
		var rowE=document.createElement("tr")
		tableid.appendChild(rowE)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="four"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('4')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="4"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="4"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="five"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('5')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="5"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="5"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="six"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('6')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="6"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="6"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="subtract"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('-')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="-"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="-"
		rowE.appendChild(buttonElement)
		
		var rowE=document.createElement("tr")
		tableid.appendChild(rowE)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="1"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('1')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="1"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="1"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="2"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('2')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="2"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="2"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="3"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('3')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="3"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="3"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="add"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('+')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="+"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="+"
		rowE.appendChild(buttonElement)
		
		var rowE=document.createElement("tr")
		tableid.appendChild(rowE)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="zero"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('0')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="0"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="0"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="doublezero"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="display('00')"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="00"
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="00"
		rowE.appendChild(buttonElement)
		
		var buttonElement=document.createElement("button")
		var buttontype=document.createAttribute("type")
		buttontype.value="button"
		buttonElement.setAttributeNode(buttontype)
		var buttonatt=document.createAttribute("id")
		buttonatt.value="equal"
		buttonElement.setAttributeNode(buttonatt)
		var buttonatt=document.createAttribute("onclick")
		buttonatt.value="solve()"
		buttonElement.setAttributeNode(buttonatt)
		var buttonvalue=document.createAttribute("value")
		buttonvalue.value="="
		buttonElement.setAttributeNode(buttonvalue)
		buttonElement.innerHTML="="
		rowE.appendChild(buttonElement)
		
		function clearScreen(){
			document.getElementById("result").value="";
		}
		
		function display(val){
			document.getElementById("result").value+=val;
			return val;
		}
		function solve(){
			let x=document.getElementById("result").value;
			let y=eval(x)
			document.getElementById("result").value=y
			return y;
		}
		
		function back(){
			var val=document.getElementById("result").value;
			document.getElementById("result").value=val.substr(0,val.length-1)
		}
		
		window.addEventListener("keydown",(event)=>{
			if(['0','1','2','3','4','5','6','7','8','9','+','/','*','-','.'].includes(event.key)){
				display(event.key)
			}else if((event.key)=='Enter'){
				solve()
			}else if((event.key)=='Backspace'){
				back()
			}
			else{
				alert("Only numbers, Operators, Enter and Backspace keys are allowed")
			}
		})

		
 