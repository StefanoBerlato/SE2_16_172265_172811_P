
 /*  test of the database manager module. It is divided into two sections:
  *  - the first one is to test the user management. It tests the following functionalities:
  *          - insert new user (both nickname and password, only password)
  *          - insert already inserted user (both nickname and password, only nickname)
  *          - verify inserted user presence (both nickname and password, right nickname wrong password)
  *          - verify not inserted user presence
  *
  *  - the second one is to test the insertions management. It tests the following functionalities:
  *          - add new insertions to populate db
  *          - add already inserted insertions
  *          - recover data from an already added insertion
  *          - recover data from a not yet added insertion
  *          - update data from an already added insertion
  *          - update data from a not yet added insertion
  *          - check if the insertions were actually updated
  *          - delete an already added insertion and a not yet added insertion
  *          - try to recover data about the insertion just deleted
  *          - search insertion with no filters, "locality" filter, all filters
  *
  *
  */


var fs = require("fs");                                                 // fs to read the json files
var db_manager = require('../Model/DB_manager.js');                     // requiring the db manager


var User_1 = {nickname:"mario_rossi_65", 
              password:"password_di_mario_rossi", 
              email:"mariorossi@gmail.com", 
              phone_number:3873528941, 
              profile_photo_path:"mario_rossi_photo.jpg"};                 // a normal user
var User_2 = {nickname:"giacomo_tait", 
              password:"password_di_giacomo_tait", 
              email:"giacomotait@yahoo.com", 
              phone_number:5698452147, 
              profile_photo_path:"giacomo_tait_photo.jpg"};                 // a normal user
var User_1_empty = {nickname:"mario_rossi_65", 
                    password:"password_di_mario_rossi", 
                    email:"", 
                    phone_number:"", 
                    profile_photo_path:""};           // a user with same nickname and password of User_1. All the other fields are null
var User_2_empty = {nickname:"giacomo_tait", 
                    password:"password_di_giacomo_tait", 
                    email:"", 
                    phone_number:"", 
                    profile_photo_path:""};           // a user with same nickname and password of User_2. All the other fields are null
var User_3 = {nickname:"gianni_verde", 
              password:"password_di_gianni_verde", 
              email:"", 
              phone_number:"", 
              profile_photo_path:""};                 // a normal user
var User_1_only_nickname = {nickname:"mario_rossi_65", 
              password:"", 
              email:"", 
              phone_number:"", 
              profile_photo_path:""};   // a user with same nickname of User_1. All the other fields are null
var User_2_only_password = {nickname:"", 
              password:"password_di_giacomo_tait", 
              email:"", 
              phone_number:"", 
              profile_photo_path:""};   // a user with same password of User_2. All the other fields are null
var User_1_right_nickname = {nickname:"mario_rossi_65", 
              password:"password_di_giacomo_tait", 
              email:"", 
              phone_number:"", 
              profile_photo_path:""};   // a user with same password of User_2. All the other fields are null


 /* Test for insert users into the db file. It checks 
  * - an insertion of a new user
  * - an insertion of an already inserted user
  */
describe("Test: insert into user's database file", function() {
    
    fs.writeFileSync( "./Model/data/users.json", '{"user":[]}');                // initialize the user's db file
    
    describe("Try to insert a new user", function() {                           // this test inserts into the db User_1 and User_2
        it("insert user 1 should return 1", function(){
           expect(db_manager.add_user(User_1)).toBe(1);
        });
        it("insert user 2 should return 1", function(){
           expect(db_manager.add_user(User_2)).toBe(1);
        });  
        it("insert User 2 only passowrd should return -1", function(){
           expect(db_manager.add_user(User_2_only_password)).toBe(-1);
        });
    });
    
    
    describe("Try to insert an already inserted user", function() {             // this test tries to add again User_1 and User_2 to the db
        it("insert user 1 should return -1", function(){
           expect(db_manager.add_user(User_1)).toBe(-1);
        });
        it("insert user 2 should return -1", function(){
           expect(db_manager.add_user(User_2)).toBe(-1);
        });
        it("insert User 1 only nickname should return -1", function(){
           expect(db_manager.add_user(User_1_only_nickname)).toBe(-1);
        });
    
    });
});


 /* Test for verify users' presence into the db file. It checks 
  * - the presence of an already inserted user, and if it retrieves properly its data
  * - the presence of a not yet inserted user
  */
describe("Test: verify users' presence into user's database file", function() {
    
    describe("Try to verify the presence of user 1", function() {           // this test tries to login user_1
        it("it returns 1", function(){                                      // first of all, it checks that the user is actually in the db
           expect(db_manager.verify_user(User_1_empty)).toBe(1);
        });      
        it("check the email", function(){                                   // then it controls if the fields of the empty user are now filled with the proper data
           expect(User_1_empty.email).toBe("mariorossi@gmail.com");
        });
    });
    
    describe("Try to verify the presence of user 2", function() {           // this test tries to login user_2
        it("it returns 1", function(){                                      // it checks that the user is actually in the db
            expect(db_manager.verify_user(User_2_empty)).toBe(1);
        });
        it("check the phone number", function(){
            expect(User_2_empty.phone_number).toBe(5698452147);             // then it controls if the fields of the empty user are now filled with the proper data
        });
    });
    
    describe("Try to verify the presence of user 2", function() {           // this test tries to login user_1_right_nickname
        var old_pn = User_1_right_nickname.phone_number;                    // store the old phone number
        it("it returns 1", function(){                                      // it checks that the user is actually in the db
            expect(db_manager.verify_user(User_1_right_nickname)).toBe(-1);
        });
        it("check the phone number", function(){
            expect(User_1_right_nickname.phone_number).toBe(old_pn);        // then it controls if the fields of the empty user are now filled with the proper data (unmodified)
        });
        it("check the nickname", function(){
            expect(User_1_right_nickname.nickname).toBe(null);              // finally it controls if the fields of the empty user are now filled with the proper data (set to null)
        });
    });
    
    describe("Try to verify the presence of user 3", function() {           // this test tries to login user_3
        it("it returns -1", function(){                                     // user 3 was not inserted, so it should not be in the dv
           expect(db_manager.verify_user(User_3)).toBe(-1);
        });
        it("check the username, that should be null", function(){           // hence its fields should now be set to 'null'
           expect(User_3.nickname).toBe(null);
        });
    
    });
});


// end of section 1 ----------------------------------------------------- begin of section 2


var Insertion_1 = {title:"beautiful house", 
                   description:"it's a nicehouse", 
                   available_rooms:2, 
                   rooms_typology:"sinlge", 
                   house_typology:"aparmenr", 
                   free_from:"01_01_2017", 
                   address:"via Trento, 10", 
                   locality:"povo", 
                   price_per_person:220, 
                   photo_path:"beautiful_house.jpg", 
                   nickname:"mario_rossi_95"};          // a normal insertion, but there is an error in the 'house_typology' attribute ('aparmenr' instead of 'apartment')
var Insertion_2 = {title:"nice apartment", 
                   description:"boarding house nearTrento", 
                   available_rooms:1, 
                   rooms_typology:"dobuuule", 
                   house_typology:"boarding house", 
                   free_from:"12_02_2017", 
                   address:"via Asiago, 10", 
                   locality:"san_dona", 
                   price_per_person:180, 
                   photo_path:"nice_aparment.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion, but there is an error in the 'rooms_typology' attribute ('dobuuule' instead of 'double')
var Insertion_1_new = {title:"beautiful house", 
                   description:"it's a nice house", 
                   available_rooms:2, 
                   rooms_typology:"single_room", 
                   house_typology:"apartment", 
                   free_from:"01_01_2017", 
                   address:"via Trento, 10", 
                   locality:"povo", 
                   price_per_person:220, 
                   photo_path:"beautiful_house.jpg", 
                   nickname:"mario_rossi_95"};      // as insertion 1 but with no errors
var Insertion_2_new = {title:"nice apartment", 
                   description:"boarding house near Trento", 
                   available_rooms:1, 
                   rooms_typology:"double_room", 
                   house_typology:"boarding house", 
                   free_from:"12_02_2017", 
                   address:"via Asiago, 10", 
                   locality:"san_dona", 
                   price_per_person:180, 
                   photo_path:"nice_aparment.jpg", 
                   nickname:"giacomo_tait"};      // as insertion 2 but with no errors
var Insertion_1_empty = {title:"beautiful house", 
                   description:null, 
                   available_rooms:null, 
                   rooms_typology:null, 
                   house_typology:null, 
                   free_from:null, 
                   address:null, 
                   locality:null, 
                   price_per_person:null, 
                   photo_path:null, 
                   nickname:null};    // same title of insertion 1, but all the other fields are null 
var Insertion_2_empty = {title:"nice apartment", 
                   description:null, 
                   available_rooms:null, 
                   rooms_typology:null, 
                   house_typology:null, 
                   free_from:null, 
                   address:null, 
                   locality:null, 
                   price_per_person:null, 
                   photo_path:null, 
                   nickname:null};    // same title of insertion 2, but all the other fields are null 
var Insertion_3 = {title:"fantastic house", 
                   description:"single house, Povo", 
                   available_rooms:1, 
                   rooms_typology:"single_room", 
                   house_typology:"apartment", 
                   free_from:"03_11_2016", 
                   address:"via alle Volpare, 12", 
                   locality:"povo", 
                   price_per_person:220, 
                   photo_path:"fantastic_house.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion
var Insertion_4 = {title:"big flat near university, povo", 
                   description:"big flat near university, useful for students in povo", 
                   available_rooms:2, 
                   rooms_typology:"single_room", 
                   house_typology:"apartment", 
                   free_from:"30_12_2016", 
                   address:"via Sommarive, 11", 
                   locality:"povo", 
                   price_per_person:250, 
                   photo_path:"big_flat.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion
var Insertion_5 = {title:"boarding house for students", 
                   description:"boarding house in villazzano", 
                   available_rooms:10, 
                   rooms_typology:"double_room", 
                   house_typology:"boarding_house", 
                   free_from:"30_12_2016", 
                   address:"via villazzano, 11", 
                   locality:"villazzano", 
                   price_per_person:250, 
                   photo_path:"borading_house.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion
var Insertion_6 = {title:"old but gold apartment", 
                   description:"an old apartment, but near the city center", 
                   available_rooms:1, 
                   rooms_typology:"single_room", 
                   house_typology:"apartment", 
                   free_from:"23_04_2017", 
                   address:"via centro, 120", 
                   locality:"trento", 
                   price_per_person:150, 
                   photo_path:"old_but_gold.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion


 /* Test for insert insertions into the db file. It checks 
  * - an insertion of a new insertion
  * - an insertion of an already inserted insertion
  */
describe("Test: insert into the database file of insertions", function() {
    
    fs.writeFileSync( "./Model/data/insertions.json", '{"insertions":[]}');    // initialize the insertions's db file
        
    describe("Try to add a new insertion", function() {                        // this test inserts into the db insertion 1, 2, 4, 5, 6
        it("insert insertion 1 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_1)).toBe(1);
        });
        it("insert insertion 2 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_2)).toBe(1);
        });
        it("insert insertion 1 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_4)).toBe(1);
        });
        it("insert insertion 2 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_5)).toBe(1);
        });  
        it("insert insertion 1 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_6)).toBe(1);
        });
    });
    
    describe("Try to add an already inserted insertion", function() {           // this test tries to insert again insertion 1 and insertion 2
        it("insert user 1 should return -1", function(){
           expect(db_manager.add_insertion(Insertion_1)).toBe(-1);
        });
        it("insert user 2 should return -1", function(){
           expect(db_manager.add_insertion(Insertion_1)).toBe(-1);
        });
    });
});


 /* Test for get data of insertions from the db file (BEFORE to correct errors). It checks 
  * - a recovery of data from an already inserted insertion
  * - a recovery of data from a not yet inserted insertion
  */
describe("Test: recover from the database file of insertions", function() {     

    describe("Try to get an old insertion", function() {                        // this test tries to recover data from insertion 1, and then checks its consistency
        it("get insertion 1 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_1_empty)).toBe(1);
        });
        it("check the house typology", function(){
           expect(Insertion_1_empty.house_typology).toBe("aparmenr");
        }); 
    });
    
    describe("Try to get an old insertion", function() {                        // this test tries to recover data from insertion 2, and then checks its consistency
        it("get insertion 2 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_2_empty)).toBe(1);
        });
        it("check the house typology", function(){
           expect(Insertion_2_empty.rooms_typology).toBe("dobuuule");
        }); 
    });
    
    describe("Try to recover a not inserted insertion", function() {            // this test tries to recover data from insertion 3, that was not inserted
        it("get insertion 3 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_3)).toBe(-1);
        });

    });
});


 /* Test for modify insertions from the db file. It checks 
  * - a modification of an alrady inserted insertion
  * - a modification of a not yet inserted insertion
  */
describe("Test: modify from the database file of insertions", function() {  
    
    describe("Try to modify an old insertion", function() {                     // this test tries to modify insertion 1 and insertion 2, in order to resolve the errors
        it("modify insertion 1 should return 1", function(){
           expect(db_manager.modify_insertion(Insertion_1_new)).toBe(1);
        });
        it("modify insertion 2 should return 1", function(){
           expect(db_manager.modify_insertion(Insertion_2_new)).toBe(1);
        });  
    });
    
    describe("Try to modify a not yet inserted insertion", function() {         // this test tries to modify insertion 3 (that was not inserted in the db)
        it("modify insertion 3 should return -1", function(){
           expect(db_manager.modify_insertion(Insertion_3)).toBe(-1);
        });
    });
});


 /* Test for get data of insertions from the db file (AFTER correct errors). It checks 
  * - a recovery of data from an already inserted insertion
  * - a recovery of data from a not yet inserted insertion
  */
describe("Test: recover from the database file of insertions", function() {     

    describe("Try to get an old insertion", function() {                        // this test tries to recover data from insertion 1, and then checks its consistency
        it("get insertion 1 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_1_empty)).toBe(1);
        });
        it("check the house typology", function(){
           expect(Insertion_1_empty.house_typology).toBe("apartment");
        }); 
    });
    
    describe("Try to get an old insertion", function() {                        // this test tries to recover data from insertion 2, and then checks its consistency
        it("get insertion 2 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_2_empty)).toBe(1);
        });
        it("check the house typology", function(){
           expect(Insertion_2_empty.rooms_typology).toBe("double_room");
        }); 
    });
    
    describe("Try to recover a not inserted insertion", function() {            // this test tries to recover data from insertion 3, that was not inserted
        it("get insertion 3 should return 1", function(){
           expect(db_manager.get_insertion(Insertion_3)).toBe(-1);
        });

    });
});


 /* Test for delete insertions from the db file. It 
  * - deletes an insertion and then tries to get it and modify it
  * - deletes a not inserted insertion
  */
describe("Test: delete an insertion from the database file of insertions", function() {     

    describe("Try to delete insertion 2", function() {                          // this test tries to delete insertion 2 from the db, then tests if it was actually deleted
        it("should return 1", function(){
           expect(db_manager.delete_insertion(Insertion_2)).toBe(1);                
        });
        it("get insertion 2 from the db after its elimination", function(){         
           expect(db_manager.get_insertion(Insertion_2)).toBe(-1);        
        });
        it("modify insertion 2 from the db after its elimination", function(){      
           expect(db_manager.modify_insertion(Insertion_2_new)).toBe(-1);        
        });  
    });
    
   describe("Try to delete insertion 3", function() {                          // this test tries to delete insertion 3, that was not inserted
        it("should return -1", function(){
           expect(db_manager.delete_insertion(Insertion_3)).toBe(-1);           
        });
    });
});


 /* Test for searching insertions (not in the db there are insertion 1, 4, 5, 6). It
  * - search with no filters (all null)
  * - search with one filter, "locality"
  * - search with all single filters
  * - search with combinated filters
  */
describe("Test: search insertions from the db", function() {     

    var results = {data:[]};                                                    // the object that will contain the results of the search query
    
    describe("Try to search with no filters", function() {                      // this test tries to search with no filters, so that all the insertions should be returned
        it("should return 1", function(){
           expect(db_manager.search_insertions(results,null,null,null,null,null)).toBe(1);  
        });
        
        it("verify that all the insertions in the db were taken", function(){         
           expect(results.data.length).toBe(4);        
        });
    });
    
    describe("Try to search with one filter", function() {                      // this test tries to search with "trento" filter, so that only insertion 6 should be returned
        it("should return 1", function(){
           expect(db_manager.search_insertions(results,null,null,"trento",null,null)).toBe(1);                
        });
        it("verify that there is only one result", function(){         
           expect(results.data.length).toBe(1);        
        });
        it("verify that the address is actually the one that belongs to insertion 6", function(){         
           expect(results.data[0].address).toBe("via centro, 120");        
        });
    });
    
    describe("Try to search with all filters", function() {                     // this test tries to search with all filters refered to insertion 5, so that only insertion 5 should be returned
        it("should return 1", function(){
           expect(db_manager.search_insertions(results,"boarding_house","double_room","villazzano",2,250)).toBe(1);                
        });
        it("verify that there is only one result", function(){         
           expect(results.data.length).toBe(1);        
        });
        it("verify that the description is actually the one that belongs to insertion 5", function(){         
           expect(results.data[0].description).toBe("boarding house in villazzano");        
        });
    });
    
    describe("Try to search with all filters", function() {                     // this test tries to search with combinted filters. it should find insertion 1 and 4
        it("should return 1", function(){
           expect(db_manager.search_insertions(results,"apartment","double_room+single_room","povo+mesiano",2,300)).toBe(1);                
        });
        it("verify that there are two results", function(){         
           expect(results.data.length).toBe(2);        
        });
        it("verify that the insertions retrieved are the 1 and the 4", function(){         
           expect(results.data[0].title).toBe("beautiful house");  
           expect(results.data[1].title).toBe("big flat near university, povo");  
        });
    });
});
