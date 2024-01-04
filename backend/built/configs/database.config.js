"use strict";
exports.__esModule = true;
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)("mongodb+srv://hanbit10:love0324@boilerplate.wdej0qi.mongodb.net/biverse", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("connect successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
