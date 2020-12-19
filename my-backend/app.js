const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/dice', (req, res) => {
  console.log(req.body);
  res.send(
    (Math.floor(Math.random() * 6)+1).toString()
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));