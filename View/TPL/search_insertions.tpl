<!-- This page shows the results of the search performed by the user, depending on the parameters he set. The page contains a panel 
by which the user can modify the parameters and filter the results, and a series of cards. Each card contains a picture of the 
accomodation, the name and a short description. -->

<!DOCTYPE html>
<html>

    <head> 
        <title>Search Insertion</title>
        <link href="..\CSS\search_insertions.css" rel="stylesheet" type="text/css">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <h1 class = "main_title">Affitti Trento</h1>
        <hr>
        <div class = "container">
            <div class = "col-sm-4">
                
                <!-- Here follows the panel with the filters -->
                <div class = "well" id = "filters_div">
                    <h3 class = "filters_title">Filter by zone</h3>
                    <hr>
                    <form id = "filterForm">
                        <input type = "checkbox" name = "Trento" value= "Trento" checked>
                        <label>Trento</label><br>
                        <input type = "checkbox" name = "Povo" value= "Povo">
                        <label>Povo</label><br>
                        <input type = "checkbox" name = "Mesiano" value= "Mesiano">
                        <label>Mesiano</label><br>
                        <input type = "checkbox" name = "Villazzano" value= "Villazzano">
                        <label>Villazzano</label><br>
                        <input type = "checkbox" name = "San Donà" value= "San Donà">
                        <label>San Donà</label><br>
                        <input type = "checkbox" name = "Anywhere" value= "Anywhere">
                        <label>Anywhere</label><br>
                        <br>
                        <h3 class = "filters_title">Filter by price</h3>
                        <hr>
                        <label>Minumum Price</label><br>
                        <input type = "number" name = "minPrice" class = "filters_input"><br>
                        <br>
                        <label>Maximum Price</label><br>
                        <input type = "number" name = "maxPrice" class = "filters_input"><br>
                        <br>
                        <h3 class = "filters_title">Filter by available rooms</h3>
                        <hr>
                        <label>Quantity</label><br>
                        <input type = "number" name = "availableRooms" class = "filters_input"><br>
                        <br>
                        <h3 class = "filters_title">Filter by period of availability</h3>
                        <hr>
                        <label>From</label><br>
                        <input type = "date" name = "fromDate" class = "filters_input"><br>
                        <br>
                        <label>To</label><br>
                        <input type = "date" name = "toDate" class = "filters_input">
                        <hr>
                        <div class = "centered_text">
                            <button type="submit" class="btn btn-primary btn-lg">Apply Filters</button>
                        </div>
                    </form>             
                </div>
            </div>
            
            <!-- Here follow the cards -->
            <div class = "col-sm-3 col-sm-offset-1">
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
            <div class = "col-sm-3">
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
        </div>
        
        
        
        
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
