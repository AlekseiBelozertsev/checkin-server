const dotenv = require("dotenv");
dotenv.config();
const app = require("./app/index");


const port = process.env.PORT;

app.listen(port, () => {
  console.log('INFO :🤘🏻: Webserver started on port ' + port)
});