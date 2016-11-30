var db = require('../Model/db_manager');        // requiring db_manager
var bind = require('bind');                     // requiring bind, in order to return templates 

/*
 * @brief this method receives the request forwarded by the index.js file for the "/login" route.
 * It authenticates the user, and handle the returned code from the db_manager. Ir returns the 
 * user.tpl template if everything is succesful, an error page otherwise
 * @param req. http request
 * @param res. http response
 */
var login  = function(req, res) {
    var User_to_authenticate = {nickname:req.body.nickname, password:req.body.password, email:null, phone_number:null, profile_photo_path:null};
    var code = db.verify_user(User_to_authenticate);            // login the user through the DB_manager
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (code == 1) {                                                // user authenticated
        bind.toFile( __dirname + '/../View/TPL/user.tpl', {         // bind to tpl
            nickname : User_to_authenticate.nickname,               // set the attributes
            photo_src : User_to_authenticate.profile_photo_path     // ...
        }, function(data) { res.end(data); });                      // return the tpl
    }
    else {
        var message;            // error message to display to the user
        switch (code) {         // set the error message basing on the returned code
            case -1: message = "wrong password or nickname, try again"; break;
            case -2: message = "read users.json file error. Please contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com with this email: \"read users.json file error code 2\""; break;
            default: message = "Unknown error. Please contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com with this email: \"read users.json file error code " + code +"\"";
        }                       // then bind the tpl, set attributes and return the tpl
        bind.toFile( __dirname + '/../View/TPL/error_page.tpl', {
            error_message : message 
        },      
        function(data) {
            res.end(data); 
        });                     
    }
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
    var code = db.add_user(User_to_insert);
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    
    
    
    
    
    
    
    
    // sistema come il login
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    switch (code) {
    case 1:
        var photo_code = db.save_photo(req, relative_photo_path, "users");  
        switch (photo_code) {
            case 1:
                bind.toFile( __dirname + '/../View/TPL/user.tpl', {
                    nickname : User_to_insert.nickname,
                    photo_src : User_to_insert.profile_photo_path
                }, function(data) { res.end(data); });
                break;
            case -4:
                res.end("error code 4, photo error. Check your photo consistency (only png and jpg format). If the error persist, contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
                break;
            case -5:
                res.end("error code 5, photo error. Try again. If the error persist, contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
                break;
            default:
                res.end("undefined error, " + code + ". Contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
        }  
        break;
    case -1:
        res.end("user not registered, nickname already present");
        break;
    case -2:
        res.end("read file error. Contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
        break;
    case -3:
        res.end("write file error. Contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
        break;
    default:
        res.end("undefined error, " + code + ". Contact the webmaster zaragiacomo95@gmail.com or sb.berlatostefano@gmail.com");
    }
}


// export these two functions
exports.login = login;
exports.register = register;