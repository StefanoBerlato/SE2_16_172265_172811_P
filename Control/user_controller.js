var db = require('../Model/db_manager');         // requiring db_manager


/*
 *
 * @param req
 * @param res
 */
var login  = function(req, res) 
{
    var User_to_authenticate = {nickname:"nickname5", password:"password5", email:null, phone_number:null, profile_photo_path:null};
    code = db.verify_user(User_to_authenticate);
    console.log("login try");
    console.log(code);
    console.log(User_to_authenticate);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("login in POST");
}

/*
 *
 * @param req
 * @param res
 */
var register  = function(req, res) 
{
    var User_to_insert = {nickname:"nickname4", password:"password4", email:"4", phone_number:"4", profile_photo_path:"4"};
    code = db.add_user(User_to_insert);
    console.log("register try");
    console.log(code);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("register in POST");
}


// export these two functions
exports.login = login;
exports.register = register;