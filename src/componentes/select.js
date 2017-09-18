import React, {
    Component
}
from 'react';

export class SelectCustomizado extends Component {

    render() {

        return ( <div>
            <label> {
                this.props.label
            } </label> <select className = "form-control"
            id = {
                this.props.id
            }
            value = {
                this.props.value
            }
            onChange = {
                this.props.onChange
            }>
            < option value = {
                this.props.valueOption
            }> {
                this.props.labelOption
            } </option> </select> </div>					
        )

    }


}

export default class SelectEstado extends Component{


    render(){

        return(
                 <div>
                 <label>{this.props.label}</label>
                 <select className="form-control" id={this.props.id} value={this.props.value} onChange={this.props.onChange}>
                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goias</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PR">Paraná</option>
                        <option value="PB">Paraíba</option>
                        <option value="PA">Pará</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SE">Sergipe</option>
                        <option value="SP">São Paulo</option>
                        <option value="TO">Tocantins</option>
                    </select>
                   </div> 

        )

    }


}