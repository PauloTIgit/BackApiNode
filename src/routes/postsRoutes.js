import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarPosts} from "../controllers/postsController.js";

const corsOption = {
    origin: "http://127.0.0.1:8000",
    optionsSucessStatus:200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage});



const routes = (app) => {
    app.use(cors(corsOption));

    // Permite que o servidor interprete requisições
    app.use(express.json());
    
    // Rota para buscar todos os posts    
    app.get("/posts", listarPosts);

    // Rotas para criar posts
    app.post("/posts", postarNovoPost);

    // Rotas para enviar arquivos
    app.post("/upload", upload.single("imagem"), uploadImagem);

    // Rotas para atualizar
    app.put("/upload/:id", atualizarPosts);
}

export default routes;