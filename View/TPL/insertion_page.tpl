<!-- This page contains the details of the accomodation selected by the user in the page of the results. It shows
a map with the location of the building and a panel with the name of the accomodation and it description. In the panel there is also a button 
by which the user can contact the renter -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Insertion Page</title>
        <link href="..\CSS\insertion_page.css" rel="stylesheet" type="text/css">
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
		
		
		<!-- Contact renter modal -->
		<div id = "contact_renter_modal" class = "modal">
			<div class = "modal_content">
    			<span class = "close_contact_renter">x</span>
    			<h3 class = "modal_title">Contact the renter</h3>
				<hr>
				<div class = "centered_text">
					<p class = "desc_par black">(:nickname:)</p><br>
					<p class = "desc_par black">(:email:)</p><br>
					<p class = "desc_par black">(:phone_number:)</p>
				</div>
  			</div>
		</div>
		
		
		<br>
		
        <div class = "container">
            <div class = "col-sm-7">
                
                <!-- Image -->
                <div class = "img_div">
                    <img src = "(:photo_src:)" class = "insertion_img">
                </div>
            </div>
            
            <!-- Information panel -->
            <div class = "col-sm-5">
                <div class = "well" id = "info_well">
                    <h3 class = "desc_title">(:title:)</h3>
                    <hr>
                    <p class = "desc_par">(:description:)</p>
                    <br>
                    <p class = "desc_par">Price : (:price_per_person:)</p>
                    <p class = "desc_par">House : (:house_typology:)</p>
                    <p class = "desc_par">Rooms : (:rooms_typology:)</p>
                    <p class = "desc_par">Available rooms : (:available_rooms:)</p>
                    <p class = "desc_par">Free from: (:free_from:)</p>
                    <p class = "desc_par">Locality: (:locality:)</p>
                    <p class = "desc_par">Address: (:address:)</p>
                    <p class = "desc_par">Free from: (:free_from:)</p>
                    <br>
                    <br>
                    <div class = "centered_text">
                        <button class="btn btn-primary btn-lg" id = "contact_renter_button">Contact the renter</button>
                    </div>
                </div>
            </div>
        </div>
                
        <!-- JS scripts -->
        <script src = "../JS/modals.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
