const http = require("http");

const server = http.createServer(function (req, res) {

     if(req.url === '/'){
     res.end('welcome to backend seever')
   }

    else if (req.url === "/about") {
    res.end("about route ke liye ye code chalega");
  }
   else if (req.url === "/profile") {
    res.end("profile route ke liye ye code chalega");
  } 
  else res.end("kisi bhi route ke liye ye code chalega");
});

 
server.listen(3000);


/**1. http se server banane ke lie sabse pahle use require karna hoga wo ek module hai isliye sue install karne ki jarurat nahi hai
 * 2. fir http.createServer() ek method hai jo ki ek evrber banakae detio hai par ise chalkati nahi hai 
 * 3. server.listedn(port) ...kahne se server start hota hai 
 * 4. port ko aise samjho jaise kuchh doors hon unme category wise log enter kar sakte haon kuchh gates VIP ke liye honge kuchh gates 
 *    common logo ke liye honge aur isi tarah se ports ka matalb hai kuchh software ports matalb ki phssically nahi hai  system pe
 *    like charger port par isne data pass hota hai i mena data ka adan pradan hota hai front end se backend par aur backend se front 
 *    end par. hum koi bhi port likh sakte hain par isliye nahi likhte kyuki bahut se port pahle sesystem ne reserve kar rakhe hain
 *    alag alag kam ke liye to hum wo wale use karte hain jo free rakhe gaye hain like 3000,4000,5000,8000,8080 etc.
 * 
 * 5.(req.url)..jab bhi front end se kuchh request aati hai to use req object me hi handle karte hain req.url ka matlab hai jis url ki
 * equest hui thi aur uske respinse me front end par kya bhejna hai ye decide hota hai ...res.end()... se 
 * 
 * 6. api ka matlab hai ek mediater jo do softwareapplications ko ek dusre se communicate karne me madad karta hai jaise yahan 
 * par humare routes /about /profile ikse through server aur  browser communicate kar sakte hain is karan se routes ko (api aur end-points)
 * bhi bolte hain.
 */