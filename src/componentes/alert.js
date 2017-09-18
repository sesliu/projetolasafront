import React, {
    Component
}
from 'react'
import AlertContainer from 'react-alert';

export default class Alerta extends Component {

    constructor() {
        super();


    }


    render() {
        return ( < div >
            < AlertContainer ref = {
                a => this.msg = a
            } {...this.alertOptions
            }
            /> < button onClick = {
                this.showAlert
            } > Show Alert < /button> < /div>
        )
    }


