const express = require('express')
const app = express()
const port = 3000

app.get('/echo/json', (req, res) => {
    var type = req.get('Content-Type')
    var query = req.query.name

    res.send({code:0, message:'Success', userData: "type: ${type} - query: ${query} - request method: GET"})
})

app.post('/echo/json', (req, res) => {
    var type = req.get('Content-Type')
    var query = req.query.name
    var body = req.body

    res.send({code:0, message:'Success', userData: "type: ${type} - query: ${query} - body:${body} - request method: POST"})
})

app.put('/echo/json', (req, res) => {
  var type = req.get('Content-Type')
  var query = req.query.name
  var body = req.body

  res.send({code:0, message:'Success', userData: "type: ${type} - query: ${query} - body:${body} - request method: PUT"})
})

app.delete('/echo/json', (req, res) => {
  var type = req.get('Content-Type')
  var query = req.query.name
  var body = req.body

  res.send({code:0, message:'Success', userData: "type: ${type} - query: ${query} - body:${body} - request method: DELETE"})
})

app.listen(port, () => {
  console.log(`Firework test API is listening at http://localhost:${port}`)
})