var db = require('../Model/db_manager');        // requiring db_manager
var bind = require('bind');                     // requiring bind, in order to return templates 

var users_photos_folder = "users";              // the name of the directory where we save the users' photos
var error_message_prefix = "An error occured. Please contact the webmaster at_support@gmail.com with this messagge: ";

/*
 * @brief this method receives the request forwarded by the index.js file for the "/login" route.
 * It authenticates the user, and handle the returned code from the db_manager. Ir returns the 
 * user.tpl template if everything is succesful, an error page otherwise
 * @param req. http request
 * @param res. http response
 */
var login  = function(req, res) {
    var User_to_authenticate = {nickname:req.body.nickname, password:req.body.password, email:null, phone_number:null, profile_photo_path:null};
    var code = db.verify_user(User_to_authenticate);                // login the user through the DB_manager, that returns a status code
    var http_status = 200;                                          // the http status (by default 200 ok)
    var to_bind_file_path = __dirname + '/../View/TPL/user.tpl';    // the file the function should bind (by default, the user.tpl page)
    var message = "none";                                           // error message to display to the user (by default, none)
    
    switch (code) {                                                 // setting the http status and eventually the proper error message basing on the 'code' returned by db manager
        case  1:    break;                                          // 1 user authenticated, -1 wrong credentials, otherwise server error 
        case -1:    message = "wrong password or nickname, try again";  to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; break;
        default:    message = error_message_prefix + "\"user - login - error, code " + code + "  " + new Date()  + "\""; 
                    http_status = 500; to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl';
    }
    console.log("code ", code);
    console.log("message ", message);
    console.log("http_status ", http_status);
    console.log("to_bind_file_path ", to_bind_file_path);    
    res.writeHead(http_status, {'Content-Type': 'text/html'});      // write the proper set header
        bind.toFile( to_bind_file_path, {                           // bind to tpl
            nickname : User_to_authenticate.nickname,               // set the attributes
            photo_src : User_to_authenticate.profile_photo_path,    // ...
            phone_number : User_to_authenticate.phone_number,       // ...
            email : User_to_authenticate.email,                     // ...
            error_message : message                                 // ...
        }, function(data) { res.end(data); });                      // return the tpl
}


/*
 * @brief this method receives the request forwarded by the index.js file for the "/register" route.
 * It registrates the user, and handle the returned code from the db_manager. Ir returns the 
 * user.tpl template if everything is succesful, an error page otherwise
 * @param req. http request
 * @param res. http response
 */
var register  = function(req, res) {
    var relative_photo_path = (new Date().getTime()) + "_" + req.file.originalname;  
    var User_to_insert = {nickname:req.body.nickname, password:req.body.password, email:req.body.email, phone_number:req.body.phone_number, profile_photo_path:relative_photo_path};
    var code = db.add_user(User_to_insert);                         // register the user through the DB_manager, that returns a status code
    var http_status = 200;                                          // the http status (by default 200 ok)
    var to_bind_file_path = __dirname + '/../View/TPL/user.tpl';    // the file the function should bind (by default, the user.tpl page)
    var message = "none";                                           // error message to display to the user (by default, none)
      
    switch (code) {                                                 // setting the http status and eventually the proper error message basing on the codes returned by db manager
    case 1:     var photo_code = db.save_photo(req, relative_photo_path, users_photos_folder);  
                switch (photo_code) {                               // if 1, the photo is saved. Else, there was an error with the photo, so delete the user
                case  1:    break;  
                default:    to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; 
                            http_status = 500;
                            var delete_user_code = db.delete_user(User_to_insert);
                            switch (delete_user_code) {             // if 1, the user is deleted. Otherwise, notificate the two errors (save_photo and delete_user)
                                case 1 :    message = error_message_prefix + "\"user register save_photo delet_user - error - code " + delete_user_code + "  " + new Date()  + "\""; 
                                            break;
                                default:    message = error_message_prefix + "\"user register save_photo - error - code " + code + "  " + new Date()  + "\""; 
                        } 
                }  
                break; 
    case -1:    message = "Sorry, someone else has already used your nickname. Please try again with a different nickname"; 
                to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; break;
    default:    message = error_message_prefix + "\"user register - error - code " + code + "  " + new Date()  + "\""; 
                to_bind_file_path = __dirname + '/../View/TPL/error_page.tpl'; http_status = 500;
    }
    
    res.writeHead(http_status, {'Content-Type': 'text/html'});      // write the proper set header
        bind.toFile( to_bind_file_path, {                           // bind to tpl
            nickname : User_to_insert.nickname,                     // set the attributes
            photo_src : User_to_insert.profile_photo_path,          // ...
            phone_number : User_to_insert.phone_number,             // ...
            email : User_to_insert.email,                           // ...
            error_message : message                                 // ...
        }, function(data) { res.end(data); });                      // return the tpl   
}


// export these two functions
exports.login = login;
exports.register = register;