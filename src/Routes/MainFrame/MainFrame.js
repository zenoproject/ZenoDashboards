import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../../Components/PrivateRoute';
import { ROUTES } from '../../Routes.constants';
import ErrorBoundary from '../../Components/ErrorBoundary';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PageLoader from '../../Components/PageLoader';
import style from './style.module.scss';
import Sidebar from '../../Components/Sidebar';
import Home from '../Home';
import { GetLocalStorage } from '../../utils/localStorageOperations';

class MainFrame extends React.Component {
  renderRoutes() {
    let routes = [];
    routes.push(<PrivateRoute path={ROUTES.HOME} component={Home} />);
    // routes.push(<PrivateRoute path={ROUTES.RULES} component={Rules} />);
    // routes.push(<PrivateRoute path={ROUTES.USERS} component={Users} />);
    // routes.push(<PrivateRoute path={ROUTES.PROFILE} component={UserProfile} />);
    // routes.push(<PrivateRoute path={ROUTES.REPOSITORIES} component={Repositories} />);
    GetLocalStorage('idToken') && routes.push(<Redirect from={ROUTES.INDEX} to={ROUTES.HOME} />);
    return routes;
  }
  getAside = () =>
    [ROUTES.PROFILE].includes(this.props.location.pathname) ? (
      ''
    ) : (
      <aside className={style.pageAside}>
        <Sidebar />
      </aside>
    );

  render() {
    return (
      <div className={style.mainWrapper}>
        {this.getAside()}
        <section className={style.bodyContent}>
          <Header />
          <main className={style.mainContent}>
            <ErrorBoundary>
              <Suspense fallback={<LoadingMessage />}>
                <Switch>{this.renderRoutes()}</Switch>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </section>
      </div>
    );
  }
}
const LoadingMessage = () => <PageLoader />;
export default MainFrame;
