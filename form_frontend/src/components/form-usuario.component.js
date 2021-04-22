import React, { Component } from 'react';
import axios from 'axios';

export default class FormUsuario extends Component {
	constructor(props) {
		super(props);

		this.backendUrl = 'http://IP_AWS:5000/usuarios';
		this.baseState = {
			nome: '',
			sobrenome: '',
			telefone: '',
			whatsapp: false,
			marca: '',
			modelo: '',
			ano: '',
			contexto: {}
		} //fim de this.baseState

		this.state = this.baseState;

		this.onChangeNome = this.onChangeNome.bind(this);
		this.onChangeSobrenome = this.onChangeSobrenome.bind(this);
	 	this.onChangeTelefone = this.onChangeTelefone.bind(this);
		this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
		this.onChangeMarca = this.onChangeMarca.bind(this);
		this.onChangeModelo = this.onChangeModelo.bind(this);
		this.onChangeAno = this.onChangeAno.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);
	} // fim do constructor()

	onChangeNome(e) {
		this.setState({ nome: e.target.value })
	}

	onChangeSobrenome(e) {
		this.setState({ sobrenome: e.target.value })
	}

	onChangeTelefone(e) {
		this.setState({ telefone: e.target.value })
	}

	onChangeWhatsapp(e) { 
		this.setState({ whatsapp: e.target.value })
	}

	onChangeMarca(e) {
		this.setState({ marca: e.target.value })
	}

	onChangeModelo(e) {
		this.setState({ modelo: e.target.value })
	}

	onChangeAno(e) {
		this.setState({ ano: e.target.value })
	}

	onReset(e) {
		this.setState(this.baseState);
	}

	onSubmit(e) {
		e.preventDefault();

		const usuario = {
			nome: this.state.nome,
			sobrenome: this.state.sobrenome,
			telefone: this.state.telefone,
			whatsapp: this.state.whatsapp,
			marca: this.state.marca,
			modelo: this.state.modelo,
			ano: this.state.ano
		};

		axios.post(this.backendUrl, usuario).then(res => this.setState({ contexto: res.data})).catch(erro => this.setState({ contexto: erro.response.data }));

		this.setState(this.baseState);
	} //fim do onSubmit()

	
	render() {
		const contexto = this.state.contexto;
		let erros =[];
		if (contexto.erros) {
			erros = contexto.erros.map(
				(erro, idx) => (
					<li key={idx}>{erro.msg}</li>));
		}
		let usuario = [];
		if (contexto.usuario) {
			usuario = [
				(<li key='1'>
					<b>Nome:</b> {contexto.usuario.nome}
				</li>),
				(<li key='2'>
					<b>Sobrenome:</b> {contexto.usuario.sobrenome}
				</li>),
				(<li key='3'>
					<b>Telefone:</b> {contexto.usuario.telefone}
				</li>),
				(<li key='4'>
					<b>Whatsapp:</b> {contexto.usuario.whatsapp}
				</li>),
				(<li key='5'>
					<b>Marca:</b> {contexto.usuario.marca}
				</li>),
				(<li key='6'>
					<b>Modelo:</b> {contexto.usuario.modelo}
				</li>),
				(<li key='7'>
					<b>Ano:</b> {contexto.usuario.ano}
				</li>)
			]
		} // fim do if (contexto.usuario)

		return (
			<>
				<h1>
					Sistema de agendamendo de lavação de veículos usando Node.js, Express e React
				</h1>
				<form onSubmit={this.onSubmit}>
					<fieldset>
						<legend>Novo Agendamento</legend>
						Nome: *<br />
						<input type="text" value={this.state.nome} onChange={this.onChangeNome} /><br />
						Sobrenome: *<br />
						<input type="text" value={this.state.sobrenome}	onChange={this.onChangeSobrenome} /><br />
						Telefone para contato: <br />
						<input type="text" value={this.state.telefone} onChange={this.onChangeTelefone} /><br />
						Telefone informado permite contato por Whatsapp?
						<input type="checkbox" checked={this.state.whatsapp} onChange={this.onChangeWhatsapp} /><br />
						Marca: *<br />
						<input type="text" value={this.state.marca} onChange={this.onChangeMarca} /><br />
						Modelo: *<br />
						<input type="text" value={this.state.modelo} onChange={this.onChangeModelo} /><br />
						Ano:<br />
						<input type="number" min="1950" max="2023" value={this.state.ano} onChange={this.onChangeAno} /><br />
						<br />
						<hr />
						<input type ="submit" value="Enviar" />
						<input type ="button" value="Limpar" onClick={this.onReset} />
						* Campos obrigatórios
					</fieldset>
				</form>
				{
					contexto.erros && <ul>{erros}</ul>
				}

				<h2>Dados recebidos:</h2>
				{contexto.usuario && <ul>{usuario}</ul>}
			</>
		); // fim do return
	} //fim do render()
} // fim da classe FormUsuario

