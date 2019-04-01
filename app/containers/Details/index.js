import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {makeDetailsOfFilm} from './selectors';

import reducer from './reducer';
import saga from './saga';
import Details from './details';
import {loadDetailMovie} from './actions';

const mapDispatchToProps = (dispatch) => ({
  getFilmDetails: (id) => {
    dispatch(loadDetailMovie(id));
  }
});

const mapStateToProps = createStructuredSelector({
  detailOfFilm: makeDetailsOfFilm()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({key: 'details', reducer});
const withSaga = injectSaga({key: 'details', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Details);
export {mapDispatchToProps};