import express, { json } from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    },
    { 
        id: 2,
        descricao: "Quinta foto teste", 
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    },
    { 
        id: 3,
        descricao: "Sexta foto teste", 
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    },
    { 
        id: 4,
        descricao: "Sétima foto teste", 
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    },
    { 
        id: 5,
        descricao: "Oitava foto teste", 
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    },
    { 
        id: 6,
        descricao: "Nona foto teste", 
        imagem: "https://placecats.com/millie/300/150",
        dataCriacao: "2024/11/19",
    }
];

const app = express();
app.use(express.json());

app.listen(3000,() => {
    console.log("Server ativo...");    
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
