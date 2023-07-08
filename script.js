	var counter=10;
	
	var counterElement=document.getElementById("counter");
	
	var headingElement=document.getElementById("heading");
	
	setTimeout( function(){
		counterElement.innerHTML=counter;
		
		setTimeout(function(){
			counter--;
			counterElement.innerHTML=counter;
			
			setTimeout(function(){
				counter--;
				counterElement.innerHTML=counter;
				
				setTimeout(function(){
					counter--;
					counterElement.innerHTML=counter;
					
					setTimeout(function(){
						counter--;
						counterElement.innerHTML=counter;
						
						setTimeout(function(){
							counter--;
							counterElement.innerHTML=counter;
							
							setTimeout(function(){
								counter--;
								counterElement.innerHTML=counter;
								
								setTimeout(function(){
									counter--;
									counterElement.innerHTML=counter;
									
									setTimeout(function(){
										counter--;
										counterElement.innerHTML=counter;
										
										setTimeout(function(){
											counter--;
											counterElement.innerHTML=counter;
											
											setTimeout(function(){
												headingElement.style.display = "none";
												counterElement.innerHTML="Happy Independence Day";
											},2000);
										},2000);
									},2000);
								},2000);
							},2000);
						},2000);
					},2000);
				},2000);
			},2000);
		},2000);
	},2000);