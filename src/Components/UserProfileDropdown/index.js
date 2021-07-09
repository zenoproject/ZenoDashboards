/* eslint-disable */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ClearLocalStorage, GetLocalStorage } from '../../utils/localStorageOperations';
import style from './style.module.scss';
import { ROUTES } from '../../Routes.constants';
import ModalWindow from '../ModalWindow';
import { ButtonElement } from '../ButtonElement';

class UserProfileDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  onCancelLogout = () => {
    this.setState({ visible: !this.state.visible });
  };

  onLogout = () => {
    ClearLocalStorage();
    this.props.history.push(ROUTES.INDEX);
  };

  footer = () => {
    return (
      <>
        <ButtonElement type='primary' children='No' onClick={() => this.onCancelLogout()} />
        <ButtonElement type='' children='Yes' onClick={() => this.onLogout()} />
      </>
    );
  };
  render() {
    return (
      <>
        <div className={style.profileBlock}>
          <div className={style.profileBlock__image}>
            <span>
              <img src='/img/avatar.png' alt='logo' />
            </span>
            <span className={style.editOverlay}>edit</span>
          </div>
          <h3 className={style.profileBlock__name}>{GetLocalStorage('username')}</h3>
        </div>
        <ul className={style.userProfile}>
          <li>
            <Link to={ROUTES.PROFILE}>
              <span>
                <svg viewBox='0 0 477.119 512'>
                  <path
                    id='Path_264'
                    data-name='Path 264'
                    d='M18.686,512A18.685,18.685,0,0,1,0,493.314c0-132.15,84.723-204.926,238.56-204.926S477.12,361.172,477.119,493.314A18.685,18.685,0,0,1,458.433,512Zm19.366-37.372H439.075c-7.356-98.806-74.72-148.865-200.515-148.865S45.4,375.822,38.052,474.628Zm76.557-348.19C114.609,54.358,167.9,0,238.56,0S362.511,54.358,362.511,126.443c0,74.184-55.6,134.534-123.951,134.534S114.609,200.627,114.609,126.437Zm37.372.005c0,53.579,38.836,97.169,86.579,97.169s86.579-43.59,86.579-97.169c0-50.783-37.217-89.071-86.579-89.071C188.394,37.372,151.981,74.832,151.981,126.443Z'
                  />
                </svg>
              </span>
              <span> View Profile</span>
            </Link>
          </li>
          {/* <li>
            <Link>
              <span>
                <svg viewBox='0 0 512 488.102'>
                  <path
                    id='Path_264'
                    data-name='Path 264'
                    d='M15,488.1a15,15,0,0,1-15-15V148.3a15,15,0,0,1,9.251-13.855l68-28.218V15a15,15,0,0,1,15-15H419.747a15,15,0,0,1,15,15v91.227l68,28.217A15,15,0,0,1,512,148.3V473.1a15,15,0,0,1-15,15Zm40.909-30H456.091L256,288.579Zm286.668-135.49L482,440.734V184.306ZM30,440.734,169.423,322.611,30,184.306ZM265.7,257.475l53.9,45.671,85.146-84.463V30H107.252V218.682L192.4,303.145l53.9-45.671a15,15,0,0,1,19.393,0Zm169.051-68.552,35.692-35.406-35.692-14.809ZM41.561,153.517l35.692,35.406V138.707Zm140.157,39.93a15,15,0,1,1,0-30H330.282a15,15,0,1,1,0,30Zm0-71.553a15,15,0,1,1,0-30H330.282a15,15,0,1,1,0,30Z'
                  />
                </svg>
              </span>
              <span> Contact Support</span>
            </Link>
          </li> */}
          {/* <li>
            <Link>
              <span>
                <svg viewBox='0 0 512.002 512'>
                  <path
                    id='Path_264'
                    data-name='Path 264'
                    d='M80,512A80.091,80.091,0,0,1,0,432V268a80.091,80.091,0,0,1,80-80h23.963V117.466C103.963,52.695,157.8,0,223.963,0s120,52.695,120,117.466V188H368a80.091,80.091,0,0,1,80,80v40a20,20,0,0,1-40,0V268a40.045,40.045,0,0,0-40-40H80a40.046,40.046,0,0,0-40,40V432a40.045,40.045,0,0,0,40,40H238a20,20,0,1,1,0,40Zm63.963-394.534V188h160V117.466c0-42.715-35.888-77.467-80-77.467S143.963,74.751,143.963,117.466ZM333.072,497.823c-.061-.058-.12-.115-.18-.174l-63.82-62.281a20,20,0,0,1,27.937-28.626l63.708,62.17a11.42,11.42,0,0,0,16.44-.855l98.581-137.7a20,20,0,0,1,32.524,23.285L409.282,491.9q-.325.452-.673.887a51.563,51.563,0,0,1-36.666,19.1q-1.7.115-3.393.113A51.561,51.561,0,0,1,333.072,497.823ZM318,346a20,20,0,1,1,20,20A20,20,0,0,1,318,346Zm-76,0a20,20,0,1,1,20,20A20,20,0,0,1,242,346Zm-75,0a20,20,0,1,1,20,20A20,20,0,0,1,167,346Zm-75,0a20,20,0,1,1,20,20A20,20,0,0,1,92,346Z'
                  />
                </svg>
              </span>
              <span> Change Password</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>
                <svg viewBox='0 0 512 512'>
                  <path
                    data-name='Path 264'
                    d='M239.933,512A47.188,47.188,0,0,1,192.8,464.867V454a206.663,206.663,0,0,1-32.1-13.323l-7.7,7.7a47.134,47.134,0,0,1-66.665-.007L63.622,425.66a47.133,47.133,0,0,1,.006-66.666l7.7-7.7A206.679,206.679,0,0,1,58,319.2H47.133A47.187,47.187,0,0,1,0,272.067V239.933A47.188,47.188,0,0,1,47.134,192.8H58a206.716,206.716,0,0,1,13.323-32.1l-7.7-7.7a47.133,47.133,0,0,1,.006-66.665L86.342,63.623a47.128,47.128,0,0,1,66.664.006l7.7,7.7A206.877,206.877,0,0,1,192.8,58V47.133A47.187,47.187,0,0,1,239.934,0h32.134A47.187,47.187,0,0,1,319.2,47.133V58a206.7,206.7,0,0,1,32.1,13.323l7.7-7.7a47.133,47.133,0,0,1,66.665.007l22.712,22.71a47.133,47.133,0,0,1-.006,66.666l-7.7,7.7A206.679,206.679,0,0,1,454,192.8h10.87A47.188,47.188,0,0,1,512,239.933v32.135A47.188,47.188,0,0,1,464.866,319.2H454a206.752,206.752,0,0,1-13.323,32.1l7.7,7.7a47.134,47.134,0,0,1-.006,66.665l-22.713,22.712a47.128,47.128,0,0,1-66.664-.006l-7.7-7.7A206.877,206.877,0,0,1,319.2,454v10.871A47.187,47.187,0,0,1,272.066,512ZM165.717,409.17a176.789,176.789,0,0,0,45.831,19.025A15,15,0,0,1,222.8,442.719v22.148A17.153,17.153,0,0,0,239.934,482h32.134A17.153,17.153,0,0,0,289.2,464.867V442.719a15,15,0,0,1,11.253-14.524,176.789,176.789,0,0,0,45.831-19.025,15,15,0,0,1,18.243,2.3l15.688,15.69a17.128,17.128,0,0,0,24.224.006l22.727-22.726a17.13,17.13,0,0,0,.006-24.224l-15.7-15.7a15,15,0,0,1-2.3-18.242A176.782,176.782,0,0,0,428.2,300.452,15,15,0,0,1,442.72,289.2h22.147A17.153,17.153,0,0,0,482,272.068V239.934A17.153,17.153,0,0,0,464.867,222.8H442.72A15,15,0,0,1,428.2,211.549a176.821,176.821,0,0,0-19.023-45.831,15,15,0,0,1,2.3-18.242l15.689-15.689a17.129,17.129,0,0,0,.006-24.225L404.447,84.838a17.129,17.129,0,0,0-24.225-.005l-15.694,15.7a15,15,0,0,1-18.243,2.3,176.789,176.789,0,0,0-45.831-19.025A15,15,0,0,1,289.2,69.283V47.133A17.154,17.154,0,0,0,272.068,30H239.935A17.153,17.153,0,0,0,222.8,47.133V69.281a15,15,0,0,1-11.253,14.524,176.817,176.817,0,0,0-45.831,19.024,15,15,0,0,1-18.243-2.3L131.787,84.836a17.128,17.128,0,0,0-24.224-.007L84.836,107.555a17.13,17.13,0,0,0-.005,24.225l15.694,15.7a15,15,0,0,1,2.306,18.242,176.76,176.76,0,0,0-19.024,45.831A15,15,0,0,1,69.282,222.8H47.134A17.155,17.155,0,0,0,30,239.933v32.135A17.153,17.153,0,0,0,47.134,289.2H69.281a15,15,0,0,1,14.524,11.251,176.813,176.813,0,0,0,19.023,45.832,15,15,0,0,1-2.3,18.242L84.835,380.213a17.128,17.128,0,0,0-.006,24.224l22.725,22.725a17.129,17.129,0,0,0,24.225.006l15.694-15.7a15.654,15.654,0,0,1,10.742-4.41A14.585,14.585,0,0,1,165.717,409.17ZM144.6,256A111.4,111.4,0,1,1,256,367.4,111.525,111.525,0,0,1,144.6,256Zm30,0A81.4,81.4,0,1,0,256,174.6,81.492,81.492,0,0,0,174.6,256Z'
                  />
                </svg>
              </span>
              <span> Settings</span>
            </Link>
          </li> */}
          <li
            onClick={() => {
              this.setState({
                visible: true,
              });
            }}
          >
            <Link
              className={style.logoutPane}
              onClick={() => {
                this.setState({ visible: true });
              }}
            >
              <span>
                <svg viewBox='0 0 226.529 249.963'>
                  <path
                    data-name='Path 264'
                    d='M90.438,247.662a112.639,112.639,0,0,1-40.5-17.043A113.6,113.6,0,0,1,8.9,180.786a112.723,112.723,0,0,1-6.6-21.261,114.357,114.357,0,0,1,0-45.654,112.636,112.636,0,0,1,17.042-40.5A113.6,113.6,0,0,1,69.177,32.335c1.5-.636,3.042-1.247,4.576-1.818a14.6,14.6,0,0,1,5.3,1.366,9.086,9.086,0,0,1,4.493,4.643c0-.005,0-.008,0-.009s.005.005.015.025a9.831,9.831,0,0,1,.626,3.442,14.035,14.035,0,0,1-.34,3.438,16.38,16.38,0,0,1-1.59,4.2c-1.916.667-3.832,1.4-5.695,2.192a94.17,94.17,0,1,0,73.407,0c-.843-.357-1.7-.706-2.559-1.038a11.954,11.954,0,0,1-2.689-5.124,10.888,10.888,0,0,1,.926-7.126,14.28,14.28,0,0,1,8.234-5.593c1.162.446,2.33.917,3.471,1.4A113.3,113.3,0,0,1,90.438,247.662ZM103.222,93.736V10.043a10.043,10.043,0,1,1,20.086,0V93.736a10.043,10.043,0,1,1-20.086,0Z'
                  />
                </svg>
              </span>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        <ModalWindow
          title='Heads Up!'
          width={50}
          visible={this.state.visible}
          onCancel={this.onCancelLogout}
          footer={this.footer()}
        >
          <span>Are you sure you want to Logout.?</span>
        </ModalWindow>
      </>
    );
  }
}
export default withRouter(UserProfileDropdown);