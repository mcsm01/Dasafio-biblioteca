module.exports = app => {
    const registro_locatario = require ("../controllers/locatario.controller");

    var router = require("express").Router();

    router.post("/", registro_locatario.create),
    router.get("/:id", registro_locatario.findOne),
    router.delete("/:id", registro_locatario.delete),
    

    app.use('/api/registro_locatario', router)
}