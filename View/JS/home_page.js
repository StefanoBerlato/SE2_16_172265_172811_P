/*
This script is meant to handle the graphic of the homepage. There is a single function "select", that modifies the view of the
cards in the homepage once the user selects them. 
*/

function select(){
	
	// on the basis of the id attribute of the selected card, 
	switch (event.target.id) {
			
		case "card1":
			var thisCard = document.getElementById("card1");		// get the card element
			var checkbox = document.getElementById("checkbox1");	// get the hidden checkbox element
			if(checkbox.checked == false){							// if the checkbox isn't selected...
				thisCard.style = "border: 3px solid green;";		// ...modify the view of the card
				checkbox.checked = true;							// and set the checkbox as selected
			}
			else {													// otherwise...
				thisCard.style = "border: 1px solid white;";		// ...set the card to its previous view
				checkbox1.checked = false;							// set the checkbox as unchecked
			}
			break;
			
		case "card2":												// do the same for every card
			var thisCard = document.getElementById("card2");
			var checkbox = document.getElementById("checkbox2");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card3":
			var thisCard = document.getElementById("card3");
			var checkbox = document.getElementById("checkbox3");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card4":
			var thisCard = document.getElementById("card4");
			var checkbox = document.getElementById("checkbox4");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card5":
			var thisCard = document.getElementById("card5");
			var checkbox = document.getElementById("checkbox5");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card6":
			var thisCard = document.getElementById("card6");
			var checkbox = document.getElementById("checkbox6");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card7":
			var thisCard = document.getElementById("card7");
			var checkbox = document.getElementById("checkbox7");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card8":
			var thisCard = document.getElementById("card8");
			var checkbox = document.getElementById("checkbox8");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		case "card9":
			var thisCard = document.getElementById("card9");
			var checkbox = document.getElementById("checkbox9");
			if(checkbox.checked == false){
				thisCard.style = "border: 3px solid green;";
				checkbox.checked = true;
			}
			else {
				thisCard.style = "border: 1px solid white;";
				checkbox.checked = false;
			}
			break;
			
		default:
			break;
	}

}
