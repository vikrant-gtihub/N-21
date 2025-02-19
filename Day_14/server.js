//db connect karna
//express server start karna
const app = require('./src/app')
const connect = require('./src/db/db.js')
connect()
app.listen(3000,function(){
    console.log('server is running on port 3000')
})