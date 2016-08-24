module.exports = function (app, passport, Models) {

    require('./passportRoutes')(app, passport, Models);
    require('./apiFrontendRoutes')(app, Models);
    require('./jadeRoutes')(app, passport, Models);
};