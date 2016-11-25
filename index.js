// collecting libraries
var bind = require('bind');                 // bind library
var express = require('express');           // express library
var app = express();                        // instantiate express
var bodyParser = require('body-parser');    // setting up the body parser, in order to get the parameters from the post requestes

var search_controller = require('./Control/search_controller');         // requiring search_controller
var user_controller = require('./Control/user_controller');             // requiring user_controller
var insertion_controller = require('./Control/insertion_controller');   // requiring insertion_controller


app.use(bodyParser.urlencoded({ extended: false }));    // in order to parse the requestes in 'post'
app.use(express.static(__dirname + '/View'));           // add the content of the directory to the data sent to the user


/*
 *  this sorts the requestes for the '/' route in get
 */
app.get('/', function(req, res) 
{
    bind.toFile(__dirname + '/home_page.html', {},  
    function(data) 
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});


// these sort the requestes for the '/search' - '/card' routes in GET to the search_controller module
app.get('/search', function(req, res) { search_controller.search(req, res); });
app.get('/card',   function(req, res) { search_controller.card(req, res);   });


// thess sort the requestes for the '/login' - '/register' routes in POST to the user_controller module
app.post('/login',    function(req, res) { user_controller.login(req, res);    });
app.post('/register', function(req, res) { user_controller.register(req, res); });


//this sorts the requestes for the '/add_insertion' route in POST to the insertion_controller module
app.post('/add_insertion',    function(req, res) { insertion_controller.add_insertion(req, res);    });
app.post('/modify_insertion', function(req, res) { insertion_controller.modify_insertion(req, res); });
app.post('/delete_insertion', function(req, res) { insertion_controller.delete_insertion(req, res); });


app.set('port', (process.env.PORT || 5000));    // set the port of the application
app.listen(app.get('port'), function() {        //let the server waiting for connections
  console.log('Node app is running on port', app.get('port'));
});