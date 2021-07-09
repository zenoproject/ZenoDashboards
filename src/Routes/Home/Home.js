import React, { useState, useEffect } from 'react';
import globel from '../../styles/globel/style.module.scss';
import style from './style.module.scss';
import { EmptyState } from '../../Components/EmptyState';

const Home = (props) => {
  return (
    <>
      <article className={globel.contentBlock}>
        <EmptyState type='inProgress' customHeight={'400'} />
      </article>
    </>
  );
};

export default Home;
