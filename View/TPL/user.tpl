<!-- This page shows the profile of the user who just signed in. It contains the profile picture, the nickname of the user, a panel by which the user can upload a new insertion and the list of the insertions already uploaded. The actions of signing up, signing in and adding a new insertions are perfomed
by filling forms in pop-up modals -->

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
      				<li><a href="#" id = "login_button">Login</a></li>
      				<li><a href="#" id = "register_button">Register</a></li> 
    			</ul>
  			</div>
		</nav>
		
		<br>
		<br>
		
		<!-- Register modal -->
		<div id = "register_modal" class = "modal">
			<div class = "modal_content">
    			<span class = "close_register">x</span>
    			<h3 class = "modal_title">Register</h3>
				<hr>
				<form action="/register" method="post" enctype="multipart/form-data">
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
		
		<!-- Login modal -->
		<div id = "login_modal" class = "modal">
			<div class = "modal_content">
    			<span class = "close_login">x</span>
    			<h3 class = "modal_title">Login</h3>
				<hr>
				<form action="/login" method="post" enctype="multipart/form-data">
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
		
		<!-- Add insertion modal -->
		<div id = "add_insertion_modal" class = "modal">
			<div class = "modal_content">
    			<span class = "close_add_insertion">x</span>
    			<h3 class = "modal_title">Add Insertion</h3>
				<hr>
				<form action="/add_insertion" method="post" enctype="multipart/form-data">
					<div class = "form-group">
						<label for = "text">Your Nickname:</label>
    					<input type = "text" class = "form-control" name = "nickname">
					</div>
					<div class = "form-group">
						<label for = "text">Title:</label>
    					<input type = "text" class = "form-control" name = "title">
					</div>
					<div class = "form-group">
    					<label for = "text">Description:</label>
    					<input type = "text" class = "form-control" name = "description">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Room tipology:</label>
    					<input type = "password" class = "form-control" name = "room_tipology">
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">House tipology:</label>
    					<input type = "password" class = "form-control" name = "house_tipology">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Free from:</label>
    					<input type = "text" class = "form-control" name = "free_from">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Address:</label>
    					<input type = "text" class = "form-control" name = "address">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Locality</label>
    					<input type = "text" class = "form-control" name = "locality">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Price per person</label>
    					<input type = "text" class = "form-control" name = "price_per_person">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Add a photo picture</label>
    					<input type = "file" class = "form-control" id = "profilePic">
  					</div>
					<hr>
					<div class = "centered_text">
  						<button type = "submit" class = "btn btn-primary">Submit</button>
					</div>
				</form>
  			</div>
		</div>
		
		<br>
		
		<!-- User panel -->
        <div class = "container">
            <div class = "col-sm-6">
                <div class = "profile_pic_div">
                    <img src = "(:photo_src:)" class = "profile_pic">
                </div>
                <br>
                <div class = "well user_well">
                    <h3 class = "user_div_title">(:nickname:)</h3>
                    <hr>
                    <button class="btn btn-primary btn-lg" id = "add_insertion_button">Add insertion</button>
                </div>
            </div>
			
			<!-- List of insertions -->
           	<div class = "col-sm-6">
                <h2 class = "insertions_title">Your Insertions</h2>
				
                <br>
				<br>

				<div class = "well card_div">(:data
                    <img src = "[:photo_path:]" class = "card_img">
                    <div class = "card_img_div">
                        <h4 class = "card_title">[:title:]</h4>
                        <hr>
                        <p class = "short_description">[:description:]</p>
                    </div>
                :)</div>
				
            </div>
        </div>
                   
        <!-- JS scripts -->
        <script src = "../JS/modals.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
