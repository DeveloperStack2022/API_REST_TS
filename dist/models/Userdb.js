"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserPhoto = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String
});
exports.default = mongoose_1.model('Photo', UserPhoto);
