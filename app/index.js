const express = require("express")

const port = process.env.PORT;
const app = express();

// use json for API routes
app.use(express.json());

// cors for api address/port
app.get('/', (req, res) => {
    res.send('INFO :: Root route called');
});

app.listen(port, () => {
    console.log('INFO :: Webserver started on port ' + port)
});