module.exports = function (app, passport, Models) {

    //Route zum Anmelden in Shop Maske
    app.post('/passSiteProtection', function (req, res) {
        if (req.body.password == "hindelang") {
            req.login({username: "shop"}, function (err) {
                if (!err) {
                    console.log("redirect");
                    res.redirect('/');
                } else {
                    req.flash('message', 'Serverfehler!');
                    res.redirect(req.get('referer'));
                }
            });
        } else {
            req.flash('message', "Kennwort nicht korrekt. Bitte versuchen Sie es erneut!");
            res.redirect(req.get('referer'));
        }
    });
};