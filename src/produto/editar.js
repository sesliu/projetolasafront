import React, {
    Component
}
from 'react';
import {
    Link
}
from 'react-router-dom';
import $ from 'jquery';
import Produto from './produto.js';
import {
    reactLocalStorage
}
from 'reactjs-localstorage';
import {
    BrowserRouter, Route
}
from 'react-router-dom';
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


export default class AlteraProduto extends Component {


    constructor() {
        super();
        this.state = {
            nome: '',
            preco: '',
            estado: '',
            foto: '',
            fotoBinario: ''
        }
        this.gravarProduto = this.gravarProduto.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setPreco = this.setPreco.bind(this);
        this.setEstado = this.setEstado.bind(this);
        this.setFoto = this.setFoto.bind(this);



    }

    componentWillMount() {


        var codigo = reactLocalStorage.get('codigo');

        $.ajax({

            url: "http://localhost:8080/api/edita/" + codigo,
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',

            success: function(resposta) {


                var preco = JSON.stringify(resposta.preco);
                preco = preco.replace(".", ",");

                if (preco.indexOf(",") == -1) {

                    preco = preco + ",00";
                }

                this.setState({
                    nome: resposta.nome,
                    preco: preco,
                    estado: resposta.estado,
                    foto: resposta.foto,
                    codigo: resposta.codigo
                });

            }.bind(this),
            error: function(resposta) {

            },


        });
    }



    gravarProduto(evento) {


        evento.preventDefault();

        this.refs.dialog.show({
            title: 'Atenção',
            body: 'Atualizar Registro?',
            actions: [
                Dialog.CancelAction(),



                Dialog.OKAction(() => {


                    var nome = this.state.nome;
                    var preco = this.state.preco;
                    var estado = this.state.estado;
                    var foto = this.state.foto;




                    $.ajax({

                        url: "http://localhost:8080/api/atualiza",
                        contentType: 'application/json',
                        dataType: 'json',
                        type: 'post',
                        data: JSON.stringify({
                            nome: nome,
                            preco: preco.replace(",", "."),
                            estado: estado,
                            foto: foto,
                            codigo: reactLocalStorage.get('codigo')
                        }),
                        success: function(resposta) {



                        }.bind(this),
                        error: function(resposta) {

                        },


                    })

                    this.refs.dialog.showAlert('Registro Atualizado!')
                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })




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

    render() {

		return(
			
				<div className="col-sm-12">
    <Dialog ref="dialog" />
    <div id="main">
        <div id="logo">
            <h3>Editar Produto</h3>
            <Link className="btn btn-default" id="botao" to="produto">Voltar</Link>
        </div>
    </div>
    <div id="cadastro">
        <form onSubmit={ this.gravarProduto.bind(this)} method="post">

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
            </div>

            <div className="pull-right">
                <BotaoCustomizado type="submit" id="botao" label="Editar" />
            </div>
        </form>

    </div>
</div>

		);
	}
}