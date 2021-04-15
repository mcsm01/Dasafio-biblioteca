const db = require ("../models");

Emprestimo = db.livro;
const Op = db.sequelize.Op;//redução de codigo

exports.create = (req, res) => {
    //validate request
    if (!req.body.name_livro){
        res.status(400).send({
            message:"Titulo não pode ser vazio!"
        })
        return;
    }
    //create Tutorial
    const Livros = {
        name_livro: req.body.name_livro,
        name_autor: req.body.name_autor,
        description: req.body.description,
        data_lancamento: req.body.data_lancamento,
        data_aluguel: req.body.data_aluguel,
        status: req.body.status,
        published: req.body.published ? req.body.published : false
    };

    
    Emprestimo.create(Livros)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro interno ao criar o registro do livro"
        })
    })
  
};

exports.findAll = (req, res) => {
    Emprestimo.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || "Erro interno ao buscar os livros"
      });
    });
  };

  exports.findAllPublished = (req, res) => {
    Emprestimo.findAll({ where: { published: true } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Erro interno!" });
      });
  };

  exports.findOne = (req, res) => {
 
    const id = req.params.id;
  
    Emprestimo.findByPk(id)
    .then((data) => {
        if(!data){
            res.status(404).send({message:"Livro não encontrado"})
          }       
        
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Erro interno ao buscar os Emprestimo de id: ${id}`
      });
    });
} 

exports.update = (req, res) => {
    const id = req.params.id;
  
    Emprestimo.update(req.body, {
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Emprestimo atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atulizar o Emprestimo de id: ${id}, Emprestimo não encontrado ou body vazio`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o tutorial de id: ${id}`
      })
    })
  }

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Emprestimo.destroy({
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Emprestimo atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atulizar o Emprestimo de id: ${id}, tutorial não encontrado ou body vazio`
        });
      };
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o tutorial de id: ${id}`
      });
    });
  };
  
  