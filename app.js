const express = require('express')
const compression = require('compression')
const app = express()
//压缩代码中间件
app.use(compression())
app.use(express.static('./dist'))

app.listen(3000,()=>{
    console.log('server running')
})