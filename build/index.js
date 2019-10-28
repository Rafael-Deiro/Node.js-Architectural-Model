'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default.start()
    .catch((err) => {
    console.log({ message: 'Couldn`t start the application server', error: err.message, stack: err.stack });
});
//# sourceMappingURL=index.js.map