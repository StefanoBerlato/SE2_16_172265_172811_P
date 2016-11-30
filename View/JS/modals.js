/*
This script is meant to handle the modals for the registration and the login of the user. By clicking the buttons at the top-right
of the page, the user is shown a very simple modal that allows him to either sign in (if he's already registered) or sign up (otherwise).
*/

// declaring variables to handle the modals
var register_modal = document.getElementById("registerModal");
var register_btn = document.getElementById("registerButton");

var login_modal = document.getElementById("loginModal");
var register_modal = document.getElementById("registerModal");

var login_btn = document.getElementById("loginButton");
var register_btn = document.getElementById("registerButton");

var closeRegister = document.getElementsByClassName("closeRegister")[0];
var closeLogin = document.getElementsByClassName("closeLogin")[0];


// if the register button is clicked, make the register modal visible
register_btn.onclick = function() {
    register_modal.style.display = "block";
}

// if the login button is clicked, make the login modal visible
login_btn.onclick = function() {
    login_modal.style.display = "block";
}

// if the "x" in the modals is clicked, close the modals making them hidden
closeRegister.onclick = function() {
    register_modal.style.display = "none";
}
closeLogin.onclick = function() {
	login_modal.style.display = "none";
}

// if the user clicks anywhere outside the modal, close the modal
window.onclick = function(event) {
    if ((event.target == register_modal) || (event.target == login_modal)) {
        register_modal.style.display = "none";
		login_modal.style.display = "none";
    }
}