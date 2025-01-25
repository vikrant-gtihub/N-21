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

app.patch("/update/:filename", function (req, res) {
  const { filename } = req.params;
  const { filedata } = req.body;
  const filepath = "./uploads/" + filename;
  fs.writeFile(filepath, filedata, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("file updated successfully");
    }
  });
});

app.delete("/delete/:fileName", function (req, res) {
  const filePath = "./uploads/" + req.params.fileName;
  fs.unlink(filePath, function (err) {
    if (err) {
      console.log("file can not be deleted");
    } else {
      res.send("file deleted successfully");
    }
  });
});

app.get("/get-all", function (req, res) {
  fs.readdir("./uploads", function (err, files) {
    if (err) {
      console.log(err);
    }

    res.send(files);
  });
});
app.listen(3000);
/**
 * 1.fs ek moduel ahi jo ki node me install hoke milta hai
 * 2.iski help se files ko CRUD operations provide kiye jate hain.
 * 3.postman ki help se hum routes me request bhejte hain aur jarurat anusar data bhi phir alag alag api ya end points par unhe
 *  read etc karte hyain inme jis function ka styntax jaise likha hai waise hi likha hai.
 * 4.yad rahe jab routes par jakar koi naya expression create nahi kar rahe jaise ki koi naya page create karna koi naya card etc aur
 *  sirf kuchh data retriev akr rahe hain to ...app.get()... ka use hota hai... ja kuchh expressions create kar rahe hain yani ki kuchh modification
 *  kar rahe hain server pe kuchh data bhej rahe hain to ....app.post()... ka use hota hai aur jab hum kuchh partial update kar rahe hain server pe
 *  to ..app.patch() ka use hota hai...
 * 5.backend ka koi resource delete akr rahe hain jaise databse ka koi user ya is case me file to ...app.delete()... ka use hota hai 
 * aur sabka syntax chatgpt se kar sakte hain
 * 6.backend par data ya to (req.query) me aata hai ya (req.body) me jab data jyada hota hai to hume (req.body) ka use karna hota hai jaise ki
 * fiels me data aa raha ho aur jab data kam ho ...(req.query)... me bhi mil jata hai par ..req.body.. ko use akrne ke liye hume ek
 * middleware ka use karna padta hai ...app.use(express.json())...
 */
