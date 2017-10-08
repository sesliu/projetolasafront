import React, {
    Component
}
from 'react';
import bootstrap from 'react-bootstrap';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
    GraficoVenda, GraficoVendaEstado
}
from './grafico.js';


export default class Dashboard extends Component {


    constructor() {
        super();

        this.state = {
            lista: [],
            lista1: []
        };



    }


    componentDidMount() {

        $.ajax({

            url: "https://backjava.herokuapp.com/api/vendaProduto",
            dataType: 'json',
            type: 'get',
            success: function(resposta) {


                this.setState({
                    lista: resposta
                })

            }.bind(this)

        });

        $.ajax({

            url: "https://backjava.herokuapp.com/api/vendaEstado",
            dataType: 'json',
            type: 'get',
            success: function(resposta) {


                this.setState({
                    lista1: resposta
                })

            }.bind(this)

        });

    }



    render() {




        var produtosVenda = this.state.lista.map(function(produto) {

            var preco = JSON.stringify(produto.preco);
            preco = preco.replace(".", ",");

            if (preco.indexOf(",") == -1) {

                preco = preco + ",00";
            }

            return ( < tr key = {
                    produto.nome + preco
                } >
                < td > {
                    produto.nome
                } < /td> < td > {
                    preco
                } < /td> < /tr>
            );
        }.bind(this));
        var produtosEstado = this.state.lista1.map(function(produto) {
            var preco = JSON.stringify(produto.preco);
            preco = preco.replace(".", ",");

            if (preco.indexOf(",") == -1) {

                preco = preco + ",00";
            }

            return ( <tr key = {
                    produto.nome + produto.preco
                } >
                <td> {
                    produto.nome
                } </td> <td> {
                    produto.estado
                } </td> <td> {
                    preco
                } </td> </tr>
            );
        }.bind(this));


        return (

            < div className = "col-sm-12" >
            < div id = "main" >
            < div id = "logo" >
            < h3 > Dashboard < /h3>

            < /div>  < /div>    

            < div id = "dashboard" >
            < div className = "col-sm-12" >


            < div className = "col-sm-8" >

            < div id = "tabelaDashboard1" >

            < table className = "table table-responsive" >
            < caption className = "text-center" > < h4 > Venda por Produto < /h4></caption >
            < thead >
            < tr >
            < th > Produto < /th> < th > Venda < /th> < /tr> < /thead> < tbody > {
                produtosVenda
            } < /tbody> < /table> < /div> < /div>

            < /div> < div className = "col-sm-8"
            id = "graficoVenda" >
            < GraficoVenda / >
            < /div>

            < div className = "col-sm-12" >

            < div id = "tabelaDashboard2" >
            < div >
            < table className = "table table-responsive" >
            < caption className = "text-center" > < h4 > Venda por Estado < /h4></caption >
            < thead >
            < tr >
            < th > Produto < /th> < th > Estado < /th> < th > Venda < /th> < /tr> < /thead> < tbody > {
                produtosEstado
            } < /tbody> < /table> < /div>  < /div> < div id = "graficoEstado" >
            < div className = "col-sm-8" >
            < h3 className = "text-center" > Venda por Estado < /h3> < hr / >
            < GraficoVendaEstado / >
            < /div>   < /div> < /div>


            < /div>



            < /div>

        )
    }

}
