var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

function connectToDB() {
  

  var uri = "mongodb://PashaNET:mongo1048!@devcluster-shard-00-00-3tzqq.mongodb.net:27017,devcluster-shard-00-01-3tzqq.mongodb.net:27017,devcluster-shard-00-02-3tzqq.mongodb.net:27017/test?ssl=true&replicaSet=DevCluster-shard-0&authSource=admin";
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
