import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Pedido from '../Views/Pedido/Pedido';
import Login from '../Views/Login/Login';
import Error from '../Components/Error/Error';


import './App.css';
const App = () =>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/Pedido' component={Pedido} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

export default App;
