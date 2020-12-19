const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send(Math.floor(Math.random() * 10).toString(10))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})