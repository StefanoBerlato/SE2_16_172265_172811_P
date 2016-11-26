var TAFFY = require("node-taffydb").TAFFY;          // TAFFY module, in order to manage the db
var fs = require("fs");                             // fs to read the json files

var users_file_path = __dirname + "/data/users.json";               // users json file path
var insertions_file_path = __dirname + "/data/insertions.json";     // insertions json file path
var users_data_wrapper = "user";                                    // the object that, in the users json file, wraps the data
var insertions_data_wrapper = "insertions";                         // the object that, in the insertions json file, wraps the data


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
    var returning_value;                                        // the number code that is going to be returned

    if ( (returning_value = read_db(users_file_path,users_data_wrapper,users)) == 1) {  // if there were no errors while reading the file
        if (users.data({nickname:User.nickname}).count() != 1 ) {                           // if there aren't users with the same nickname, insert the new user and write down the file
            users.data.insert({  nickname:User.nickname,                                    // insert query
                            password:User.password, 
                            email:User.email, 
                            phone_number:User.phone_number,
                            profile_photo_path:User.profile_photo_path});
            returning_value = write_db (users_file_path, users_data_wrapper, users.data);   // write down the db trough the write_db function, and set the returning value
        }
        else                                                                                // otherwise, if the user was already inserted
            returning_value = -1;                                                           // set the returning value to -1
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
    var returning_value;                                        // the number code that is going to be returned

    if ( (returning_value = read_db(users_file_path,users_data_wrapper,users)) == 1) {  // if there were no errors while reading the file
        var query = users.data({nickname:User.nickname, password:User.password});   // execute the query
        if (query.count() == 1) {                                                   // if there is a match                                            
            query = query.first();                                                  // take the first (and only) record
            User.email = query.email;                                               // fills the User object
            User.phone_number = query.phone_number;
            User.profile_photo_path = query.profile_photo_path;
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
 * this method just add an insertion to the insertions.json file. More in detail, it reads the file from the 'data' directory.
 * Then, if there are not other insertions with the same title, it adds it to the db and writes it down.
 * @param Insertion. The Insertion to insert in the db
 * @return a code number
 *  1 everything went ok, Insertion inserted
 * -1 title already present, Insertion not inserted
 * -2 read file error
 * -3 write file error
 */
var add_insertion_to_db  = function(Insertion) {  
    var insertions = {data:""};                                         // the object that will contain the db data about insertions
    var returning_value;                                                // the number code that is going to be returned

    if ( (returning_value = read_db(insertions_file_path,insertions_data_wrapper,insertions)) == 1) {  // if there were no errors while reading the file
        if (insertions.data({title:Insertion.title}).count() != 1 ) {                                   // if there aren't insertions with same title, insert the new one and write down the file
            insertions.data.insert({title:Insertion.title,                                              // insert query
                                    description:Insertion.description,  
                                    available_rooms:Insertion.available_rooms,  
                                    rooms_typology:Insertion.rooms_typology,  
                                    house_typology:Insertion.house_typology,  
                                    free_from:Insertion.free_from,  
                                    address:Insertion.address,  
                                    locality:Insertion.locality,  
                                    price_per_person:Insertion.price_per_person,  
                                    photo_path:Insertion.photo_path,  
                                    nickname:Insertion.nickname}
                        );
            returning_value = write_db (insertions_file_path, insertions_data_wrapper, insertions.data);// write down the db trough the write_db function, and set the returning value
        }
        else                                                                                            // otherwise, if the insertion was already inserted
            returning_value = -1;                                                                       // set the returning value to -1
    }
    return returning_value;                                                                 // return the code number
}


/*
 * this method retrieves the data from the db. Then, if the insertion to modify is present in the db,
 * it updates its attributes and writes the db down. Otherwise, set an error code number.
 * @param Insertion. The Insertion to update in the db
 * @return a code number
 *  1 everything went ok, Insertion updated
 * -1 title not present, Insertion not updated
 * -2 read file error
 * -3 write file error
 */
var modify_insertion_in_db = function (Insertion) {
    var insertions = {data:""};                                         // the object that will contain the db data about insertions
    var returning_value;                                                // the number code that is going to be returned

    if ( (returning_value = read_db(insertions_file_path,insertions_data_wrapper,insertions)) == 1) {  // if there were no errors while reading the file
        if (insertions.data({title:Insertion.title}).count() == 1 ) {                                   // if there is an insertion with the same title
            insertions.data({title:Insertion.title}).update({                                           // update query
                                    description:Insertion.description,  
                                    available_rooms:Insertion.available_rooms,  
                                    rooms_typology:Insertion.rooms_typology,  
                                    house_typology:Insertion.house_typology,  
                                    free_from:Insertion.free_from,  
                                    address:Insertion.address,  
                                    locality:Insertion.locality,  
                                    price_per_person:Insertion.price_per_person,  
                                    photo_path:Insertion.photo_path,  
                                    nickname:Insertion.nickname}
                        );
            returning_value = write_db (insertions_file_path, insertions_data_wrapper, insertions.data);// write down the db trough the write_db function, and set the returning value
        }
        else                                                                                            // otherwise, if the insertion was already inserted
            returning_value = -1;                                                                       // set the returning value to -1
    }
    return returning_value;                                                             // return the code number
}


/*
 * this method retrieves the data from the db. Then, if the insertion to delete is present in the db,
 * it removes it and writes the db down. Otherwise, set an error code number.
 * @param Insertion. The Insertion to delete in the db
 * @return a code number
 *  1 everything went ok, Insertion deleted
 * -1 insertion not present, Insertion not deleted
 * -2 read file error
 * -3 write file error
 */
var delete_insertion_from_db = function (Insertion) {
    var insertions = {data:""};                                         // the object that will contain the db data about insertions
    var returning_value;                                                // the number code that is going to be returned

    if ( (returning_value = read_db(insertions_file_path,insertions_data_wrapper,insertions)) == 1) {  // if there were no errors while reading the file
        if (insertions.data({title:Insertion.title}).count() == 1 ) {                                       // if there is an insertion with the same title
            insertions.data({title:Insertion.title}).remove();                                              // remove query
            returning_value = write_db (insertions_file_path, insertions_data_wrapper, insertions.data);    // write down the db trough the write_db function, and set the returning value
        }
        else                                                                                                // otherwise, if the insertion was already inserted
            returning_value = -1;                                                                           // set the returning value to -1
    }
    return returning_value;                                                             // return the code number
}


/*
 * this method retrieves insertions from the db basing on the filters.
 * @param Insertion[]. The insertion array that will be filled with insertions that match filters.
 * @param Insertion_filter. The insertion that contains filters. If a filter was not specified, it should be set to null
 * @return a code number
 *  1 everything went ok, one or more matches found
 * -1 not match found
 * -2 read file error
 */
var search_insertions_in_db = function (Insertions,Insertion_filter) {
    var insertions = {data:""};                                         // the object that will contain the db data about insertions
    var returning_value;                                                // the number code that is going to be returned
    
    if ( (returning_value = read_db(insertions_file_path,insertions_data_wrapper,insertions)) == 1) {  // if there were no errors while reading the file
        var data = insertions.data().get();                                                             // retrieves all the data from db as an array of objects
        for (filter in Insertion_filter) {                                                              // for each filter (available rooms, address, ...)
            if (Insertion_filter[filter] != null) {                                                     // that is not nul
                for (var i=0 ; i<data.length; i++){                                                     // check if each object matches the filter
                    if (data[i][filter] != Insertion_filter[filter]) {                                  // if not, remove it
                        data.splice(i, 1);
                        i--;
                    }
                }
            }    
        }
        Insertions = data;                                                                              // put the retrieved data into the wrapper object
        if (Insertions.length == 0) {                                                                   // and if there are no object, set the proper returning value
            returning_value = -1;
        }
    }
    return returning_value;                                                             // return the code number
}


/*
 * this method retrieves the data about an insertion from the db once given its title.
 * @param Insertion. The insertion that will be filled with values taken from the db. Its title is the one to look for in the db.
 * @return a code number
 *  1 everything went ok, Insertion found
 * -1 insertion not present, Insertion not found
 * -2 read file error
 */
var get_insertion_from_db = function (Insertion) {
    var insertions = {data:""};                                         // the object that will contain the db data about insertions
    var returning_value;                                                // the number code that is going to be returned

    if ( (returning_value = read_db(insertions_file_path,insertions_data_wrapper,insertions)) == 1) {  // if there were no errors while reading the file
        var query = insertions.data({title:Insertion.title});                                               // execute the query
        if (query.count() == 1) {                                                                           // if there is a match                                            
            query = query.first();                                                                          // take the first (and only) record
            Insertion.title = query.title;                                                                  // fills the Insertion object
            Insertion.description = query.description;
            Insertion.available_rooms = query.available_rooms;
            Insertion.rooms_typology = query.rooms_typology;
            Insertion.house_typology = query.house_typology;
            Insertion.free_from = query.free_from;
            Insertion.address = query.address;
            Insertion.locality = query.locality;
            Insertion.price_per_person = query.price_per_person;
            Insertion.photo_path = query.photo_path;
            Insertion.nickname = query.nickname;
        }
        else {                                                                                              // otherwise, if the insertion was already inserted
            returning_value = -1;                                                                           // set the returning value to -1
            Insertion.title = null;                                                                         // fills the User object with null values
        }
    }
    return returning_value;                                                                 // return the code number
}   


exports.add_user = add_user_to_db;
exports.verify_user = verify_user_presence;
exports.add_insertion = add_insertion_to_db;
exports.modify_insertion = modify_insertion_in_db;
exports.delete_insertion = delete_insertion_from_db;
exports.get_insertion = get_insertion_from_db;
exports.search_insertions = search_insertions_in_db;


/*
 * @brief  This method just reads a specific object of a json file, and turns it into a taffy db
 * @param file_path. The path of the json file
 * @param object_name. The object to be read.
 * @param container. The object that will contain the db in the 'data' attribute.
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