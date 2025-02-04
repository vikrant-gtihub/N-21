//server start karna (express ke server ko import karke start karti hai)
//database se connect karna

const app = require('./src/app')
const connect = require('./src/db/db')

connect()
app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})