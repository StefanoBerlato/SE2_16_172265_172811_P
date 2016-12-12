var db = require('../Model/db_manager');        // requiring db_manager
var bind = require('bind');                     // requiring bind, in order to return templates 

var insertions_photos_folder = "insertions";                    // the name of the directory where we save the photos of the insertions
var error_message_prefix = "An error occured. Please contact the webmaster at_support@gmail.com with this message: ";   // error message prefix
var User_pushing_data = {nickname:null, password:null, email:null, phone_number:null, profile_photo_path:null};         // the user that's forwarding the request
var to_bind_file_path;                                          // the file the function should bind
var http_status;                                                // the http status
var message;                                                    // error message to display to the users


/*
 * @brief This method authenticates the user that is pushing the new insertion. If he's ok, it 
 * adds the insertion to the db through the db manager. Invokes the response function to respond
 * @param req. http request
 * @param res. http response
 */
var add_insertion  = function(req, res) { 
    
    if (authenticate_user (req.body.nickname, req.body.password) == 1) {                // go on only if the user has been verified
        var relative_photo_path = (new Date().getTime()) + "_" + req.file.originalname; // the relative photo path
        var new_insertion_to_add = {title:req.body.title, 
                                    description:req.body.description, 
                                    available_rooms:req.body.available_rooms, 
                                    rooms_typology:req.body.rooms_typology, 
                                    house_typology:req.body.house_typology, 
                                    free_from:req.body.free_from, 
                                    address:req.body.address, 
                                    locality:req.body.locality, 
                                    price_per_person:req.body.price_per_person,
                                    photo_path:relative_photo_path, 
                                    nickname:req.body.nickname};                                             // the insertion that is going to be added in the db
        var add_code = db.add_insertion(new_insertion_to_add);                          // try to add the insertion
        switch (add_code) {                                                             // switch based on the code
        case 1:     var photo_code = db.save_photo(req, relative_photo_path, insertions_photos_folder);         // if 1, the insertion was succesfully inserted 
                    switch (photo_code) {                                                                       // so try to save the photo too 
                    case  1:    to_bind_file_path = __dirname + '/../View/TPL/user.tpl';                            // if 1, the photo is saved. Everything went ok 
                                http_status = 200; break; 
                    default:    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';                      // if not, there was a server error
                                http_status = 500;  
                                var delete_insertion_code = db.delete_insertion_from_db(new_insertion_to_add);      // Try to rollback
                                switch (delete_insertion_code) {                                                        // if 1, rollback succesfull. Otherwise, notificate the error
                                    case 1 :    message = error_message_prefix + "\"insertion add save_photo - error - code " + delete_insertion_code + "  " + new Date()  + "\""; 
                                                break;
                                    default:    message = error_message_prefix + "\"insertion add save_photo delete_insertion - error - code " + delete_insertion_code + "  " + new Date()  + "\""; 
                            } 
                    }  
                    break; 
        case -1:    message = "Sorry, the title is already in use. Please try again with a different title";    // if -1, the title of the insertion was already in use. Otherwise, error
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500; break;
        default:    message = error_message_prefix + "\"insertion add - error - code " + add_code + "  " + new Date()  + "\""; 
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500;
        }
    }
    
    response (res);
}


/*
 * @brief This method authenticates the user that is updating the insertion. If he's ok, it 
 * modifies the insertion in the db through the db manager. Invokes the response function to respond
 * @param req. http request
 * @param res. http response
 */
var modify_insertion  = function(req, res) {
    
    if (authenticate_user (req.body.nickname, req.body.password) == 1) {                // go on only if the user has been verified
        var relative_photo_path = (new Date().getTime()) + "_" + req.file.originalname; // the relative photo path
        var insertion_to_update = {title:req.body.title, 
                                    description:req.body.description, 
                                    available_rooms:req.body.available_rooms, 
                                    rooms_typology:req.body.rooms_typology, 
                                    house_typology:req.body.house_typology, 
                                    free_from:req.body.free_from, 
                                    address:req.body.address, 
                                    locality:req.body.locality, 
                                    price_per_person:req.body.price_per_person,
                                    photo_path:relative_photo_path, 
                                    nickname:req.body.nickname};                                              // the insertion that is going to be update in the db
        var update_code = db.modify_insertion(insertion_to_update);                     // try to modify the insertion
        switch (update_code) {                                                          // switch based on the code
        case 1:     var photo_code = db.save_photo(req, relative_photo_path, insertions_photos_folder);         // if 1, the insertion was succesfully updated
                    switch (photo_code) {                                                                       // try to update the photo 
                    case  1:    to_bind_file_path = __dirname + '/../View/TPL/user.tpl';                            // if 1, the photo is saved. Everything went ok 
                                http_status = 200; break; 
                    default:    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';                      // if not, there was a server error. Notificate it to the user
                                http_status = 500;      
                                message = error_message_prefix + "\"insertion update save_photo - error - code " + delete_insertion_code + "  " + new Date()  + "\""; 
                                message = message + ". The data of your insertions were updated, but there were some problems with the photo. Try again";
                    }  
                    break;                                                                                      // break 1 and go further with other cases (insertion not present, errors)
        case -1:    message = "There isn't any insertion with that title... If you think there is an error, contact the webmaster at_support@gmail.com"; 
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500; break;
        default:    message = error_message_prefix + "\"insertion update - error - code " + add_code + "  " + new Date()  + "\""; 
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500;
        }
    }
    
   response (res);
}


/*
 * @brief This method authenticates the user that wants to delete the insertion. If he's ok, it actually
 * deletes the insertion from the db through the db manager. Invokes the response function to respond
 * @param req. http request
 * @param res. http response
 */
var delete_insertion  = function(req, res) {

    if (authenticate_user (req.body.nickname, req.body.password) == 1) {                // go on only if the user has been verified
        var insertion_to_delete =  {title:req.body.title};                              // the insertion that is going to be deleted from the db
        var delete_code = db.delete_insertion(insertion_to_delete);                     // try to delete the insertion
        switch (delete_code) {                                                          // switch based on the returned code
        case  1:    to_bind_file_path = __dirname + '/../View/TPL/user.tpl';            // if 1, the insertion has been deleted. Otherwise, error
                    http_status = 200; break; 
        case -1:    message = "There isn't any insertion with that title... If you think there is an error, contact the webmaster at_support@gmail.com"; 
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500; break;
        default:    message = error_message_prefix + "\"insertion delete - error - code " + add_code + "  " + new Date()  + "\""; 
                    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500;
        }
    }
    
    response (res);
}


// export these three functions
exports.add_insertion = add_insertion;
exports.modify_insertion = modify_insertion;
exports.delete_insertion = delete_insertion;


/*
 * @brief internal procedure that authenticates the user
 * @return the code returned by the dn manager module
 */
function authenticate_user (nickname, password) {
    User_pushing_data.nickname = nickname;                  // setting nickname and password
    User_pushing_data.password = password;
    var code = db.verify_user(User_pushing_data);           // verify the user through the DB_manager, that returns a status code
    
    switch (code) {                                         // setting the http status and eventually the proper error message basing on the 'code' returned by db manager
        case  1:    break;                                  // 1 user authenticated, -1 wrong credentials, otherwise server error 
        case -1:    message = "It seems like you are not a regulare user... If you think there is an error, contact the webmaster at_support@gmail.com";  
                    http_status= 200; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; break;
        default:    message = error_message_prefix + "\"insertion authenticate_user - error, code " + code + "  " + new Date()  + "\""; 
                    http_status = 500; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';
    }
    
    return code;                                            // return the code
}


/*
 * @brief internal procedure that responds returning the user.tpl with all the parameters
 * @param res
 */
function response (res) {

    res.writeHead(http_status, {'Content-Type': 'text/html'});  // write the proper set header

    bind.toFile( to_bind_file_path, {                           // bind to tpl
        nickname : User_pushing_data.nickname,                  // set the attributes
        password : User_pushing_data.password,                  // ...
        photo_src : User_pushing_data.profile_photo_path,       // ...
        phone_number : User_pushing_data.phone_number,          // ...
        email : User_pushing_data.email,                        // ...
        message : message                                       // ...
    }, function(data) { res.end(data); });                      // return the tpl
}