import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
export const ContentLoader = ({
  height = 1,
  width = 100,
  number = 4,
  spaceBetween = 0.5,
  paragraphFactor = 1.15,
  radius = 0.2,
}) => {
  // Add extra styles if needed here
  let customLiStyle = {
    minHeight: `${height}rem`,
    width: `${width}%`,
    marginBottom: `${spaceBetween}rem`,
    borderRadius: `${radius}rem`,
  };

  return (
    <ul className={style.loaderBlock}>
      {createLoaders({
        number,
        customLiStyle,
        paragraphDivisionFactor: paragraphFactor,
      })}
    </ul>
  );
};
// Creates the number of li based on the number (Default is 4)
const createLoaders = ({ number, customLiStyle, paragraphDivisionFactor }) => {
  let loaders = [];
  for (let index = 0; index < number; index++) {
    if (index === 0) {
      let customParagraphStyle = { ...customLiStyle };
      customParagraphStyle.width = `${parseInt(customParagraphStyle.width) / paragraphDivisionFactor
        }%`;
      loaders.push(
        <li
          className={style.loaderBlock__element}
          style={customParagraphStyle}
        />
      );
    } else
      loaders.push(
        <li className={style.loaderBlock__element} style={customLiStyle} />
      );
  }
  return loaders;
};
ContentLoader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  number: PropTypes.number,
  spaceBetween: PropTypes.string,
  paragraphFactor: PropTypes.string,
  radius: PropTypes.string,
};
