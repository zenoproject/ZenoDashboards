import React from 'react';
import style from './style.module.scss';
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.mainFooter}>
        <div className={style.footersInner}>
          <ul className={style.footersInner__list}>
            <li>Version 1.0</li>
            <li>Powerd by TeamEldorado</li>
          </ul>
        </div>
      </footer>
    );
  }
}
