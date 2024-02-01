const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');


var urlencoded =bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
const url = "mongodb+srv://alaajihad098:1342002Alaa@cluster0.octb4me.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
const db = client.db('test');
const coll = db.collection('user');




app.post("/", async (req, res) => {
    
  const { email, password } = req.body;

  try {
    
    const user = await coll.findOne({ email, password });

    if (user) {
      
      res.json({ success: true, message: "Login successful", user });
    } else {
      
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
app.post("/signup", urlencoded, async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      
      const existingUser = await coll.findOne({ email });
  
      if (existingUser) {
        
        res.json({ success: false, message: "User with this email already exists" });
      } else {
        
        const result = await coll.insertOne({ name, email, password });
        
        
        res.json({ success: true, message: "User registration successful", user: result.ops[0] });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });
var server = app.listen(9000, function() {
  var host = server.address().address;
  var port = server.address().port;
});

console.log("Start server");
