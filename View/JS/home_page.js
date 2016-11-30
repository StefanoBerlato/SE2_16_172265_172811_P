var checkbox = document.getElementById("checkbox1");

function select(){
	
	console.log("Chiamata Select");
	
	switch (event.target.id) {
			
		case "card1":
			var thisCard = document.getElementById("card1");
			var checkbox = document.getElementById("checkbox1");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox1.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card2":
			var thisCard = document.getElementById("card2");
			var checkbox = document.getElementById("checkbox2");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card3":
			var thisCard = document.getElementById("card3");
			var checkbox = document.getElementById("checkbox3");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card4":
			var thisCard = document.getElementById("card4");
			var checkbox = document.getElementById("checkbox4");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card5":
			var thisCard = document.getElementById("card5");
			var checkbox = document.getElementById("checkbox5");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card6":
			var thisCard = document.getElementById("card6");
			var checkbox = document.getElementById("checkbox6");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card7":
			var thisCard = document.getElementById("card7");
			var checkbox = document.getElementById("checkbox7");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card8":
			var thisCard = document.getElementById("card8");
			var checkbox = document.getElementById("checkbox8");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		case "card9":
			var thisCard = document.getElementById("card9");
			var checkbox = document.getElementById("checkbox9");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
				console.log(checkbox.checked);
			}
			else {
				console.log("Entro nell'else");
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
				console.log(checkbox.checked);
			}
			break;
			
		default:
			break;
	}

}
