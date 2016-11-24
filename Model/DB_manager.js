var TAFFY = require("node-taffydb").TAFFY;          // TAFFY module, in order to manage the db
var fs = require("fs");                             // fs to read the json files


/*
 * @brief This method adds a new user to the database. First of all, it reads the file, then checks
 * if there have already been inserted another user with the same nickname. if it is the case, it 
 * returns. Otherwise, it continues and, once inserted the new user, re-write the file. 
 * @param nickname. The user nickname, that uniquely identifies a person.
 * @param password. Its password.
 * @param email. Its email
 * @param phone_number. Its phone number
 * @return a code number
 *  1 everything went ok, user inserted
 * -1 nickname already present, user not inserted
 * -2 read file error
 * -3 write file error
 */
var add_user_to_db = function (nickname, password, email, phone_number) 
{
    var returning_value = 1;                                                            // the number code that is going to be returned
        
    fs.readFile(__dirname + "/data/users.json", 'utf8', function (err, data) {          // reading the file
        if (err) {                                                                      // if error, log the error and set the returning value
            console.log(err);
            returning_value =  -2;
        }
        else {
            data = JSON.parse(data);                                                    // otherwise, parse the data 
            users = TAFFY(data["users"]);                                               // create a DB on the fly with TAFFY command, selecting the 'users' object
            if (users({nickname:nickname}).count() > 0) {                               // if there aren't users with the same nickname, insert the user and write down the file
                users.insert({nickname:nickname, password:password, email:email, phone_number:phone_number});
                fs.writeFile( (__dirname + "/" + "users.json"), '{"users":' + users().stringify() + '}' , function (err) {
                    if (err) {                                                          // if there's an error, log it and set the returning value
                        console.log(err);
                        returning_value = -3;
                    }
                });
            }
            else 
                returning_value = -1;                                                   // else, set the returning value to -1
        }
    });
    
    return returning_value;                                                             // finally, return
}













/*
 * @brief This method just authenticates a users. It reads the file, then do its checks.
 * @param nickname. The user nickname
 * @param password. Its password.
 * @return an object filled with the user data (filled of null if there's no user that matches the parameters), otherwise a code number error
 * -2 read file error
 */
var verify_user_presence = function (nickname, password) 
{
    var returning_value = {"nickname":null, "password":null, "email":null, "phone_number":null};
    
    fs.readFile(__dirname + "/data/users.json", 'utf8', function (err, data) {  // reading the file
        if (err) {                                                              // if error, log the error and set the returning value
            console.log(err);
            returning_value =  -2;
        }
        else {
            data = JSON.parse(data);                                            // otherwise, parse the data 
            users = TAFFY(data["users"]);                                       // create a DB on the fly with TAFFY command, selecting the 'users' object
            var query = users({nickname:nickname, "password":password});        // execute the query
            if (query.count() == 1) {                                           // if there is a match
                returning_value.nickname = query.nickname;
                returning_value.password = query.password;
                returning_value.email = query.email;
                returning_value.phone_number = query.phone_number;
            }
                
        }
    });
    
    return returning_value;                                                     // finally, return
}






























//User verify_user(username,password)



/*
 * this method just add an insertion to the insertions.json file. More in detail, it tries
 * to read the file from the 'data' directory.
 * @param req
 * @param res
 */
var add_insertion_to_db  = function(id, description) 
{  
    fs.readFile(__dirname + "/data/insertions.json", 'utf8', function (err, data) {
        if (err) return err;
        else {
            data = JSON.parse(data);
            insertions = TAFFY(data["insertions"]);
            insertions({id:1}).update({description: "DOVAHKIIN"});
            fs.writeFile( (__dirname + "/" + "insertions.json"), '{"insertions":' + insertions().stringify() + '}' , function (err) {
                if (err) return err;
            });
        }
    });
    return "cosa???";
}



exports.add_user = add_user_to_db;
exports.verify_user = verify_user_presence;
exports.add_insertion = add_insertion_to_db;
