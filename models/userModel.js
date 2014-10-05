var mongodb = require('mongodb').MongoClient;
var format = require('util').format;

function User (options) {
  if (options != undefined) {
    this.email = options.email;
    this.password = options.password;
    this.session_token = options.session_token;
  } 
}

User.prototype.create = function() {
  var user = this;

  mongodb.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) {throw err;}

    var users = db.collection('users');

    users.insert({
        "email": user.email,
        "password": user.password,
        "session_token": user.session_token
      }, {w: 1}, function(err, docs) {
        if(err) {throw err;}        
    })

    db.close();
  })
};

User.prototype.print = function () {
  console.log("In User OBJECT")
  console.log(this.email)
  console.log(this.password)
};


module.exports = User;