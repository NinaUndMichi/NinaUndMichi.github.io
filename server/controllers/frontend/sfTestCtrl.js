module.exports = function (Models) {

    var testFunction = function (req, res) {
        res.json({greeting: "Hello World"});
    };

    return {
        testFunction: testFunction
    };
};
