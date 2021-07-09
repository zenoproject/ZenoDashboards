import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Dropdown } from '../Dropdown';
import UserProfileDropdown from '../UserProfileDropdown';
import { PageTitle } from '../../Components/PageTitle';
import style from './style.module.scss';
import { GetHeaderTitles, GetHeaderSubtitles } from './Header.Constants';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOnClass: false,
    };
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('popstate', () => {
      this.setState({ addOnClass: false });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  showProfile = () => {
    this.setState({
      addOnClass: !this.state.addOnClass,
    });
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ addOnClass: false });
    }
  };

  createDropDown = () => {
    return (
      <Dropdown
        addOnClass={this.state.addOnClass}
        customButton={
          <a className={style.showProfile}>
            <span className={style.showProfile__image}>
              <img src='/img/avatar.png' alt='logo' />
            </span>
          </a>
        }
      >
        <UserProfileDropdown />
      </Dropdown>
    );
  };
  render() {
    return (
      <header className={style.mainHeader}>
        <div className={style.headerInner}>
          <div className={style.headerInner__title}>
            <PageTitle
              title={GetHeaderTitles({ headerPath: this.props.location.pathname })}
              subTitle={GetHeaderSubtitles({ headerPath: this.props.location.pathname })}
            />
          </div>
          <ul className={style.headerInner__navigation}>
            <li onClick={this.showProfile}>
              <div ref={this.setWrapperRef}>{this.createDropDown()}</div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default withRouter(Header);
