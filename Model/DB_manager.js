var TAFFY = require("node-taffydb").TAFFY;          // TAFFY module, in order to manage the db
var fs = require("fs");                             // fs to read the json files


/*
 * @brief This method adds a new user to the database. First of all, it reads the file, then checks
 * if there have already been inserted another user with the same nickname. If this is the case, it 
 * returns. Otherwise, it continues and, once inserted the new user, re-writes the file. 
 * @param User. The user to insert in the db
 * @return a code number
 *  1 everything went ok, user inserted
 * -1 nickname already present, user not inserted
 * -2 read file error
 * -3 write file error
 */
var add_user_to_db = function (User) {
    var users = {data:""};                                      // the object that will contain the db data about users
    var object = "users";                                       // the object of the json file the function has to read    
    var users_file_path = __dirname + "/data/users.json";       // users json file path
    var returning_value;                                        // the number code that is going to be returned

    if ( (returning_value = read_db(users_file_path,object,users)) == 1) {  // if there were no errors while reading the file
        if (users.data({nickname:User.nickname}).count() != 1 ) {               // if there aren't users with the same nickname, insert the new user and write down the file
            users.data.insert({  nickname:User.nickname,                        // insert query
                            password:User.password, 
                            email:User.email, 
                            phone_number:User.phone_number}
                        );
            returning_value = write_db (users_file_path, object, users.data);   // write down the db trough the write_db function, and set the returning value
        }
        else                                                                    // otherwise, if the user was already inserted
            returning_value = -1;                                               // set the returning value to -1
    }
    return returning_value;                                                 // return the code number
}    


/*
 * @brief  This method just authenticates a user. It reads the file, then does its checks through a select query. If the  
 * user is present in the db, the function fills the given object with his data. Otherwise, it fills it with null values.
 * @param User. The user to authenticate.
 * @return a code number
 *  1 everything went ok, user authenticated
 * -1 user not present, so user not authenticated
 * -2 read file error
 */
var verify_user_presence = function (User) {
    var users = {data:""};                                      // the object that will contain the db data about users
    var object = "users";                                       // the object of the json file the function has to read    
    var users_file_path = __dirname + "/data/users.json";       // users json file path
    var returning_value;                                        // the number code that is going to be returned

    if ( (returning_value = read_db(users_file_path,object,users)) == 1) {      // if there were no errors while reading the file
        var query = users.data({nickname:User.nickname, password:User.password});   // execute the query
        if (query.count() == 1) {                                                   // if there is a match                                            
            query = query.first();                                                  // take the first (and only) record
            User.email = query.email;                                               // fills the User object
            User.phone_number = query.phone_number;
        }
        else {                                                                      // else, if there's no match
            returning_value = -1;                                                   // set the returning value to -1
            User.nickname = null;                                                   // fills the User object with null values
            User.password = null;
        }
    }
    return returning_value;                                                     // finally, return
                                                        
}


/*
 * @brief  This method just reads a specific object of a json file, and turns it into a taffy db
 * @param file_path. The path of the json file
 * @param object_name. The object to be read.
 * @param container. The object that will contain the db
 * @return a code number:
 *  1 everything went well
 * -2 read file error
 */
function read_db (file_path, object_name, container) {
    try {                                                                   // try
        var data = JSON.parse(fs.readFileSync(file_path, "utf8"));          // read the json file in a sync way.
        container.data = TAFFY(data[object_name]);                          // create a DB on the fly with TAFFY command, selecting the 'object_name' object
        return 1;                                                           // return the 'everything ok' code number
    } 
    catch (err) {                                                           // if this is the case, catch the error
        console.log(err);                                                   // print the error
        return -2;                                                          // return the error code number
    }
}


/*
 * @brief  This method just writes down a json file from a taffy db as a single json object with name "object_name".
 * @param file_path. The path of the json file.
 * @param object_name. The object that is going to wrap the data
 * @param db. The taffy db
 * @return a code number:
 *  1 everything went well
 * -3 write file error
 */
function write_db (file_path, object_name, db) {
    try {                                                                   // try to write down the db
        fs.writeFileSync( file_path, '{"' + object_name + '":' + db().stringify() + '}');
        return 1;                                                           // return the 'everything ok' code number
    } 
    catch (err) {                                                           // if this is the case, catch the error
        console.log(err);                                                   // print the error
        return -3;                                                          // return the error code number
    }
}
















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
