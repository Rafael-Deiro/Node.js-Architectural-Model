'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
class Server {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            app.get('/', (req, res) => {
                res.json({ success: true, message: 'App successfully online' });
            });
            app.use('/api', routes_1.APIRoutes.init());
            app.listen(process.env.PORT || config_1.server.port, () => {
                console.log(`Server listening on port ${process.env.PORT || config_1.server.port} for \'${config_1.general.appName}\' application...`);
            });
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map