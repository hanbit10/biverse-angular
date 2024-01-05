"use strict";
exports.__esModule = true;
exports.OrderModel = exports.OrderItemSchema = void 0;
var mongoose_1 = require("mongoose");
var verse_model_1 = require("./verse.model");
var order_status_1 = require("../constants/order_status");
exports.OrderItemSchema = new mongoose_1.Schema({
    verse: { type: verse_model_1.VerseSchema, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});
var OrderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    //addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    items: { type: [exports.OrderItemSchema], required: true },
    status: { type: String, "default": order_status_1.OrderStatus.NEW },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.OrderModel = (0, mongoose_1.model)("order", OrderSchema);
