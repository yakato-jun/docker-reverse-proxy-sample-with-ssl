const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors({
  origin: 'https://localhost'
}))

app.get('/api', (req, res) => {
  console.log('API called from ' + req.headers.origin);
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});