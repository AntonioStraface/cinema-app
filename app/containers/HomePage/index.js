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
  makeSelectSearchStatus,
  makeListOfMovies
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';
import {openSearch, loadMovies} from './actions';

const mapDispatchToProps = (dispatch) => ({
  handlerOpenSearch:(evt) => { 
    evt.preventDefault(); 
    dispatch(openSearch());  
  },
  handlerResultList:(evt) => {
    if(evt.target.value.trim().length > 2) {
      dispatch(loadMovies(evt.target.value.trim()));
    } 
  },
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  searchStatus: makeSelectSearchStatus(),
  listItems: makeListOfMovies()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
