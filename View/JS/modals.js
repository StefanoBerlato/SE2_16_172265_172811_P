/*
This script is meant to handle the modals for the registration and the login of the user. By clicking the buttons at the top-right
of the page, the user is shown a very simple modal that allows him to either sign in (if he's already registered) or sign up (otherwise).
*/

// modals
var register_modal = document.getElementById("register_modal");
var login_modal = document.getElementById("login_modal");
var add_insertion_modal = document.getElementById("add_insertion_modal");
var modify_insertion_modal = document.getElementById("modify_insertion_modal");
var contact_renter_modal = document.getElementById("contact_renter_modal");

// buttons
var register_btn = document.getElementById("register_button");
var login_btn = document.getElementById("login_button");
var add_insertion_btn = document.getElementById("add_insertion_button");
var modify_insertion_btn = document.getElementById("modify_insertion_button");
var contact_renter_btn = document.getElementById("contact_renter_button");

// close buttons
var close_register = document.getElementsByClassName("close_register")[0];
var close_login = document.getElementsByClassName("close_login")[0];
var close_add_insertion = document.getElementsByClassName("close_add_insertion")[0];
var close_modify_insertion = document.getElementsByClassName("close_modify_insertion")[0];
var close_contact_renter = document.getElementsByClassName("close_contact_renter")[0];


// if the register button is clicked, show the modal by changing its visibility value
register_btn.onclick = function() {
    register_modal.style.display = "block";
}

// if the login button is clicked, show the modal by changing its visibility value
login_btn.onclick = function() {
    login_modal.style.display = "block";
}

// if the add insertion button is clicked, show the modal by changing its visibility value
if(add_insertion_btn != null){							// checks whether the button is defined (only in user.tpl)
	add_insertion_btn.onclick = function() {
		add_insertion_modal.style.display = "block";
	}
}

// if the contact-renter button is clicked, show the modal by changing its visibility value
if(contact_renter_btn != null){							// checks whether the button is defined (only in user.tpl)
	contact_renter_btn.onclick = function() {
		contact_renter_modal.style.display = "block";
	}
}

<<<<<<< HEAD
var modify_insertion = function(title, description){

=======
/* 
this function shows the modify-insertion modal, and fills the "title" field of the form with the title
of the insertion that is being modified
*/
/*if(modify_insertion_btn != null){						// checks whether the button is defined (only in user.tpl)
	modify_insertion_btn.onclick = function() {
		var btn_form = document.getElementById("modify_btn_form");
		var mdf_form = document.getElementById("modify_form");
		var title = btn_form.elements[0].value;

		modify_insertion_modal.style.display = "block";
		mdf_form.elements[0].value = title;
	}
}*/

var modify_insertion = function(title){
>>>>>>> 1c592d09dfef104634ab69b23d763beed10a8036
	var btn_form = document.getElementById("modify_btn_form");
	var mdf_form = document.getElementById("modify_form");

	modify_insertion_modal.style.display = "block";
<<<<<<< HEAD
	mdf_form.elements[2].setAttribute("value", title);
    mdf_form.elements[3].setAttribute("value", description);
=======
	mdf_form.elements[0].value = title;
>>>>>>> 1c592d09dfef104634ab69b23d763beed10a8036
}

// if the "x" in the modals is clicked, close the modals by changing its visibility value
close_register.onclick = function() {
    register_modal.style.display = "none";
}

close_login.onclick = function() {
	login_modal.style.display = "none";
}

if(add_insertion_btn != null){							// checks whether the button is defined (only in user.tpl)
	close_add_insertion.onclick = function() {
		add_insertion_modal.style.display = "none";
	}
}

if(close_modify_insertion != null){					    // checks whether the button is defined (only in user.tpl)
	close_modify_insertion.onclick = function() {
		modify_insertion_modal.style.display = "none";
	}
}


if(contact_renter_btn != null){							// checks whether the button is defined (only in user.tpl)
	close_contact_renter.onclick = function() {
		contact_renter_modal.style.display = "none";
	}
}


// if the user clicks anywhere outside the modal, close the modal by changing its visibility value
window.onclick = function(event) {
    if ((event.target == register_modal) || (event.target == login_modal)) {
        register_modal.style.display = "none";									
		login_modal.style.display = "none";
		add_insertion_modal.style.display = "none";
    }
}