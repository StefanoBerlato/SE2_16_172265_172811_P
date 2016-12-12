/*
This script is meant to handle the modals for the registration and the login of the user. By clicking the buttons at the top-right
of the page, the user is shown a very simple modal that allows him to either sign in (if he's already registered) or sign up (otherwise).
*/

// modals
var register_modal = document.getElementById("register_modal");
var login_modal = document.getElementById("login_modal");
var add_insertion_modal = document.getElementById("add_insertion_modal");
var modify_insertion_modal = document.getElementById("modify_insertion_modal");

// buttons
var register_btn = document.getElementById("register_button");
var login_btn = document.getElementById("login_button");
var add_insertion_btn = document.getElementById("add_insertion_button");
var modify_insertion_btn = document.getElementById("modify_insertion_button");

// close buttons
var close_register = document.getElementsByClassName("close_register")[0];
var close_login = document.getElementsByClassName("close_login")[0];
var close_add_insertion = document.getElementsByClassName("close_add_insertion")[0];
var close_modify_insertion = document.getElementsByClassName("close_modify_insertion")[0];


// if the register button is clicked, show the modal by changing its visibility value
register_btn.onclick = function() {
    register_modal.style.display = "block";
}

// if the login button is clicked, show the modal by changing its visibility value
login_btn.onclick = function() {
    login_modal.style.display = "block";
}

// if the add insertion button exists and is clicked, show the modal by changing its visibility value
if(add_insertion_btn != null){
	add_insertion_btn.onclick = function() {
		add_insertion_modal.style.display = "block";
	}
}

/* 
this function shows the modify-insertion modal, and fills the "title" field of the form with the title
of the insertion that is being modified
*/
modify_insertion_btn.onclick = function() {
	var btn_form = document.getElementById("modify_btn_form");
	var mdf_form = document.getElementById("modify_form");
	var title = btn_form.elements[0].value;
	
	modify_insertion_modal.style.display = "block";
	mdf_form.elements[0].value = title;
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

if(modify_insertion_btn != null){							// checks whether the button is defined (only in user.tpl)
	close_modify_insertion.onclick = function() {
		modify_insertion_modal.style.display = "none";
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