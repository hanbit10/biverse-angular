"use strict";
exports.__esModule = true;
exports.VerseModel = exports.VerseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.VerseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    cookTime: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, "default": false },
    origins: { type: [String], required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String] }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.VerseModel = (0, mongoose_1.model)("verse", exports.VerseSchema);
