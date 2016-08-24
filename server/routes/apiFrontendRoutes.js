module.exports = function (app, Models) {

    /**************************************************************************************************
     * require Middleware
     **************************************************************************************************/

    var fs = require("fs"),
        path = require("path");
    // var multiparty = require('connect-multiparty');
    // var multipartyMiddleware = multiparty();

    // var sfKontakttCtrl = require('../controllers/frontend/sfKontaktCtrl')(Models);

    //sfProduktCtrl
    app.get('/api/getFiels', function (req, res) {


        var p = "../dev_frontend/src/images"
        fs.readdir(p, function (err, files) {
            if (err) {
                throw err;
            }

            files = files.filter(function (file) {
                return !(/(^|\/)\.[^\/\.]/g).test(file)
            })
            res.json(files);
        });
    });


};