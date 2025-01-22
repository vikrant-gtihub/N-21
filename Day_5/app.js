const express = require("express");
const app = express();

app.use(express.json())
app.get("/", (req, res) => {
  res.send("this is backednd");
});

app.get('/about',(req,res)=>{
    console.log(req.body)
    res.send('this is about page')
})

app.listen(3000, () => {
  console.log(
    "yah function tab chalta hai jab server start ho jata hai yah optional hai aur iska koi specific usecase nahi padta"
  );
});

/**
 * is tutorial me humne postman app ke bare me padha 
 * 1.postman ek tool hai jo ki api par data bhejne ka kam karta hai api testing ke liye use hota hai
 * 2.agar key value ke format me data bheja jata hai to (req.query) me receive hota hai
 * 3.agar data json format me bheja jata hai to (req.body) me receive hota hai par ek middlewware jsruri hota hai app.use(express.json())
 * iski madad se hi json ka data padha jata hai aur ek bat jab data kam ho to (req.query) better hai kyuki fast hai aur jab data jyada
 * ho jaise ki gb,mb,tb yani ki files etc me to fir req.body use hota hai in addition req.query ke liye data bhejte sammay url par data
 *  dikhta hai aur req.body se data bhejte samay data nahi dikhta hai which is a plus point.
 * 
 * ...steps to use postman...
 * 1.sabse pahle new collection pe jayenge aur wahan par url jis par request bhejni hai use copy kar lenge aur key value me data value dalkar send kar denge aur use 
 * req.query me receive akr lete hain. 
 * 
 * 2.ab jab req.body.. me bhejna hai to body tag ko select akro uspe ..raw..option select akro aur us par json ..ko select karo.and 
 *  fir jahan se data bhej rahe hain us ui pe params ki jagahj body select karke json select karke data bhej sakte hain yad rahe json
 * hai isliye data me key aur value dono string format me hona chahiye. 
 */