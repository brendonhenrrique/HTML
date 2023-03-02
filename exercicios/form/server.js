const express = require('express');
const app = express()
const bodyParser = require('body-parser')
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

 
app.post('/usuarios', (req, resp) => {
 
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})
 
app.listen(5500)