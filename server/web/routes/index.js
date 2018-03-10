var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

function connectToDB() {
  

  var uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
  MongoClient.connect(uri, function(err, client) {
    const collection = client.db("test").collection("devices");
    console.log(collection);
    client.close();
  });
}
/* GET home page. */
router.get('/', function(req, res, next) {

  let data = connectToDB();

  res.send('Response');
});


module.exports = router;
