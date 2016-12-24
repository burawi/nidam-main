var express = require('express');
// var router = express.Router();

module.exports = function(G,mdl) {

    // Match all get routes trying to remember user
    // router.get('*', G.auth.middlewares.remember);

    // GET home page
    G.app.get('/', function(req, res, next) {
        G.nidam.render(req, res, mdl.V.P.home, {mdl: mdl});
    });
};
