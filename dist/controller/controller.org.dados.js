"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DUser;
const controller_filter_dados_1 = __importDefault(require("./controller.filter.dados"));
// Função para organizar os dados recebidos;
function DUser(req, typeReq) {
    // Classe de objetos de usuarios:
    class Usuario {
        constructor(dados) {
            Object.assign(this, dados);
        }
    }
    let dataUser; // Dados que serão filtrados
    const Validrequisitions = ["Cadastro", "Login", "Pesquisa", "Update", "Delete"];
    // Verificação do tipo de requisição:
    if (Validrequisitions.includes(typeReq)) {
        // Atribuindo dados do usuario para cadastro;
        dataUser = new Usuario(req);
    }
    else {
        throw new Error(`Tipo de requisição desconhecido: ${typeReq}`);
    }
    (0, controller_filter_dados_1.default)(dataUser); // Controller para Filtragem dos dados;
}
//# sourceMappingURL=controller.org.dados.js.map