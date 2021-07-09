import React from 'react';
import style from './style.module.scss';
export function PageTitle({ title = '', subTitle = '' }) {
  return (
    <div className={style.titleBlock}>
      <h3 className={style.titleBlock__heading} >{title}</h3>
      <h2 className={style.titleBlock__subhead} >{subTitle}</h2>
    </div>
  );
};