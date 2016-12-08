<!-- This page shows the results of the search performed by the user, depending on the parameters he set. The page contains a panel 
by which the user can modify the parameters and filter the results, and a series of cards. Each card contains a picture of the 
accomodation, the name and a short description. -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Profile Page</title>
        <link href="..\CSS\user.css" rel="stylesheet" type="text/css">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="..\CSS\navbar_modals.css" rel="stylesheet" type="text/css">
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Cinzel|Reem+Kufi" rel="stylesheet">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <h1 class = "main_title">Affitti Trento</h1>
		<hr>
		
		<!-- Navbar -->
		<nav class = "centered_nav">
  			<div class="container-fluid">
    			<ul class="nav navbar-nav">
      				<li><a href="home_page.html" class = "white">Home</a></li>
      				<li><a href="#" id = "loginButton">Login</a></li>
      				<li><a href="#" id = "registerButton">Register</a></li> 
    			</ul>
  			</div>
		</nav>
		
		<br>
		<br>
		
		<!-- Modals -->
		<div id = "registerModal" class = "registerModal">
			<div class = "register-modal-content">
    			<span class = "closeRegister">x</span>
    			<h3 class = "modalTitle">Register</h3>
				<hr>
				<form>
					<div class = "form-group">
						<label for = "text">Nickname:</label>
    					<input type = "text" class = "form-control" id = "nickname">
					</div>
					<div class = "form-group">
    					<label for = "email">Email address:</label>
    					<input type = "email" class = "form-control" id = "email">
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" id = "pwd">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Phone number</label>
    					<input type = "text" class = "form-control" id = "phoneNUmber">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Choose profile picture</label>
    					<input type = "file" class = "form-control" id = "profilePic">
  					</div>
					<hr>
					<div class = "centered_text">
  						<button type = "submit" class = "btn btn-primary">Submit</button>
					</div>
				</form>
  			</div>
		</div>
		<div id = "loginModal" class = "loginModal">
			<div class = "login-modal-content">
    			<span class = "closeLogin">x</span>
    			<h3 class = "modalTitle">Login</h3>
				<hr>
				<form>
					<div class = "form-group">
    					<label for = "email">Email address:</label>
    					<input type = "email" class = "form-control" id = "email">
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" id = "pwd">
  					</div>
					<hr>
					<div class = "centered_text">
  						<button type="submit" class="btn btn-primary">Login</button>
					</div>
				</form>
  			</div>
		</div>
		
		<br>
		
		<!-- Content -->
        <div class = "container">
            <div class = "col-sm-6">
                <div class = "profile_pic_div">
                    <img src = "(:photo_src:)" class = "profile_pic">
                </div>
                <br>
                <div class = "well" id = "user_well">
                    <h3 class = "user_div_title">(:nickname:)</h3>
                    <hr>
                    <button class="btn btn-primary btn-lg">Manage your insertions</button>
                </div>
            </div>
            <div class = "col-sm-6">
                <h2 class = "insertions_title">Your Insertions</h2>
                <br>
				<br>
				
                <div class = "well" id = "card_div">
                    <img src = "../Pictures/house_card_1.jpg" class = "card_img">
                    <div class = "card_img_div">
                        <h4 class = "card_title">(:insertionTitle:)</h4>
                        <hr>
                        <p class = "shortDescription">(:insertionShortDescription:)</p>
                    </div>
                </div>
            </div>
        </div>
            
        
        
        
        <script src = "../JS/modals.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
