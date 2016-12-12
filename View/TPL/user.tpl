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
      				<li><a href="/" class = "white">Home</a></li>
      				<li><a href="#" id = "login_button" class = "white">Login</a></li>
      				<li><a href="#" id = "register_button" class = "white">Register</a></li> 
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
    					<input type = "text" class = "form-control" name = "nickname" id = "nickname" required>
					</div>
					<div class = "form-group">
    					<label for = "email">Email address:</label>
    					<input type = "email" class = "form-control" name = "email" id = "email" required>
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" name = "password" id = "pwd" required>
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Phone number</label>
    					<input type = "text" class = "form-control" name = "phone_number" id = "phoneNUmber" required>
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Choose profile picture</label>
    					<input type = "file" name = "file" class = "form-control" id = "profilePic" required>
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
				<form action="/login" method="post">
					<div class = "form-group">
    					<label for = "text">Nickname:</label>
    					<input type = "text" class = "form-control" id = "nickname" name = "nickname" required>
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" id = "pwd" name = "password" required>
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
					<div class = "form-group hidden_field">
    					<input type = "text" class = "form-control" name = "nickname" value = "(:nickname:)">
					</div>
					<div class = "form-group hidden_field">
    					<input type = "text" class = "form-control" name = "password" value = "(:password:)">
					</div>
					<div class = "form-group">
						<label for = "text">Title:</label>
    					<input type = "text" class = "form-control" name = "title" required>
					</div>
					<div class = "form-group">
    					<label for = "text">Description:</label>
    					<input type = "text" class = "form-control" name = "description" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Available rooms:</label>
    					<input type = "number" class = "form-control" name = "available_rooms" required>
  					</div>
					<div class = "form-group">
    					<label for = "text" class = "special_label">Room typology:</label><br>
    					<input type = "radio" name = "rooms_typology" value= "single_room">
                        <label>Single room</label><br>
						<input type = "radio" name = "rooms_typology" value= "double_room">
                        <label>Double room</label><br>
  					</div>
  					<div class = "form-group">
    					<label for = "text" class = "special_label">House typology:</label><br>
    					<input type = "radio" name = "house_typology" value= "boarding_house">
                        <label>Boarding house</label><br>
						<input type = "radio" name = "house_typology" value= "apartment">
                        <label>Apartment</label><br>
  					</div>
					<div class = "form-group">
    					<label for = "text">Free from:</label>
    					<input type = "date" class = "form-control" name = "free_from" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Address:</label>
    					<input type = "text" class = "form-control" name = "address" required>
  					</div>
					<div class = "form-group">
    					<label for = "text" class = "special_label">Locality:</label><br>
    					<input type = "radio" name = "locality" value= "trento">
                        <label>Trento</label><br>
                        <input type = "radio" name = "locality" value= "povo">
                        <label>Povo</label><br>
                        <input type = "radio" name = "locality" value= "mesiano">
                        <label>Mesiano</label><br>
                        <input type = "radio" name = "locality" value= "villazzano">
                        <label>Villazzano</label><br>
                        <input type = "radio" name = "locality" value= "san_dona">
                        <label>San Donà</label><br>
  					</div>
					<div class = "form-group">
    					<label for = "text">Price per person:</label>
    					<input type = "number" class = "form-control" name = "price_per_person" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Add a photo:</label>
    					<input type = "file" name = "file" class = "form-control" required>
  					</div>
					<hr>
					<div class = "centered_text">
  						<button type = "submit" class = "btn btn-primary">Submit</button>
					</div>
				</form>
  			</div>
		</div>
		
		<!-- Modify insertion modal -->
		<div id = "modify_insertion_modal" class = "modal">
			<div class = "modal_content">
    			<span class = "close_modify_insertion">x</span>
    			<h3 class = "modal_title">Modify insertion</h3>
				<hr>
				<form action="/modify_insertion" method="post" enctype="multipart/form-data" id = "modify_form">
					<div class = "form-group hidden_field">
    					<input type = "text" class = "form-control" name = "nickname" value = "(:nikname:)">
					</div>
					<div class = "form-group hidden_field">
    					<input type = "text" class = "form-control" name = "password" value = "(:password:)">
					</div>
					<div class = "form-group">
						<label for = "text">Title:</label>
    					<input type = "text" class = "form-control" name = "title" readonly>
					</div>
					<div class = "form-group">
    					<label for = "text">Description:</label>
    					<input type = "text" class = "form-control" name = "description" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Available rooms:</label>
    					<input type = "number" class = "form-control" name = "available_rooms" required>
  					</div>
					<div class = "form-group">
    					<label for = "text" class = "special_label">Room typology:</label><br>
    					<input type = "radio" name = "rooms_typology" value= "single_room">
                        <label>Single room</label><br>
						<input type = "radio" name = "rooms_typology" value= "double_room">
                        <label>Double room</label><br>
  					</div>
  					<div class = "form-group">
    					<label for = "text" class = "special_label">House typology:</label><br>
    					<input type = "radio" name = "house_typology" value= "boarding_house">
                        <label>Boarding house</label><br>
						<input type = "radio" name = "house_typology" value= "apartment">
                        <label>Apartment</label><br>
  					</div>
					<div class = "form-group">
    					<label for = "text">Free from:</label>
    					<input type = "date" class = "form-control" name = "free_from" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Address:</label>
    					<input type = "text" class = "form-control" name = "address" required>
  					</div>
					<div class = "form-group">
    					<label for = "text" class = "special_label">Locality:</label><br>
    					<input type = "radio" name = "locality" value= "trento">
                        <label>Trento</label><br>
                        <input type = "radio" name = "locality" value= "povo">
                        <label>Povo</label><br>
                        <input type = "radio" name = "locality" value= "mesiano">
                        <label>Mesiano</label><br>
                        <input type = "radio" name = "locality" value= "villazzano">
                        <label>Villazzano</label><br>
                        <input type = "radio" name = "locality" value= "san_dona">
                        <label>San Donà</label><br>
  					</div>
					<div class = "form-group">
    					<label for = "text">Price per person:</label>
    					<input type = "number" class = "form-control" name = "price_per_person" required>
  					</div>
					<div class = "form-group">
    					<label for = "text">Add a photo:</label>
    					<input name = "file" type = "file" class = "form-control" required>
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

				<div class = "well card_div">(:data ~
                    <img src = "[:photo_path:]" class = "card_img">
                    <div class = "card_img_div">
                        <h4 class = "card_title">[:title:]</h4>
                        <hr>
                        <p class = "short_description">[:description:]</p>
						<form class = "deletion_form" action = "/delete_insertion">
							<input type = "text" name = "title" value = "[:title:]" class = "hidden_title">
							<br>			
							<hr>
							<button type = "submit" class = "btn btn-danger">Delete Insertion</button>
						</form>
						<form id = "modify_btn_form">
							<input type = "text" name = "title" value = "[:title:]" class = "hidden_title">
						</form>
						<br>
						<button class = "btn btn-success" id = "modify_insertion_button">Modify Insertion</button>
                    </div>
					<hr>
					<hr>
                :)</div>
				
            </div>
        </div>
                   
        <!-- JS scripts -->
        <script src = "../JS/modals.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
