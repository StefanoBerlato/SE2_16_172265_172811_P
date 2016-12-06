<!-- This page contains the details of the accomodation selected by the user in the page of the results. It shows a photo gallery, 
a map with the location of the building and a panel with the name of the accomodation, a general description and the salient
information. In the panel there is also a button by which the user can contact the renter -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Insertion Page</title>
        <link href="..\CSS\insertion_page.css" rel="stylesheet" type="text/css">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <h1 class = "main_title">Affitti Trento</h1>
		<hr>
		<nav>
  			<div class="container-fluid ">
    			<ul class="nav navbar-nav">
      				<li><a href="home_page.html" class = "white">Home</a></li>
      				<li><a href="#" id = "loginButton">Login</a></li>
      				<li><a href="#" id = "registerButton">Register</a></li> 
    			</ul>
  			</div>
		</nav>
		<br>
        <div class = "container">
            <div class = "col-sm-7">
                
                <!-- Here follows the photo gallery -->
				<div class = "well" id = "gallery_well">
					<h3 class = "desc_title">Photo Gallery</h3>
					<div class = "gallery_image_div">
						<img class="gallery_image" src="../Pictures/flat_interior.jpg">
					</div>
					<div class = "gallery_image_div">
						<img class="gallery_image" src="../Pictures/flat_interior.jpg">
					</div>
					<div class = "gallery_image_div">
						<img class="gallery_image" src="../Pictures/flat_interior.jpg">
					</div>
					<div class = "gallery_image_div">
						<img class="gallery_image" src="../Pictures/flat_interior.jpg">
					</div>
				</div>
                
                <!-- Here follows the map -->
                <h3 class = "desc_title">Map</h3>
                <div class = "map_div">
                    <iframe width="100%" height="400" src="http://www.mapi.ie/create-google-map/map.php?width=100%&amp;height=600&amp;hl=en&amp;q=Trento+(Trento)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=A&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class = "map_iframe"></iframe>
                </div>
				<br>
				<br>
            </div>
            
            <!-- Here follows the information panel -->
            <div class = "col-sm-5">
                <div class = "well" id = "info_well">
                    <h3 class = "desc_title">(:insertionTitle:)</h3>
                    <hr>
                    <p class = "desc_par">(:description:)</p>
                    <br>
                    <h3 class = "desc_title">(:salientInformation:)</h3>
                    <hr>
                    <p class = "desc_par">Price : (:price:)</p>
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
        
        
        
        
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
