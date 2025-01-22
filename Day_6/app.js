const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/create", function (req, res) {
  const { filename, filedata } = req.body;
  const filepath = "./uploads/" + filename;
  fs.writeFile(filepath, filedata, function (err) {
    if (err) {
      console.log(err); //if there is error then the err value becomes truthy otherwise it becomes null i.e. falsy value and else is executed
    } else {
      res.send("file cretaed in upload folder");
    }
  });
});

app.get("/read/:filename", function (req, res) {
  const { filename } = req.params; //req.params return a object which key consisit the dynamic valued filename requested from the browser
  const filepath = "./uploads/" + filename;
  fs.readFile(filepath, { encoding: "utf-8" }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});
app.listen(3000);

app.patch('/update/:filename',function(req,res){
  const {filename} = req.params;
  const {filedata} = req.body
  const filepath = './uploads/' + filename
  fs.writeFile(filepath,filedata,function(err){
    if(err){
      console.log(err)
    }
    else{
      res.send('file updated successfully')
    }
  })
})

/**
 * 1.fs ek moduel ahi jo ki node me install hoke milta hai
 * 2.iski help se files ko CRUD operations provide kiye jate hain.
 * 3.postman ki help se hum routes me request bhejte hain aur jarurat anusar data bhi phir alag alag api ya end points par unhe
 *  read etc karte hyain inme jis function ka styntax jaise likha hai waise hi likha hai.
 * 4.yad rahe jab routes par jakar koi naya expression create nahi kar rahe jaise ki koi naya page create karna koi naya card etc aur 
 *  sirf kuchh data retriev akr rahe hain to app.get() ka use hota hai... ja kuchh expressions create kar rahe hain yani ki kuchh modification
 *  kar rahe hain server pe kuchh data bhej rahe hain to app.post ka use hota hai aur jab hum kuchh partial update kar rahe hain server pe 
 *  to ..app.patch() ka use hota hai...
 */
