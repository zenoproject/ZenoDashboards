import Component from './Sidebar';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

function mapStateToProps(state){
  return {};
};
function mapDispatchToProps(dispatch){
  return{};
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Component));