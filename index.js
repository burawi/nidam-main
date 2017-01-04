var express = require('express');
// var router = express.Router();

module.exports = function(G,mdl) {

    // Match all get routes trying to remember user
    G.app.get('*', G.auth.F.remember);

    // GET home page
    G.app.get('/', function(req, res, next) {
        mdl.V.P.home.extends(mdl.V.L.main);
        G.nidam.render(req, res, mdl.V.P.home, {mdl: mdl});
    });

    G.app.get('/admin(/)?*', G.auth.F.isAuthenticated, G.auth.F.isAdmin);
    G.app.post('/admin(/)?*', G.auth.F.isAuthenticated, G.auth.F.isAdmin);

    G.app.get('/admin',
        function(req, res, next) {
            mdl.V.P.admin_home.extends(mdl.V.L.admin);
            G.nidam.render(req, res, mdl.V.P.admin_home, {mdl: mdl});
        }
    );
};
