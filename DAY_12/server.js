//db  connect karna
//exprss server ko start karna
const app = require('./src/app')
const connect = require('./src/db/db')
connect()
app.listen(3000,function(){
    console.log('server is running on port 3000')
})