"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
// Replace the uri string with your connection string.
const uri = "mongodb+srv://syeda:razi@QuizApp.d0uixi9.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
const app = (0, express_1.default)();
mongoose_1.default.connect(uri)
    .then(() => {
    console.log('connected to DB!');
    app.listen(3000, () => console.log("Server is running"));
})
    .catch(error => console.log(error));
app.get('/', (req, res) => {
    res.send('Hello!');
});
app.use(express_1.default.json());
app.use('/user', user_1.default);
