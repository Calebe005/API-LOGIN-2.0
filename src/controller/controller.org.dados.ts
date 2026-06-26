import FilterData from "./controller.filter.dados";

// Função para organizar os dados recebidos;
export default function DUser(req:any, typeReq:string){

    // Classe de objetos de usuarios:
    class Usuario {
        id_usuario?:number;
        nome_usuario?:string;
        sobre_nome_usuario?:string;
        email_usuario?:string;
        senha_usuario?:string;
        data_nascimento?:string;

        constructor(dados: Partial<Usuario>){
            Object.assign(this, dados);
        }
    }

    let dataUser // Dados que serão filtrados
    const Validrequisitions = ["Cadastro", "Login", "Pesquisa", "Update", "Delete"]
    // Verificação do tipo de requisição:
    if(Validrequisitions.includes(typeReq)){
        // Atribuindo dados do usuario para cadastro;
        dataUser = new Usuario(req);
    } else {
        throw new Error(`Tipo de requisição desconhecido: ${typeReq}`);
    }

    FilterData(dataUser); // Controller para Filtragem dos dados;
}