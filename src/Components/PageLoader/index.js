import React, { Component } from 'react';
import './style.scss';
class PageLoader extends Component {
  render() {
    return (
      <div className="page-loader">
        <div className="page-loader__inner">
          <span className="loading" />
        </div>
      </div>
    );
  }
}
export default PageLoader;
