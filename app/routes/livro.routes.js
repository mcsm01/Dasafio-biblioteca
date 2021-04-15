module.exports = app => {
    const emprestimo_livro = require ("../controllers/livro.controller");

    var router = require("express").Router();

    //cria novo emprestimo_livro
    router.post("/", emprestimo_livro.create);
    //retornar os emprestimo_livro
    router.get("/", emprestimo_livro.findAll);
    //retorna os emprestimo_livro publicados
    router.get("/published", emprestimo_livro.findAllPublished);
    //Retorna um emprestimo_livro com id específico
    router.get("/:id", emprestimo_livro.findOne);
     //Atualiza emprestimo_livro
    router.put("/:id", emprestimo_livro.update);
    //deleta emprestimo_livro
    router.delete("/:id", emprestimo_livro.delete);
    

    app.use('/api/emprestimo_livro', router)
}