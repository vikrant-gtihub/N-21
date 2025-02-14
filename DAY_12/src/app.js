const express = require('express')
const app = express()
const indexrouter = require('./routes/index.routes.js')
const profilerouter = require('./routes/profile.routes.js')

app.use('/users',indexrouter)
app.use('/pc',profilerouter)

module.exports = app
/**
 * 1.sabse pahle [npm init -y] se package.json file bani 
 * 2.ab root level par [server.js] file bani jisme server start hota hai aur database connect kiya jata hai
 * 3.ab root level par [src] folder ke andar [app.js] me express ka server configure kiya matlab ki kaun se middlwaer use
 *  honge aur kaun se routes par kya chalega.
 * 4.[src] ke andar [db] folder me [db.js] banakar ke [connect] function likhte hain jise [server.js] me chalane se databse 
 *   create hokar databse server se onnect ho jata hai
 * 5.yahan alag alag routes ka code [app.js] me n likkar ke [src] ka andar ek [routes] foder banaya jiske andar alag alag
 *   routes ka code likha hai jaise routes ki alag alag families hoti hai i mean [/profile,/register,/login] ye sab families
 *   user route ki hain aur aise hi [route-family] ka nam kuchh bhi rakh sakte hain jo ki ek file ko refer karta hai jaise
 *  yahan par [index.routes.js] and [profile.routes.js]
 * 6.ab hume [app.js] file me ye routes import karne hote hain aur middleware ke through batate hain ki is [url- /users/something] karke jab bhi koi request aaye
 *   to [index.routes.js] wali file me jao aur [/pc/something] karke front end se kuchh request aaye to [profile..routes.js] me jao
 *  wahan jakar ke exact match find kiya jata hai aur controller chal jata hai
 * 7.routes wali files ke andar....
 *  express.Router():   Ek mini-router object return karta hai jo modular aur reusable routing system banata hai.

    Iska use tab hota hai jab:
    Modularity chahiye (alag-alag route files).
    Specific route groups ko alag structure me organize karna ho.
    Dono ke andar HTTP ke sare methods (e.g., .get(), .post(), etc.) present hote hain. Difference bas organization aur scale pe hai. 😊
 */