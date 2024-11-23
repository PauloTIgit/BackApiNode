import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conectar ao banco
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Funcao pegar todos os posts
export async function getTodosPosts() {
    const db = conexao.db("imersao-intabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-intabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post){
    const db = conexao.db("imersao-intabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID) }, {$set: post});
}