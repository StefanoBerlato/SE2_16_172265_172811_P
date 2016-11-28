//test of the database manager module. It is divided into two sections:
//    - the first one is to test the user management
//    - the second one is to test the insertions management

var fs = require("fs");                                                 // fs to read the json files
var db_manager = require('../Model/DB_manager.js');                     // requiring the db manager


var User_1 = {nickname:"mario_rossi_65", 
              password:"password_di_mario_rossi", 
              email:"mariorossi@gmail.com", 
              phone_number:3873528941, 
              profile_photo_path:"mario_rossi_photo.jpg"};             // a normal user
var User_2 = {nickname:"giacomo_tait", 
              password:"password_di_giacomo_tait", 
              email:"giacomotait@yahoo.com", 
              phone_number:5698452147, 
              profile_photo_path:"giacomo_tait_photo.jpg"};             // a normal user
var User_1_empty = {nickname:"mario_rossi_65", 
                    password:"password_di_mario_rossi", 
                    email:"", 
                    phone_number:"", 
                    profile_photo_path:""};       // a user with same nickname and password of User_1. All the other fields are null
var User_2_empty = {nickname:"giacomo_tait", 
                    password:"password_di_giacomo_tait", 
                    email:"", 
                    phone_number:"", 
                    profile_photo_path:""};       // a user with same nickname and password of User_2. All the other fields are null
var User_3 = {nickname:"gianni_verde", 
              password:"password_di_gianni_verde", 
              email:"", 
              phone_number:"", 
              profile_photo_path:""};             // a normal user


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
    });
    
    
    describe("Try to insert an already inserted user", function() {             // this test tries to add again User_1 and User_2 to the db
        it("insert user 1 should return -1", function(){
           expect(db_manager.add_user(User_1)).toBe(-1);
        });
        it("insert user 2 should return -1", function(){
           expect(db_manager.add_user(User_2)).toBe(-1);
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
    
    describe("Try to verify the presence of user 3", function() {           // this test tries to login user_3
        it("it returns -1", function(){                                     // user 3 was not inserted, so it should not be in the dv
           expect(db_manager.verify_user(User_3)).toBe(-1);
        });
        it("check the username, that should be null", function(){           // hence its fields should now be set to 'null'
           expect(User_3.nickname).toBe(null);
        });
    
    });
});


// end of section 1 -----------------------------------------------------


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
                   rooms_typology:"single", 
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
                   rooms_typology:"double", 
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
                   rooms_typology:"single", 
                   house_typology:"apartment", 
                   free_from:"30_12_2016", 
                   address:"via Sommarive, 11", 
                   locality:"povo", 
                   price_per_person:250, 
                   photo_path:"fantastic_house.jpg", 
                   nickname:"giacomo_tait"};          // a normal insertion


 /* Test for insert insertions into the db file. It checks 
  * - an insertion of a new insertion
  * - an insertion of an already inserted insertion
  */
describe("Test: insert into the database file of insertions", function() {
    
    fs.writeFileSync( "./Model/data/insertions.json", '{"insertions":[]}');    // initialize the insertions's db file
        
    describe("Try to add a new insertion", function() {                        // this test inserts into the db insertion 1 and insertion 2
        it("insert insertion 1 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_1)).toBe(1);
        });
        it("insert insertion 2 should return 1", function(){
           expect(db_manager.add_insertion(Insertion_2)).toBe(1);
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
           expect(Insertion_2_empty.rooms_typology).toBe("double");
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
           expect(db_manager.delete_insertion(Insertion_2)).toBe(1);            // this test deletes insertion 2
        });
        it("get insertion 2 from the db after its elimination", function(){     // this test tries to get insertion 2 from the db after its elimination
           expect(db_manager.get_insertion(Insertion_2)).toBe(-1);        
        });
        it("modify insertion 2 from the db after its elimination", function(){  // this test tries to modify insertion 2 from the db after its elimination
           expect(db_manager.modify_insertion(Insertion_2_new)).toBe(-1);        
        });  
    });
    
   describe("Try to delete insertion 3", function() {                          // this test tries to delete insertion 3, that was not inserted
        it("should return -1", function(){
           expect(db_manager.delete_insertion(Insertion_3)).toBe(-1);          // this test proves to delete insertion 3
        });
    });
});


// ricerca insertions: problema: ricerca per camera e prezzo, che richiede un comparativo?

