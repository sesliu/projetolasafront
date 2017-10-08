import React, {
    Component
}
from 'react';
import {
    Link
}
from 'react-router-dom';
import $ from 'jquery';
import {
    reactLocalStorage
}
from 'reactjs-localstorage';
import {
    InputCustomizado
}
from '../componentes/input.js';
import BotaoCustomizado from '../componentes/botao.js';
import Dialog from 'react-bootstrap-dialog';
import {
    Button
}
from 'react-bootstrap';

export default class Produto extends Component {

    constructor() {
        super();
        this.state = {
            produto: ''
        }
        this.state = {
            id: ''
        }
        this.buscarProduto = this.buscarProduto.bind(this);
        this.setProduto = this.setProduto.bind(this);
        this.state = {
            lista: []
        }
        this.obterProduto = this.obterProduto.bind(this);
        this.id;


        this.url = 'https://backjava.herokuapp.com/api/';



    }




    buscarProduto(evento) {

        evento.preventDefault();



        var produto = this.state.produto;
        try {
            $.ajax({

                url: this.url + "busca/" + produto,
                dataType: 'json',
                type: 'get',
                success: function(resposta) {


                    this.setState({
                        lista: resposta
                    })

                }.bind(this)

            });
        } catch (err) {}



    }

    excluirProduto(codigo) {



        this.refs.dialog.show({
            title: 'Atenção',
            body: 'Excluir Registro?',
            actions: [
                Dialog.CancelAction(),
                Dialog.OKAction(() => {
                    reactLocalStorage.set('codigoExcluido', codigo);
                    $.ajax({
                        url: this.url + "exclui/" + codigo,
                        dataType: 'json',
                        type: 'delete',
                        success: function(resposta) {}.bind(this)

                    });
                    this.refs.dialog.showAlert('Registro Excluído!')
                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })




    }


    obterProduto(codigo) {

        reactLocalStorage.set('codigo', codigo);

    }



    setProduto(evento) {

        this.setState({
            produto: evento.target.value
        });
    }



    render() {

    reactLocalStorage.set('codigoExcluido', null);

 if (reactLocalStorage.get('codigoExcluido') != null) {



     var produto = this.state.produto;

     try {
         $.ajax({

             url: this.url + "busca/" + produto,
             dataType: 'json',
             type: 'get',
             success: function(resposta) {
                 this.setState({
                     lista: resposta
                 })

             }.bind(this)

         })
     } catch (Err) {}
     reactLocalStorage.set('codigoExcluido', null);
 }




 var produtos = this.state.lista.map(function(produto) {
             var preco = JSON.stringify(produto.preco);
             preco = preco.replace(".", ",");

             if (preco.indexOf(",") == -1) {

                 preco = preco + ",00";
             }

	return(
		 

		<tr key={produto.codigo} onClick={()=> this.obterProduto(produto.codigo)} >
    <td>{produto.codigo} </td>
    <td>{produto.nome} </td>
    <td>{preco}</td>
    <td>
        <button>
            <Link to="/inicio/editarProduto">Editar</Link>
        </button>
    </td>
    <td>
        <button onClick={()=> this.excluirProduto(produto.codigo)} >Excluir</button>
    </td>
</tr>
);}.bind(this) ); return(
<div className="col-sm-12">
    <Dialog ref="dialog" />
    <div id="main">
        <div id="logo">
            <h3>Produto</h3>
            <Link className="btn btn-default" id="botao" to="/inicio/cadastroProduto">Adicionar</Link>
            <hr></hr>
        </div>
    </div>

    <div id="buscaPesquisa">
        <form method="get" onSubmit={ this.buscarProduto.bind(this)}>
            <div className="col-sm-12">
                <div className="col-sm-8 col-sm-offset-4">
                    <InputCustomizado type="text" id="inputBusca" name="produto" placeholder="Digite o produto para a busca" value={this.state.produto} onChange={this.setProduto}/>
                </div>

            </div>
        </form>
    </div>
    <div id="tabelaBusca">
        <div className="col-sm-12">
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos}
                </tbody>

            </table>
        </div>
    </div>
</div>
				   
		)

	}


}
