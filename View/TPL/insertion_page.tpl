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
    			<h3 class = "modaltitle">Login</h3>
				<hr>
				<form action="/login" method="post" enctype="multipart/form-data">
					<div class = "form-group">
    					<label for = "email">Email address:</label>
    					<input type = "email" class = "form-control" id = "email" name = "email">
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
            <div class = "col-sm-7">
                
                <!-- Map -->
                <h3 class = "desc_title">Map</h3>
                <div class = "map_div">
                    <iframe width="100%" height="400" src="http://www.mapi.ie/create-google-map/map.php?width=100%&amp;height=600&amp;hl=en&amp;q=Trento+(Trento)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=A&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class = "map_iframe"></iframe>
                </div>
				<br>
				<br>
            </div>
            
            <!-- Information panel -->
            <div class = "col-sm-5">
                <div class = "well" id = "info_well">
                    <h3 class = "desc_title">(:title:)</h3>
                    <hr>
                    <p class = "desc_par">(:description:)</p>
                    <br>
                    <p class = "desc_par">Price : (:price_per_person:)</p>
                    <p class = "desc_par">Available rooms : (:availableRooms:)</p>
                    <p class = "desc_par">Free from: (:freeFrom:)</p>
                    <br>
                    <br>
                    <div class = "centered_text">
                        <button class="btn btn-primary btn-lg">Contact the renter</button>
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
