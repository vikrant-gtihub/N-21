var catMe = require("cat-me");
console.log(catMe());

/**
 * 1.sabse pahle kisi package ko use karne ke liye hamare pas package json file honi chahiye agar nahi hai to npm init-y
 * se banate hain
 * 2.fir us package ko install karte hain fir require karke docs se use use akrne ka tareeka dekhkar use kar lete hain.
 */

/**
 * 1.package.json()... ek file hai jiske andar aplication ka name uska author aur other detail rahti hai dependencies rahti hai
 *  matalb ki wo packages wo install kiiye gaye hain aur unka vaersion.yadi ye file nahi hai to packages install nahi ho payenge
 * kuchh packages install karne se hi ye bhi bana di jati hai kuchh me nahi to make sure ki in these cases ki hum khud se hi bana le
 * is file ke banne ke bad yai hum package install bhi kar len to uska sara code node modules me rakhta hai aur ab hum package.json
 * ko remove bhi kar sakte hain aur hamara app chalega ar yadi hume chahiye ki koi naya package install ho to uske liye hume again package
 * jon file ki jarurat hogi.
 * 
 * 2.node-modules ek folder hai jissse hum developers ko kopi kam nahi rahta yah node ka server banae ka code consist karti hai matlab ki
 * framework ka code aur humne jo bhi pckages install kiye hain unka code bhi rakhti hai aur iske bina hamara app nahi run hota hai
 * yadi hum ise delete bhi kar dete hain to npm i se wapas laya ja sakta hai
 * 
 * 3.package-lock.json ka main kaam hai exact package versions ko lock karna, taki har system par same dependencies install ho.
 * 
 * Maan lo aapne apne package.json mein likha:

    json
    Copy
    Edit
   "express": "^4.17.1"
   Iska matlab hai ki npm install se express ka version 4.17.x install ho sakta hai.

Agar aap package-lock.json use karte hain, to wo file ensure karegi ki exact version 4.17.1 hi install ho, chahe future
 mein koi naye version aaye.

Agar package-lock.json nahi hai, to npm 4.17.3 ya koi aur version bhi install kar sakta hai.


 -Package.json ko delete karne se app chalti rahegi, jab tak node_modules folder me sabhi packages installed hain.
-Agar aap dubara npm install chalate hain, to latest versions install ho sakte hain, exact versions nahi jo pehle the.
-Agar aap chahte hain ki exact versions install ho, to package-lock.json ko delete nahi karna chahiye.
 */
