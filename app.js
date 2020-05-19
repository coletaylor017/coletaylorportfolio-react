// Mostly copied from the Create-React-App docs at:
// https://create-react-app.dev/docs/deployment/
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();


// https://stackoverflow.com/a/23894573/5166231
var env = process.env.NODE_ENV || 'development';

var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

if (env === 'production') {
    app.use(forceSsl);
}

// A bit of a janky fix to the long load times of a Heroku free dyno- ping the Rellios site upon page load to start the dyno so that it will hopefully be running by the time the link is pressed
var requestProjectSites = function (req, res, next) {
    const httpClient = axios.create();
    httpClient.defaults.timeout = 1;
    httpClient.get("http://rellios.herokuapp.com").catch(function (err) {
        // do nothing
    });
    return next();
}

app.use(requestProjectSites);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, function () {
    console.log("Server started on port " + process.env.PORT);
});