var express = require('express');
// var router = express.Router();

module.exports = function(G) {

    // Match all get routes trying to remember user
    // router.get('*', G.auth.middlewares.remember);

    // GET home page
    G.app.get('/', function(req, res, next) {
        res.render(__dirname+'/views/pages/home.pug',G);
    });
};
