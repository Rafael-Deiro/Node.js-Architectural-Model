'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const express_1 = require("express");
const bodyParser = __importStar(require("body-parser"));
class APIRoutes {
    static init() {
        const router = express_1.Router();
        router.all('*', (req, res, next) => {
            console.log(`Request made to: ${req.originalUrl}`);
            next();
        });
        router.use(bodyParser.json());
        router.use('/user', user_1.UserController.init());
        return router;
    }
}
exports.APIRoutes = APIRoutes;
//# sourceMappingURL=index.js.map