"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const userschema = new schema({
    name: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        reuired: true
    }
}, { timestamps: true });
const User = mongoose_1.default.model("User", userschema);
exports.default = User;
