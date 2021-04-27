const router = require('express').Router();
//const { toDate } = require('date-fns');
const { check, body, validationResult } = require('express-validator');
//const eh_dia_util = require('eh-dia-util');

router.post('/', [
	check('nome', 'Nome é campo obrigatório.').trim().escape().notEmpty(),
	check('sobrenome', 'Sobrenome é campo obrigatório.').trim().escape().notEmpty(),
	check('telefone').trim().escape().optional(), //Opcional: Encontrar uma solução para validação de telefone em formato válido
	check('whatsapp').trim().escape().optional().toBoolean(),
	check('marca', 'Marca do veículo é campo obrigatório.').trim().escape().notEmpty(),
	check('modelo', 'Modelo do veículo é campo obrigatório.').trim().escape().notEmpty(),
	check('ano','Ano tem quer ser válido').trim().escape().optional(),
	check('startDate', 'Data é campo obrigatório.').trim().escape().notEmpty().isISO8601().toDate().isAfter().withMessage("Data do agendamento não pode ser anterior ao dia de hoje")
  //     const dataAtual = new Date(Date.now());
  //      const data = new Date(reqData);
 //       if(eh_dia_util(data)){return data >= dataAtual};
 //       return false;
 //    }).withMessage("Data inválida."),
], (req, res) => {
	const erros = validationResult(req);
	const usuario = req.body;
	const contexto = {
		usuario: usuario,
		erros: erros.array()
	};

	if (!erros.isEmpty()) {
		return res.status(422).json(contexto);
	} else {
		return res.json(contexto);
	}
});

module.exports = router;