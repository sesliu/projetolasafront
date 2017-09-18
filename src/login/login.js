import React, {
    Component, PropTypes
}
from 'react';
import bootstrap from 'react-bootstrap';
import ReactDOM from 'react-dom';
import imagemLogin from '../imagens/imgLogo.png';
import {
    InputCustomizado, InputClasseCustomizado
}
from '../componentes/input.js';;

export default class Login extends Component {

    PropTypes = {

        history: PropTypes.object.isRequered
    }

    constructor() {

        super();
        this.state = {
            imgLogo: ''
        }
        this.acessar = this.acessar.bind(this);
        this.state = {
            mensagem: ''
        }
        this.state = {
            login: '',
            senha: '',
            mensagem: ''
        };
        this.setLogin = this.setLogin.bind(this);
        this.setSenha = this.setSenha.bind(this);

    }


    acessar(evento) {

        evento.preventDefault();

        if ((this.state.login != 'admin' || this.state.login != 'ADMIN') && (this.state.senha != '12345678')) {

            this.setState({
                mensagem: 'Login ou senha inválidos'
            })

        } else {

            this.props.history.push('/inicio/home');

        }



    }


    setLogin(evento) {

        this.setState({
            login: evento.target.value
        });

    }

    setSenha(evento) {

        this.setState({
            senha: evento.target.value
        });
    }


    componentWillMount() {


        this.setState({
            imgLogo: imagemLogin
        });

    }

    render() {

		return(

	<div>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="row">
                <div className="navbar-header">
                    <div className="navbar-brand"><span id="logoErp">LASA ERP</span>
                    </div>
                </div>

            </div>

        </div>
    </nav>
    <div className="container">
        <div className="row">
            <div className="col-sm-2">
                <div id="fundoLogin">
                </div>
            </div>
            <div className="col-sm-8">
                <div className="well" id="login">
                    <div>
                        <img id="imagem" src={ this.state.imgLogo} className="img-responsive" />
                    </div>
                    <div className="col-sm-4">
                        <h2><span>Bem Vindo</span></h2>
                        <div className="text-left">
                            <p>
                                Bem-vindo ao website do plano de Ações das Lojas Americanas. Aqui você poderá acessar todas as informações relevantes ao seu plano. Por favor entre no site usando o usuário e senha que você definiu no seu processo de ativação de conta.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-sm-offset-3">
                        <div id="formLogin">
                            <form onSubmit={this.acessar.bind(this)}>
                                <InputCustomizado type="text" name="login" placeholder="Digite o nome" id="inputLogin" required value={this.state.login} onChange={this.setLogin}/>
                                <InputCustomizado type="password" name="senha" placeholder="Digite a senha" id="inputLogin" required value={this.state.senha} onChange={this.setSenha}/>
                                <div className="text-center">
                                    <span><a href="">Esqueci a senha</a></span>
                                </div>
                                <InputClasseCustomizado type="submit" className="btn btn-block" id="botaoLogin" />
                            </form>
                            <div className="text-center">
                                <span><strong>{this.state.mensagem}</strong></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="col-sm-2">


        </div>
    </div>
</div>
     


			)

	}
}