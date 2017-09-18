import React, {
    Component
}
from 'react';


export default class BotaoCustomizado extends Component {


    render() {

        return (

            <button type = {
                this.props.type
            }
            className = "btn btn-default"
            id = {
                this.props.id
            }> {
                this.props.label
            } </button>	
        )


    }




}