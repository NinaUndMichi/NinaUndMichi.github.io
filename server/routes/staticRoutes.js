module.exports = function (app) {
    var express = require('express');
    app.use(express.static('../build/public'));
};