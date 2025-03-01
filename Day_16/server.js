//server start karna
//db connect karna

const connect = require('./src/db/db')
const app = require('./src/app')
connect()
app.listen(3000,function(){
    console.log('server is running on port 3000')
})