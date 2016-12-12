<!-- This page shows the results of the search performed by the user, depending on the parameters he set. The page contains a panel 
by which the user can modify the parameters and filter the results, and a series of cards. Each card contains a picture of the 
accomodation, the name and a short description. -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Search Insertion</title>
        <link href="..\CSS\search_insertions.css" rel="stylesheet" type="text/css">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Cinzel|Reem+Kufi" rel="stylesheet">
		<link href="..\CSS\navbar_modals.css" rel="stylesheet" type="text/css">
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
    					<input type = "text" class = "form-control" name = "nickname" id = "nickname">
					</div>
					<div class = "form-group">
    					<label for = "email">Email address:</label>
    					<input type = "email" class = "form-control" name = "email" id = "email">
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" name = "password" id = "pwd">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Phone number</label>
    					<input type = "text" class = "form-control" name = "phone_number" id = "phoneNUmber">
  					</div>
					<div class = "form-group">
    					<label for = "pwd">Choose profile picture</label>
    					<input type = "file" name = "file" class = "form-control" id = "profilePic">
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
    					<label for = "text">Nickname:</label>
    					<input type = "text" class = "form-control" id = "nickname" name = "nickname">
  					</div>
  					<div class = "form-group">
    					<label for = "pwd">Password:</label>
    					<input type = "password" class = "form-control" id = "pwd" name = "password">
  					</div>
					<hr>
					<div class = "centered_text">
  						<button type="submit" class="btn btn-primary">Login</button>
					</div>
				</form>
  			</div>
		</div>
		
		<br>
		
        <div class = "container">
            <div class = "col-sm-4">
                
                <!-- Panel with filters -->
                <div class = "well filters_div">
                    <h3 class = "filters_title">Filter by zone</h3>
                    <hr>
                    <form id = "filterForm" action="/search" method="get" enctype="multipart/form-data">
                        <input type = "checkbox" name = "locality" value= "trento">
                        <label>Trento</label><br>
                        <input type = "checkbox" name = "locality" value= "povo">
                        <label>Povo</label><br>
                        <input type = "checkbox" name = "locality" value= "mesiano">
                        <label>Mesiano</label><br>
                        <input type = "checkbox" name = "locality" value= "villazzano">
                        <label>Villazzano</label><br>
                        <input type = "checkbox" name = "locality" value= "san_dona">
                        <label>San Donà</label><br>
                        <br>
                        <h3 class = "filters_title">Filter by price</h3>
                        <hr>
                        <label>Maximum Price</label><br>
                        <input type = "number" name = "price_per_person" class = "filters_input"><br>
                        <br>
                        <h3 class = "filters_title">Filter by available rooms</h3>
                        <hr>
                        <label>Quantity</label><br>
                        <input type = "number" name = "available_rooms" class = "filters_input"><br>
                        <br>
						<h3 class = "filters_title">Filter by typology</h3>
						<hr>
						<input type = "checkbox" name = "rooms_typology" value= "single_room">
                        <label>Single room</label><br>
						<input type = "checkbox" name = "rooms_typology" value= "double_room">
                        <label>Double room</label><br>
						<input type = "checkbox" name = "house_typology" value= "boarding_house">
                        <label>Boarding house</label><br>
						<input type = "checkbox" name = "house_typology" value= "apartment">
                        <label>Apartment</label><br>
                        <div class = "centered_text">
                            <button type="submit" class="btn btn-primary btn-lg">Apply Filters</button>
                        </div>
                    </form>             
                </div>
            </div>
            
            <!-- List of cards -->
            <div class = "col-sm-3 col-sm-offset-1">(:data ~
                <div class = "well card_div">
                    <img src = "[:photo_path:]" class = "card_img">
                    <div class = "card_img_div">
                        <h4 class = "card_title">[:title:]</h4>
                        <hr>
                        <p class = "short_description">[:description:]</p>
                    </div>
                </div>
			:)</div>
        </div>
                
        <!-- JS scripts -->
        <script src = "../JS/modals.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
