import React from 'react';
import noData from '../../../public/img/nodat-img.jpg';
import noNetwork from '../../../public/img/network-error.jpg';
import noTableData from '../../../public/img/list-empty.jpg';
import inProgress from '../../../public/img/in-progress.png';
import style from './style.module.scss';
export const EmptyState = ({
  type,
  emptyStateMessage,
  component,

  ...props
}) => {
  let customStyle = {};
  if (props.customHeight) {
    customStyle = {
      minHeight: props.customHeight + 'px',
    };
  }
  return (
    <div className={style.emptyState} style={customStyle}>
      <div className={style.emptyState__content}>
        <span className={style.emptyImage}>
          <img alt='error' src={getErrorImage(type, component)} />
        </span>
        <h3>{getErrorMessage(type)}</h3>
        <p>{emptyStateMessage}</p>
      </div>
    </div>
  );
};
const getErrorImage = (type, component) => {
  if (type === 'Network Error') {
    return noNetwork;
  } else if (type === 'table') return noTableData;
  else if (component === 'filter') return noData;
  else if (type === 'inProgress') return inProgress;
  return noData;
};

const getErrorMessage = (type) => {
  if (type === 'Network Error') {
    return '';
  } else if (type === 'table') {
    return 'Empty List';
  } else if (type === 'inProgress') {
    return 'Dashboard in progress';
  } else return 'No Data Found';
};
