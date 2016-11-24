/*
 *
 * @param req
 * @param res
 */
var search  = function(req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("search in GET");
}

/*
 *
 * @param req
 * @param res
 */
var card  = function(req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("card in GET");
}


// export these two functions
exports.search = search;
exports.card = card;