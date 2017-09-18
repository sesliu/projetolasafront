import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home/home.js';
import Produto from './produto/produto.js';
import Dashboard from './dashboard/dashboard.js'
import CadastroProduto from './produto/cadastro.js';
import AtualizaProduto from './produto/editar.js';
import Login from './login/login.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(



	<BrowserRouter>
	    <div>
		    <Route exact path="/" component={Login}/>
		    <Route path="/inicio/" component={App}/>
		    <Route exact path="/inicio/home/" component={Home}/>
		    <Route path="/inicio/dashboard/" component={Dashboard}/> 
		    <Route path="/inicio/produto/" component={Produto} />
		    <Route path="/inicio/cadastroProduto/" component={CadastroProduto}/> 
		    <Route path="/inicio/editarProduto/" component={AtualizaProduto}/> 
		</div>
		
	</BrowserRouter>

	, document.getElementById('root'));
registerServiceWorker();
