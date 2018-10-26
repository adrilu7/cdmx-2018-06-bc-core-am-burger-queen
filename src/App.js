import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Pedido from './Views/Pedido/Pedido';
import Login from './Views/Login/Login';
import Reset from './Views/Reset/Reset';
import Error from './Views/Error/Error';

const App = () =>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/Pedido' component={Pedido} exact />
            <Route path='/Reset' component={Reset} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

export default App;
