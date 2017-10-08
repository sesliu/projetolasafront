import React, {
    Component
}
from 'react';
import bootstrap from 'react-bootstrap';
import $ from 'jquery';


export default class Home extends Component {


    constructor() {
        super();
        this.state = {
            lista: []
        }

        this.url = 'https://backjava.herokuapp.com/api'

    }




    componentDidMount() {


        $.ajax({

            url: this.url + "/produtos",
            dataType: 'json',
            type: 'get',
            success: function(resposta) {



                this.setState({
                    lista: resposta
                })

            }.bind(this)

        });


    }


    render() {

        var produtosCadastrados = this.state.lista.map(function(produto) {
            var preco = JSON.stringify(produto.preco);
            preco = preco.replace(".", ",");

            if (preco.indexOf(",") == -1) {

                preco = preco + ",00";
            }

            return ( < tr key = {
                    produto.codigo
                } >
                < td > {
                    produto.nome
                } < /td> < td > {
                    preco
                } < /td> < /tr>
            );
        }.bind(this));

        return (

            <div className = "col-sm-12">
            <div id = "main" >
            <div id = "logo" >
            <h3 > Home do admin < /h3> </div>  </div>    <div>
            <div className = "col-sm-12"
            id = "home" >
            <div className = "col-sm-12" >
            <div id = "homedashboard" >
            <div id = "tabela" >
            <table className = "table table-responsive">
            <caption className = "text-center"> <h4> Últimos Produtos Cadastrados < /h4></caption >
            <thead>
            <tr>
            <th> Produto </th> <th> Preço </th> </tr> </thead> <tbody> {
                produtosCadastrados
            } </tbody> </table> </div> </div> </div> </div> </div>  </div>  
        );

    }


}
