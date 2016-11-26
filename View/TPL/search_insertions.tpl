<!DOCTYPE html>
<html>

    <head> 
        <title>Search Insertion</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <h1 style = "text-align:center; font-family:Arial Black, Gadget, sans-serif">Affitti Trento</h1>
        <hr>
        <div class = "container">
            <div class = "col-sm-4">
                <div class = "well" style = "background: rgb(216, 216, 208); border-style: solid 2px; border-color:black;">
                    <h3 style = "font-family:Impact, Charcoal, sans-serif;">Filter by zone</h3>
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
                        <h3 style = "font-family:Impact, Charcoal, sans-serif;">Filter by price</h3>
                        <hr>
                        <label>Minumum Price</label><br>
                        <input type = "number" name = "minPrice" style="border-radius: 5px;"><br>
                        <br>
                        <label>Maximum Price</label><br>
                        <input type = "number" name = "maxPrice" style="border-radius: 5px;"><br>
                        <br>
                        <h3 style = "font-family:Impact, Charcoal, sans-serif;">Filter by available rooms</h3>
                        <hr>
                        <label>Quantity</label><br>
                        <input type = "number" name = "availableRooms" style="border-radius: 5px;"><br>
                        <br>
                        <h3 style = "font-family:Impact, Charcoal, sans-serif;">Filter by period of availability</h3>
                        <hr>
                        <label>From</label><br>
                        <input type = "date" name = "fromDate" style="border-radius: 5px;"><br>
                        <br>
                        <label>To</label><br>
                        <input type = "date" name = "toDate" style="border-radius: 5px;">
                        <hr>
                        <div style="text-align:center;">
                            <button type="submit" class="btn btn-primary btn-lg">Apply Filters</button>
                        </div>
                    </form>             
                </div>
            </div>
            <div class = "col-sm-3 col-sm-offset-1">
                <div class = "well" style = "background: rgb(155, 188, 242); border-style: solid 2px; border-color:black;">
                    <img src = "Pictures/house_card_1.jpg" style="height:40%; width:100%; border-radius:15px;">
                    <div style="height:80%">
                        <h4 style = "font-family:Arial Black, Gadget, sans-serif; top:0px;">La casa di Ciccio</h4>
                        <hr>
                        <p>La casa di ciccio è la casa di ciccio. Prima di appartenere a Ciccio apparteneva a Ciccio e si narra
                        che il successore sia nominato e soprannominato Ciccio</p>
                    </div>
                </div>
                <div class = "well" style = "background: rgb(155, 188, 242); border-style: solid 2px; border-color:black;" >
                    <img src = "Pictures/house_card_1.jpg" style="height:40%; width:100%; border-radius:15px;">
                    <div style="height:80%">
                        <h4 style = "font-family:Arial Black, Gadget, sans-serif; top:0px;">La casa di Ciccio</h4>
                        <hr>
                        <p>La casa di ciccio è la casa di ciccio. Prima di appartenere a Ciccio apparteneva a Ciccio e si narra
                        che il successore sia nominato e soprannominato Ciccio</p>
                    </div>
                </div>
            </div>
            <div class = "col-sm-3">
                <div class = "well" style = "background: rgb(155, 188, 242); border-style: solid 2px; border-color:black;" >
                    <img src = "Pictures/house_card_1.jpg" style="height:40%; width:100%; border-radius:15px;">
                    <div style="height:80%">
                        <h4 style = "font-family:Arial Black, Gadget, sans-serif; top:0px;">La casa di Ciccio</h4>
                        <hr>
                        <p>La casa di ciccio è la casa di ciccio. Prima di appartenere a Ciccio apparteneva a Ciccio e si narra
                        che il successore sia nominato e soprannominato Ciccio</p>
                    </div>
                </div>
                <div class = "well" style = "background: rgb(155, 188, 242); border-style: solid 2px; border-color:black;" >
                    <img src = "Pictures/house_card_1.jpg" style="height:40%; width:100%; border-radius:15px;">
                    <div style="height:80%">
                        <h4 style = "font-family:Arial Black, Gadget, sans-serif; top:0px;">La casa di Ciccio</h4>
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
