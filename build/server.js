'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
class Server {
    static async start() {
        const app = express_1.default();
        app.get('/', (req, res) => {
            res.json({ success: true, message: 'App successfully online' });
        });
        app.use('/api', routes_1.APIRoutes.init());
        app.listen(process.env.PORT || config_1.server.port, () => {
            console.log(`Server listening on port ${process.env.PORT || config_1.server.port} for \'${config_1.general.appName}\' application...`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map