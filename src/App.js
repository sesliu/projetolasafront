import React, { Component, PropTypes } from 'react';

import {Link} from 'react-router-dom';
import Dialog from 'react-bootstrap-dialog';
import {Button} from 'react-bootstrap';
import semImagem from './imagens/pessoa.png';




class App extends Component {


PropTypes ={

      history: PropTypes.object.isRequered
    }


constructor(){

  super();
  this.sair = this.sair.bind(this);
  this.state ={ fotoPessoa: semImagem};

}


sair(){

this.refs.dialog.show({
  title: 'Atenção',
  body: 'Sair do sistema?',
  actions: [
    Dialog.CancelAction(),
    Dialog.OKAction(() =>{ this.props.history.push('/'); })
  ],
  bsSize: 'small',
  onHide: (dialog) => {
    dialog.hide()
    console.log('closed by clicking background.')
  }
})


  

}



  render() {
    return (


               <div>
                   <Dialog ref="dialog" />

                  <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
      
                
                        <div className="navbar-header">
                          <div className="navbar-brand"><span id="logoErp">LASA ERP</span></div>
                         </div>
                         <div className ="nav navbar navbar-right">
                            <span id="imgLogin"><img className="img-circle" src={this.state.fotoPessoa} 
                                   width="30" height= "30" /></span>
                              <span id="botaoLogout"><a title = "Sair do sistema"onClick={this.sair.bind(this)}>Sair</a></span>     
                         </div> 
                    
                               
                 
                       
      </div>
    </nav>
    <div className="container-fluid text-center">
      <div className="row.content">
        <div className="col-sm-2 sidenav">
        <p><Link to="/inicio/home">Home</Link></p>

         <p><Link to="/inicio/produto">Produto</Link></p>
        <hr></hr>
        <p><Link to="/inicio/dashBoard">DashBoard</Link></p>
      </div>
        <div className="col-sm-10" id="pagina">
               {this.props.children}
        </div>  
        <div className="col-sm-1">
        </div>
      </div>  
       </div>
       </div>


    );
  }
}

export default App;

