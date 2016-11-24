var db = require('../Model/db_manager');         // requiring db_manager


/*
 *
 * @param req
 * @param res
 */
var add_insertion  = function(req, res) 
{
    db.add_insertion("id", "description");
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
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("delete_insertion in POST");
}


// export these two functions
exports.add_insertion = add_insertion;
exports.modify_insertion = modify_insertion;
exports.delete_insertion = delete_insertion;