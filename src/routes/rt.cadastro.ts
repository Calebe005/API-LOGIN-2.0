import { Router } from "express";
import DUser from "../controller/controller.org.dados"; // Organizador de dados
import poll from "../model/model.connect"; // Chamando Connect ao banco.
import Insert_user from "../model/model.inserir.user";

const routes = Router();

routes.post("/", (req, res) => {
    try{
        const usuario = DUser(req.body, "Cadastro"); // Chamando controller de dados;
    }catch(err:any){
        console.error(err.message);
    }
  
});

export default routes;
