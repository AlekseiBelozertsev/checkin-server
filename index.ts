const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.json()
})
app.listen(port, () => {
  console.log(`Hey. You are using port no. ${port}`)
})