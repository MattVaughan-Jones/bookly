"use strict";
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
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_ts_1 = __importDefault(require("./schema.ts"));
const resolvers_ts_1 = __importDefault(require("./resolvers.ts"));
const index_ts_1 = require("./database/index.ts");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: (0, apollo_server_express_1.gql)(schema_ts_1.default),
    resolvers: resolvers_ts_1.default,
});
const app = (0, express_1.default)();
function startApollo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield server.start();
        server.applyMiddleware({ app, path: '/graphql' });
    });
}
startApollo();
app.use(express_1.default.static("app/public"));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    index_ts_1.sequelize.authenticate();
});
