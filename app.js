// Mostly copied from the Create-React-App docs at:
// https://create-react-app.dev/docs/deployment/
const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    console.log("request!");
    // https://stackoverflow.com/a/7458587/5166231
    if (!req.secure) {
        console.log("not secure!");
        res.redirect('https://' + req.headers.host + req.url);
    }
    else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
});
app.listen(process.env.PORT, function () {
    console.log("Server started on port " + process.env.PORT);
});