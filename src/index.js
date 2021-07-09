import React from 'react';
import ReactDOM from 'react-dom';
import { ROUTES } from './Routes.constants';
import LoginPage from './Routes/LoginPage';
import MainFrame from './Routes/MainFrame';
import ReduxProvider from './configureRedux';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.scss';
import PrivateRoute from './Components/PrivateRoute';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.CHANGE_PASSWORD} component={LoginPage} />
          <PrivateRoute path={ROUTES.INDEX} component={MainFrame} />
        </Switch>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
