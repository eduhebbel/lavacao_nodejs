import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class FormUsuario extends Component {
	constructor(props) {
		super(props);

		this.backendUrl = 'http://54.209.140.206:5000/usuarios';
		this.baseState = {
			nome: '',
			sobrenome: '',
			telefone: '',
			whatsapp: false,
			data:'',
			hora:'',
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
		this.onChangeData = this.onChangeData.bind(this);
		this.onChangeHora = this.onChangeHora.bind(this);
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
	onChangeData(e) {
		this.setState({ hora: e.target.value })
	}
	onChangeHora(e) {
		this.setState({ hora: e.target.value })
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
			data: this.state.data,
			hora: this.state.hora,
			marca: this.state.marca,
			modelo: this.state.modelo,
			ano: this.state.ano
		};

		axios.post(this.backendUrl, usuario).then(res => this.setState({ contexto: res.data })).catch(erro => this.setState({ contexto: erro.response.data }));
		this.setState(this.baseState);
	} //fim do onSubmit()


	render() {
		const contexto = this.state.contexto;
		let erros = [];
		if (contexto.erros) {
			erros = contexto.erros.map(
			(erro, idx) => (<li key={idx}>{erro.msg}</li>)
			);
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
					<b>Whatsapp:</b> {contexto.usuario.whatsapp.toString()}
				</li>),
				(<li key='5'>
					<b>Data do agendamento:</b> {contexto.usuario.data}
				</li>),	
				(<li key='6'>
					<b>Hora do agendamento:</b> {contexto.usuario.hora}
				</li>),											
				(<li key='7'>
					<b>Marca do Carro:</b> {contexto.usuario.marca}
				</li>),
				(<li key='8'>
					<b>Modelo do Carro:</b> {contexto.usuario.modelo}
				</li>),
				(<li key='9'>
					<b>Ano do Carro:</b> {contexto.usuario.ano}
				</li>)
			]
		} // fim do if (contexto.usuario)

		return (
			<>
				<h1> <b> Sistema de agendamendo</b> <br />
			-----------------------------------
				</h1>
				<h1> Informações do cliente</h1>
				<form onSubmit={this.onSubmit}>
					<fieldset>
						<legend>Novo Agendamento</legend>
						Nome: *<br />
						<input type="text" required value={this.state.nome} onChange={this.onChangeNome}  /><br />
						Sobrenome: *<br />
						<input type="text" required value={this.state.sobrenome} onChange={this.onChangeSobrenome} /><br />
						Telefone para contato: <br />
						<input type="number"  value={ this.state.telefone} onChange={this.onChangeTelefone} placeholder={'(ddd) 0808 - 08080'} max="13"/><br /><br />
						
						Você permite o contato via Whatssapp?
			            <InputGroupAddon addonType="prepend">
						<Input addon type="checkbox" checked={this.state.whatsapp} onChange={this.onChangeWhatsapp} />
						</InputGroupAddon>
						<br/>
						<br />
						<h1> Informações do agendamento</h1>
						<br/>
						Data do agendamento: <br />
						<input type="date"  min="2021-04-29"  value={this.state.data} onChange={this.onChangeData}  /><br />
	
						Hora do agendamento: <br />
						<input type="time" min="08:00" max="18:00" placeholder={'min="08:00" max="18:00"'}  value={this.state.hora} onChange={this.onChangeHora} /><br />
						<br />
						<br />
						Hora do agendamento: <br />
						<input type="time" min="08:00" max="18:00" placeholder={'min="08:00" max="18:00"'}  value={this.state.hora} onChange={this.onChangeHora} /><br />
						<br />
						<br />

						
						<h1> Informações do carro</h1>
						<br />
						Marca: *<br />
						<input type="text"  required value={this.state.marca} onChange={this.onChangeMarca} /><br />
						Modelo: *<br />
						<input type="text"  required value={this.state.modelo} onChange={this.onChangeModelo} /><br />
						Ano:<br />
						<input type="number" min="1950" max="2023" value={this.state.ano} onChange={this.onChangeAno} /><br />
						<br />
						<br />

						<Button color="success" type="submit" > Enviar</Button>
						<Button color="danger" onClick={this.onReset} >Limpar</Button><br />
						* Campos obrigatórios
					</fieldset>
				</form>


				{contexto.erros && <ul>{erros}</ul>}
				<h2><b> Dados recebidos:</b></h2>
				{contexto.usuario && <ul>{usuario}</ul>}
			</>
		); // fim do return
	} //fim do render()
} // fim da classe FormUsuario

