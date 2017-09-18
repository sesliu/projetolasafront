import React, {
    Component
}
from 'react';


export class InputCustomizado extends Component {


    render() {

        return (

            <div>
            <label> {
                this.props.label
            } </label> < input className = "form-control"
            type = {
                this.props.type
            }
            id = {
                this.props.id
            }
            name = {
                this.props.name
            }
            value = {
                this.props.value
            }
            placeholder = {
                this.props.placeholder
            }
            required pattern = {
                this.props.pattern
            }
            step = {
                this.props.step
            }
            min = {
                this.props.min
            }
            max = {
                this.props.max
            }
            onChange = {
                this.props.onChange
            }
            /> </div>


        )

    }


}


export class InputImagemCustomizado extends Component {


    render() {

        return (

            < div >
            < label > {
                this.props.label
            } < /label> < input className = "form-control"
            type = {
                this.props.type
            }
            id = {
                this.props.id
            }
            name = {
                this.props.name
            }
            value = {
                this.props.value
            }
            placeholder = {
                this.props.placeholder
            }
            accept = {
                this.props.accept
            }
            step = {
                this.props.step
            }
            min = {
                this.props.min
            }
            max = {
                this.props.max
            }
            onChange = {
                this.props.onChange
            }
            /> < /div>


        )

    }


}




export class InputClasseCustomizado extends Component {


    render() {

        return (

            < div >
            < label > {
                this.props.label
            } < /label> < input className = {
                this.props.className
            }
            type = {
                this.props.type
            }
            id = {
                this.props.id
            }
            name = {
                this.props.name
            }
            value = {
                this.props.value
            }
            placeholder = {
                this.props.placeholder
            }
            accept = {
                this.props.accept
            }
            pattern = {
                this.props.pattern
            }
            step = {
                this.props.step
            }
            min = {
                this.props.min
            }
            max = {
                this.props.max
            }
            onChange = {
                this.props.onChange
            }
            /> < /div>


        )

    }


}