import React, {
    Component
}
from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
import $ from 'jquery';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import bootstrap from 'react-bootstrap';
import {
    BarGroupTooltip
}
from 'react-d3-tooltip';
import d, {
    d3
}
from 'd3';



export class GraficoVenda extends Component {

    constructor() {

        super();
        this.state = {
            listaVenda: []
        }
        charts(fusioncharts);

    }


    componentDidMount() {

        var listaVendaResposta = [];

        $.ajax({

            url: "http://localhost:8080/api/vendaProduto",
            dataType: 'json',
            type: 'get',
            success: function(resposta) {




                for (var i = 0; i < resposta.length; i++) {


                    listaVendaResposta.push({
                        label: resposta[i].nome,
                        value: resposta[i].preco

                    });
                }


            }.bind(this)

        });

        this.setState({
            listaVenda: listaVendaResposta
        });


    }


    render() {




        var myDataSource = {
                chart: {
                    caption: "Venda por Produto",
                    subCaption: "",
                    numberPrefix: "R$",
                    theme: "ocean"
                },
                data: this.state.listaVenda
            },

            revenueChartConfigs = {
                id: "revenue-chart",
                renderAt: "revenue-chart-container",
                type: "column2d",
                width: 350,
                height: 200,
                dataFormat: "json",
                dataSource: myDataSource
            }

        return ( <ReactFC {...revenueChartConfigs
            }
            />

        )

    }


}




export class GraficoVendaEstado extends Component {



    constructor() {
        super();

        this.state = {
            listavenda: [],
            listaCampos: []
        };
        this.listaVendaResposta = []
        this.listaValor = []
        this.label = []
        this.verificarValor = this.verificarValor.bind(this);
    }


    verificarValor(valor, array) {

        return array.indexOf(valor) > -1;
    }

    componentDidMount() {


        var listaCamposResposta = []
        var campos = [];
        var novosCampos = [];

        $.ajax({


            url: "http://localhost:8080/api/vendaEstado",
            dataType: 'json',
            type: 'get',
            success: function(resposta) {


                for (var i = 0; i < resposta.length; i++) {


                    var preco = JSON.stringify(resposta[i].preco);


                    if (preco.indexOf(".") == -1) {

                        preco = preco + ".00";
                    }


                    this.listaVendaResposta.push({
                        estado: resposta[i].estado,
                        [resposta[i].nome]: preco


                    });

                    this.listaValor.push({

                        [preco]: preco
                    })



                    listaCamposResposta.push({
                        field: resposta[i].nome,
                        name: resposta[i].nome
                    })




                }

            }.bind(this)

        });
        




        this.setState({
            listaCampos: listaCamposResposta
        });


    }



    render() {

        var generalChartData = this.listaVendaResposta;

        var width = 450,
            height = 400,
            title = "Venda por estado",
            chartSeries = this.state.listaCampos,

            x = function(d) {
                return d.estado;
            },
            xScale = 'ordinal',
            xLabel = "Estado",
            yLabel = "valor",
            yTickFormat = d.format(",.2f");

        return (

            <BarGroupTooltip title = {
                title
            }
            data = {
                generalChartData
            }
            width = {
                width
            }
            height = {
                height
            }
            chartSeries = {
                chartSeries
            }
            x = {
                x
            }
            xScale = {
                xScale
            }
            xLabel = {
                xLabel
            }
            yLabel = {
                yLabel
            }
            yTickFormat = {
                yTickFormat
            }
            />
        );
    }

}