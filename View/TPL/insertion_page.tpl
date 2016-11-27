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
        <div class = "container">
            <div class = "col-sm-7">
                
                <!-- Here follows the photo gallery -->
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
                
                <!-- Here follows the map -->
                <h3 class = "desc_title">Map</h3>
                <div class = "map_div">
                    <iframe width="100%" height="400" src="http://www.mapi.ie/create-google-map/map.php?width=100%&amp;height=600&amp;hl=en&amp;q=Trento+(Trento)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=A&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class = "map_iframe"></iframe>
                </div>
                <br/>
            </div>
            
            <!-- Here follows the information panel -->
            <div class = "col-sm-5">
                <div class = "well">
                    <h3 class = "desc_title">Beautiful flat for students</h3>
                    <hr>
                    <p class = "desc_par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br>
                    <h3 class = "desc_title">Salient Information</h3>
                    <hr>
                    <p class = "desc_par">Price : 250€/mese</p>
                    <p class = "desc_par">Available rooms : 2</p>
                    <p class = "desc_par">Free from: now</p>
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
