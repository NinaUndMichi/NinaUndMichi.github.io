module.exports = function (app, passport, Models) {

    app.get('/protectSite', function (req, res) {
        res.render('protectSite', {message: req.flash('message')});
    });

    app.get('/',protectSite, function (req, res) {
        res.render('frontend');
    });

    /********************************************************************************
     * Setzte eine Anmeldemaske for den Shop.
     ********************************************************************************/
    function protectSite(req, res, next) {
        console.log("protected???", req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.render('protectSite', {message: req.flash('message')});
        }
    }

};