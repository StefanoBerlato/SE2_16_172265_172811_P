var db = require('../Model/db_manager');         // requiring db_manager


/*
 *
 * @param req
 * @param res
 */
var card  = function(req, res) 
{
    var Insertion = {title:"title1", description:null, available_rooms:null, rooms_typology:null, house_typology:null, free_from:null, address:null, locality:null, price_per_person:null, photo_path:null, nickname:null};
    code = db.get_insertion(Insertion);
    console.log("get insertion try");
    console.log(code);
    console.log(Insertion);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("card in GET");
}



/*
 *
 * @param req
 * @param res
 */
var search  = function(req, res) 
{
    var Insertions = {data:[]};
    code = db.search_insertions(Insertions.data,"boarding_house","single_room+double_room","povo+mesiano",1,300,"10_10_2012");
    console.log("search insertions try");
    console.log(code);
    console.log(Insertions.data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("search in GET");
}




// export these two functions
exports.search = search;
exports.card = card;