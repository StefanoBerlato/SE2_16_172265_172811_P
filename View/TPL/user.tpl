<!-- This page shows the results of the search performed by the user, depending on the parameters he set. The page contains a panel 
by which the user can modify the parameters and filter the results, and a series of cards. Each card contains a picture of the 
accomodation, the name and a short description. -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Profile Page</title>
        <link href="..\CSS\user.css" rel="stylesheet" type="text/css">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <h1 class = "main_title">Affitti Trento</h1>
        <br>
		<br>
        <div class = "container">
            <div class = "col-sm-6">
                <div class = "profile_pic_div">
                    <img src = "../Pictures/profile_pic.png" class = "profile_pic">
                </div>
                <br>
                <div class = "well" id = "user_well">
                    <h3 class = "user_div_title">Mario Red</h3>
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
                        <h4 class = "card_title">La casa di Ciccio</h4>
                        <hr>
                        <p>La casa di ciccio è la casa di ciccio. Prima di appartenere a Ciccio apparteneva a Ciccio e si narra
                        che il successore sia nominato e soprannominato Ciccio</p>
                    </div>
                </div>
                <div class = "well" id = "card_div">
                    <img src = "../Pictures/house_card_1.jpg" class = "card_img">
                    <div class = "card_img_div">
                        <h4 class = "card_title">La casa di Ciccio</h4>
                        <hr>
                        <p>La casa di ciccio è la casa di ciccio. Prima di appartenere a Ciccio apparteneva a Ciccio e si narra
                        che il successore sia nominato e soprannominato Ciccio</p>
                    </div>
                </div>
            </div>
        </div>
            
        
        
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
