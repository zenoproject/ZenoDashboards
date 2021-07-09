import { connect } from 'react-redux';
import MainFrame from './MainFrame';
const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFrame);
