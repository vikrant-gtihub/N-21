const express = require("express");
const app = express();
const usermodel = require("./models/usermodel");

app.use(express.json());
app.get("/", (req, res) => {
  //note...handlers or controllers...
  res.send(
    "thses callbacks are referred as controllers or handlers as well which get hit on any route"
  );
});



//api to create new user in database
app.post("/create", async (req, res) => {
  const { username, age, email } = req.body;
  const user = await usermodel.create({
    username,
    age,
    email,
  });
  console.log(user);
  res.send(user);
  //---note----- har ek created user ki ..id.. hogi jo ki mongoose dwara di jati hai aur ye unique hoti hai har ek user ke liye aur ye in future kabhi repeat nahi hoti
});



//api to get all users in database
app.get("/get-allusers", async (req, res) => {
  //find hamesha ek array return karta hai aur yadi iske parameter me kuchh n pass kiya gaya to ye sare users ka array de dega
  let users = await usermodel.find();
  console.log(users);
  res.send(users);
});



//api to get some specific users.. jab hum find me koi conditon lagate hain jaise ki find({username:''}) to yahan par parameters ko query kaha
//jata hai matlab ki databse me jab bhi koi condition di jayegi ki is name ke suer ko find karo ya is email wale ko delete use ..query..kahte hain
app.get("/get-specificusers", async function (req, res) {
  let users = await usermodel.find({ username:'rahul pandey'}); //un sabhi users ko ek array me dega jinki age 21 hogi agar koi nahi to [] dega
  console.log(users);
  res.send(users);
});


//api to test the ..find().. method with multiple queries     kyuki find method me ek se jyada queries bhi pass ki ja  sakti hain
app.get('/moreusers', async (req,res)=>{
  let users = await usermodel.find({username:'rahul pandey',age:31})
  res.send(users)
}) 

//api to find a single user
app.get("/get-oneuser", async function (req, res) {
  let user = await usermodel.findOne({ username: "rahul pandey" });
  console.log(user);
  res.send(user);
  //yadi uske parameter me koi query nahi hogi to ye bydefault databse me jo sabse pahle user bana hoga use de dega agar query pass
  // gaayi aur ek se jyada users us query ko match karte hain to pahla user return hota hai aur yadi koi user match n hua to null return hota hai
});


//api to get the user on the basis of any one mathced condition
app.get('/get-one',async function(req,res){
  let user = await usermodel.find({
    $or:[
      {name:'raghu'},
      {age:21}
    ],

  })
  res.send(user)
  //$or ek array accept karta hai aur uske andar do objects dono objects ke andar ek ek query aati hai dono me se koi bhi match hone par return kar deta hai
})

//api to find a user and  update that user in databse
app.patch('/update',async function(req,res){
   let updateduser = await usermodel.findOneAndUpdate({username:'rahul pandey'},{age:24})
   //parameter me 2 objects hote hain pahle object me wo query jiske basis par find hota hai aur dusre wale me wo property jo update karni hai
   //agar kuchh aise query de di jo ki match n kare datbase me to koi fark nahi apdta kuchh bhi error etc nahi aata
   //agar khali parenthesis ke sath run kiya to databse me bane pahle user ko find karke return karta hai
   res.send(updateduser)
})

//api to delete a user in databse
app.delete('/delete',async (req,res)=>{
  let deleteuser = await usermodel.findOneAndDelete({
    username:'rahul pandey'
  })
  res.send(deleteuser)
  //agar koi bhi user match nahi kiya query se to kuchh nahi hota
  //agar koi query ke bina cal kiya to pahla user delete hota hai
  //agar multiple users query ko match karte hain to sirf pahla wala hi delete hota hai
})

//api to delete on some specific basis
app.delete('/erase',async function(req,res){
  let usr = await usermodel.findOneAndDelete({
    $or:[
      {username:'raghu'},
      {age:54}
    ]
  })
  res.send(usr)
})
module.exports = app;
