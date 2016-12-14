var db = require('../Model/DB_manager');        // requiring db_manager
var bind = require('bind');                     // requiring bind, in order to return templates 

var insertions_photos_folder = "insertions";                    // the name of the directory where we save the photos of the insertions
var error_message_prefix = "An error occured. Please contact the webmaster at_support@gmail.com with this message: ";   // error message prefix
var to_bind_file_path;                                          // the file the function should bind
var http_status;                                                // the http status
var message;                                                    // error message to display to the users


/*
 * @brief search through the db in order to find the insertion that has
 * the givem title. It handles error codes, and return the insertion_page template
 * @param req. http request
 * @param res. htpp response
 */
var card  = function(req, res) 
{
    var insertionist = {nickname:null, password:null, email:null, phone_number:null, profile_photo_path:null};
    var Insertion = {title:req.query.title, description:null, available_rooms:null, rooms_typology:null, house_typology:null, free_from:null, address:null, locality:null, price_per_person:null, photo_path:null, nickname:null};
    code = db.get_insertion(Insertion);

    switch (code) { // setting the http status and eventually the proper error message basing on the 'code' returned by db manager
        case  1:    insertionist.nickname = Insertion.nickname;
                    var user_code = db.verify_user(insertionist);
                    switch (user_code) {
                        case 1: to_bind_file_path = __dirname + '/../View/TPL/insertion_page.tpl'; http_status = 200; break;
                        default: message = error_message_prefix + "\"search_controller card - user_code - error, code " + user_code + "  " + new Date()  + "\""; 
                                 http_status = 500; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';
                    }
                    break;
        case -1:    message = "Insertion not found";  
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 404; break;
        default:    message = error_message_prefix + "\"search_controller card - error, code " + code + "  " + new Date()  + "\""; 
                    http_status = 500; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';
    }
    
    res.writeHead(http_status, {'Content-Type': 'text/html'});  // write the proper set header

    bind.toFile( to_bind_file_path, {                   // bind to tpl
        title : Insertion.title,                        // set the attributes
        description : Insertion.description,            // ...
        available_rooms : Insertion.available_rooms,    // ...
        rooms_typology : Insertion.rooms_typology,      // ...
        house_typology : Insertion.house_typology,      // ...
        free_from : Insertion.free_from,                // ...
        address : Insertion.address,                    // ...
        locality : Insertion.locality,                  // ...
        price_per_person : Insertion.price_per_person,  // ...
        photo_src : Insertion.photo_path,               // ...
        nickname : insertionist.nickname,               // ...
        phone_number : insertionist.phone_number,       // ...
        email : insertionist.email,                     // ...
        message : message                               // ...
    }, function(data) { res.end(data); });              // return the tpl
}


/*
 *
 * @param req
 * @param res
 */
var search  = function(req, res) 
{
    var Insertions = {data:[]};
   
       var house = null; 
    if (req.query.house_typology) {
        if (Array.isArray(req.query.house_typology)) {
            house = req.query.house_typology.join("+");
        }
        else {
            house = req.query.house_typology;
        }
    }

    var rooms = null; 
    if (req.query.rooms_typology) {
        if (Array.isArray(req.query.rooms_typology)) {
            rooms = req.query.rooms_typology.join("+");
        }
        else {
            rooms = req.query.rooms_typology;
        }
    }
    
    var loc = null; 
    if (req.query.locality) {
        if (Array.isArray(req.query.locality)) {
            loc = req.query.locality.join("+");
        }
        else {
            loc = req.query.locality;
        }
    }
    
    var date = null;
    if (req.query.free_from) {
        date = req.query.free_from.split("-").reverse().join("_");
    }
    
    var room_num = null;
    if (req.query.available_rooms) {
        room_num = req.query.available_rooms;
    }
    
    var price = null;
    if (req.query.price_per_person) {
        price = req.query.price_per_person;
    }

    code = db.search_insertions(Insertions, house, rooms, loc, room_num, price, date, null);
    
    switch (code) { // setting the http status and eventually the proper error message basing on the 'code' returned by db manager
        case  1:    to_bind_file_path = __dirname + '/../View/TPL/search_insertions.tpl'; http_status = 200; break;
        case -1:    message = "There isn't any insertion that matches the filters you set. Try again";  
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 200; break;
        default:    message = error_message_prefix + "\"search_controller search - error, code " + code + "  " + new Date()  + "\""; 
                    http_status = 500; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';
    }
    
    res.writeHead(http_status, {'Content-Type': 'text/html'});  // write the proper set header

    bind.toFile( to_bind_file_path, {                   // bind to tpl
        data : Insertions.data,                         // set attributes
        message : message                               // ...
    }, function(data) { res.end(data); });              // return the tpl
    
}




// export these two functions
exports.search = search;
exports.card = card;