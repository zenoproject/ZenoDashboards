import React from 'react';
import { ROUTES } from '../../Routes.constants';
import { Route, Redirect } from 'react-router-dom';
import { GetLocalStorage } from '../../utils/localStorageOperations';
export default class PrivateRoute extends React.Component {
  render() {
    if (!GetLocalStorage('idToken')) {
      return <Redirect to={ROUTES.LOGIN} />;
    } else {
      return <Route path={this.props.path} component={this.props.component} />;
    }
  }
}
