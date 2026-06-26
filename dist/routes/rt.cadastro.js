"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_org_dados_1 = __importDefault(require("../controller/controller.org.dados")); // Organizador de dados
const routes = (0, express_1.Router)();
routes.post("/", (req, res) => {
    try {
        const usuario = (0, controller_org_dados_1.default)(req.body, "Cadastro"); // Chamando controller de dados;
    }
    catch (err) {
        console.error(err.message);
    }
});
exports.default = routes;
//# sourceMappingURL=rt.cadastro.js.map