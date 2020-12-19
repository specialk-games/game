const axios = require('axios');

axios.get('http://localhost:3001/').then((response) => {
  console.log(response.data);
}, (error) => {
  console.log(error);
});
