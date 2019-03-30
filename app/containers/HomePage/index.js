import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import {
  makeSelectSearchStatus
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';
import {openSearch} from './actions';

const mapDispatchToProps = (dispatch) => ({
  handlerOpenSearch:(evt) => { 
    evt.preventDefault(); 
    dispatch(openSearch());  
  }
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  searchStatus: makeSelectSearchStatus()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
