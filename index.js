const express = require('express')
const app = express()
const port = 3000
// comment test...
app.get('/', (req, res) => {
    var a=1, b=2;
    var c = a + b;
   return res.send(  
         'Hello World!'
    )
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})