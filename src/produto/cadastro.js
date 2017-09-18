import React, {
    Component
}
from 'react';
import $ from 'jquery';
import {
    Link
}
from 'react-router-dom';
import semImagem from '../imagens/semImagem.jpeg';
import {
    InputCustomizado, InputImagemCustomizado
}
from '../componentes/input.js';
import SelectEstado from '../componentes/select.js';
import BotaoCustomizado from '../componentes/botao.js';
import Dialog from 'react-bootstrap-dialog'
import {
    Button
}
from 'react-bootstrap'


export default class CadastroProduto extends Component {


    constructor() {
        super();
        this.state = {
                nome: '',
                preco: '',
                estado: '',
                foto: '',
                fotoBinario: ''
            }
            // this.gravarProduto = this.gravarProduto.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setEstado = this.setEstado.bind(this);
        this.setFoto = this.setFoto.bind(this);
        this.status = false;




    }




    setNome(evento) {


        this.setState({
            nome: evento.target.value
        });
    }

    setPreco(evento) {


        this.setState({
            preco: evento.target.value
        });
    }

    setEstado(evento) {


        this.setState({
            estado: evento.target.value
        });
    }

    setFoto(evento) {


        var files = evento.target.files;
        var file = files[0];


        if (evento.target.files && evento.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    foto: e.target.result
                });



            };


            reader.readAsDataURL(evento.target.files[0]);




        }




    }

    componentWillMount() {

        this.setState({
            foto: semImagem
        });



    }




    componentDidMount() {

        this.setState(this.props.foto);

        this.gravarProduto = (evento) => {

            evento.preventDefault();

            var status = false;



            this.refs.dialog.show({
                title: 'Atenção',
                body: 'Gravar Produto?',
                actions: [
                    Dialog.CancelAction(),
                    Dialog.OKAction(() => {

                        var nome = this.state.nome;
                        var preco = this.state.preco;
                        var estado = this.state.estado;
                        var foto = this.state.foto;
                        this.state = {
                            teste: ''
                        };

                        var headerdata

                        $.ajax({

                            url: "http://localhost:8080/api/gravar",
                            contentType: 'application/json',

                            type: 'post',
                            data: JSON.stringify({
                                nome: nome,
                                preco: preco.replace(",", "."),
                                estado: estado,
                                foto: foto
                            }),
                            success: function(resposta) {




                            }.bind(this),
                            error: function(resposta) {

                            },


                        });
                        this.setState({
                            nome: '',
                            preco: '',
                            estado: '',
                            foto: semImagem,
                            fotoBinario: ''
                        });

                        this.refs.dialog.showAlert('Registro Cadastrado!')

                    })
                ],
                bsSize: 'small',
                onHide: (dialog) => {
                    dialog.hide()
                    console.log('closed by clicking background.')
                }
            })


        }



    };


    render() {

		return(
					<div className="col-sm-12">
    <Dialog ref="dialog" />
    <div id="main">
        <div id="logo">
            <h3>Cadastra Produto</h3>
            <Link className="btn btn-default" id="botao" to="produto">Voltar</Link>
        </div>
    </div>
    <div id="cadastro">
        <form onSubmit={ this.gravarProduto} method="post">

            <div className="col-sm-12">
                <div className="col-sm-4">
                    <img width="150" height="120" id="imagemProduto" src={ this.state.foto}></img>

                    <div>
                        <InputImagemCustomizado type="file" accept="image/*" className="" onChange={this.setFoto.bind(this)} id="botaoFoto" />
                    </div>
                </div>
            </div>


            <div className="col-sm-12">

                <div className="col-sm-6">
                    <InputCustomizado type="text" label="Nome" onChange={this.setNome} value={this.state.nome} id="inputCadastro" name="nome" />
                </div>
                <div className="col-sm-2">
                    <InputCustomizado type="tel" label="Preço" onChange={this.setPreco} value={this.state.preco} pattern="([0-9]{1,6}\.)?[0-9]{1,6},[0-9]{2}$" placeholder="1,00" id="inputCadastro" name="preco" />
                </div>
                <div className="col-sm-4">
                  <SelectEstado id="inputCadastro" value={this.state.estado} onChange={this.setEstado} label="UF"/>
                </div>

                <div className="pull-right">
                    <BotaoCustomizado type="submit" id="botao" label="Gravar" />
                </div>
            </div>
        </form>
    </div>
</div>
		);
	}


}