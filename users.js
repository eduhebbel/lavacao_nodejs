const router = require ('express'). Router();
const {check, body, validationResult} = require ('express-validator');


router.post ('/' , [
    check('nome' , 'Campo obrigatório.').trim().escape().notEmpty(),
    check('sobrenome' , 'Campo obrigatório.').trim().escape().notEmpty(),
    check('telefone' ).trim().escape(),
    check('respostaWhatss').trim().escape().bail().toBoolean(),

    check('marcaCarro' , 'Campo obrigatório').trim().escape().notEmpty(),
    check('modeloCarro' , 'Campo obrigatório').trim().escape().notEmpty(),
    check('anoCarro' ).trim().escape()  ,
    check('placaCarro' , 'Campo obrigatório').trim().escape().notEmpty(),

    check('horario' , 'Campo obrigatório').trim().escape()],
    (req, res) => {
        const erros = validationResult(req);
        const users = req.body;
        const contexto ={
            usuario : users,
            erros: erros.array ()
        };
    
        if(!erros.isEmpty()){
            return res.status(422).json(contexto);
        } else {
            return res.json(contexto);
        }
        
    });
    module.exports =router;