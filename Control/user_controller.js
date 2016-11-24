/*
 *
 * @param req
 * @param res
 */
var login  = function(req, res) 
{
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
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("register in POST");
}


// export these two functions
exports.login = login;
exports.register = register;