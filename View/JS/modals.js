var register_modal = document.getElementById("registerModal");
var register_btn = document.getElementById("registerButton");

var login_modal = document.getElementById("loginModal");
var register_modal = document.getElementById("registerModal");

var login_btn = document.getElementById("loginButton");
var register_btn = document.getElementById("registerButton");

var closeRegister = document.getElementsByClassName("closeRegister")[0];
var closeLogin = document.getElementsByClassName("closeLogin")[0];


register_btn.onclick = function() {
    register_modal.style.display = "block";
}

login_btn.onclick = function() {
    login_modal.style.display = "block";
}

closeRegister.onclick = function() {
    register_modal.style.display = "none";
}

closeLogin.onclick = function() {
	login_modal.style.display = "none";
}

window.onclick = function(event) {
    if ((event.target == register_modal) || (event.target == login_modal)) {
        register_modal.style.display = "none";
		login_modal.style.display = "none";
    }
}