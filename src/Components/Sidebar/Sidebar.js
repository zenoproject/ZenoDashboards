import React from 'react';
import constants from './Sidebar.constants';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { ROUTES } from '../../Routes.constants';
import SVGIcons from '../SVGIcons';
function Sidebar(props) {
  return (
    <div className={style.asideBlock}>
      <div className={style.brandLogo}>
        <Link className={style.brandLink} to={ROUTES.HOME}>
          {/* <span>Logo</span> */}
          <span>File Drop</span>
        </Link>
      </div>
      <h5>File Catalog</h5>
      <ul className={style.asideMenu} children={constants.navItems.map((el) => tabItem(el, props))} />
    </div>
  );
}
function tabItem(el, props) {
  return <li key={el.path}>{renderTab(el, props)}</li>;
}

function getTabItemClass(path) {
  return (isActiveRoute(path) && 'light') + 'active' + ' current';
}

function isActiveRoute(route) {
  return window.location.pathname.startsWith(route);
}
function getAtagClass(el) {
  return (
    <>
      <span className={style.menuIcon} >
        <SVGIcons type={el.svgType} />
      </span>
      <span children={el.label} />
    </>
  );
}
function renderTab(el, { history, location }) {
  const onClick = () => {
    if (window.location.pathname !== el.path) history.push(el.path);
  };
  return (
    <a onClick={onClick} className={getTabItemClass(el.path)}>
      {getAtagClass(el)}
    </a>
  );
}
export default Sidebar;
