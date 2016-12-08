var db = require('../Model/db_manager');         // requiring db_manager


/*
 *
 * @param req
 * @param res
 */
var add_insertion  = function(req, res) 
{
    var Insertion = {title:"title3", description:"description", available_rooms:3, rooms_typology:3, house_typology:3, free_from:3, address:3, locality:3, price_per_person:3, photo_path:3, nickname:3};
    code = db.add_insertion(Insertion);
    console.log("add insertion try");
    console.log(code);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("add_insertion in POST");
}


/*
 *
 * @param req
 * @param res
 */
var modify_insertion  = function(req, res) 
{
    var Insertion = {title:"title1", description:"description_updated", available_rooms:10, rooms_typology:10, house_typology:10, free_from:10, address:10, locality:10, price_per_person:10, photo_path:10, nickname:10};
    code = db.modify_insertion(Insertion);
    console.log("modify insertion try");
    console.log(code);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("modify_insertion in POST");
}

/*
 *
 * @param req
 * @param res
 */
var delete_insertion  = function(req, res) 
{
    var Insertion = {title:"title1", description:"description_updated", available_rooms:10, rooms_typology:10, house_typology:10, free_from:10, address:10, locality:10, price_per_person:10, photo_path:10, nickname:10};
    code = db.delete_insertion(Insertion);
    console.log("delete insertion try");
    console.log(code);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("delete_insertion in POST");
}


// export these two functions
exports.add_insertion = add_insertion;
exports.modify_insertion = modify_insertion;
exports.delete_insertion = delete_insertion;