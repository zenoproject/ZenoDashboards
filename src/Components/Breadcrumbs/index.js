/* eslint-disable */
import React from 'react';
import './style.scss';
export function Breadcrumbs({data}) {
  return <ul className='breadcrumb'>{createBreadCrumbs(data)}</ul>;
}
// Changed the last elemment to render as a span
const createBreadCrumbs = (data) => {
  let result = data.map((item, index) =>
    index !== data.length - 1 ? (
      <li className='breadcrumb__item'>
        <a href={item.path} title={item.name}>
          {item?.name?.substring(0, 12)}
        </a>
      </li>
    ) : (
      <li className='breadcrumb__item'>
        <span>{item.name}</span>
      </li>
    )
  );
  return result;
};
