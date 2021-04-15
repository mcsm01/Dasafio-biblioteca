const db = require ("../models");

Autor = db.locatario;
const Op = db.sequelize.Op;//redução de codigo

exports.create = (req, res) => {
    //validate request
    if (!req.body.name){
        res.status(400).send({
            message:"Nome não pode ser vazio!"
        })
        return;
    }
    const Locatario = {
        name: req.body.name,
        cpf: req.body.cpf,
        status:req.body.status,
    }

    Autor.create(Locatario)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erro interno ao criar o locatario"
        })
    })
  
};

  exports.findOne = (req, res) => {
 
    const id = req.params.id;
  
    Autor.findByPk(id)
    .then((data) => {
        if(!data){
            res.status(404).send({message:"locatario não encontrado"})
          }       
        
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
        err.message || `Erro interno ao buscar os locatario de id: ${id}`
      });
    });
} 


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Autor.destroy({
      where: {id : id}
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "locatario atualizado"
        });
      } else {
        res.send({
          message: `Não foi possível atulizar o locatario de id: ${id}, locatario não encontrado ou body vazio`
        });
      };
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro interno ao atualizar o locatariode id: ${id}`
      });
    });
  };
  
  
