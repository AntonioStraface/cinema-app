/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import Header from 'components/Header';
import SearchList from 'components/SearchList';
import Loader from 'components/LoadingIndicator';

import './style.scss';

export default class HomePage extends React.PureComponent {
  render() {
    const {handlerOpenSearch, handlerResultList, handlerCloseSearch, searchStatus, listItems, loading} = this.props;

    const listItemsProp = !listItems ? [] : listItems;

    return (
      <React.Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Cinema app application homepage" />
        </Helmet>
        <Header
          handlerResultList={handlerResultList}
          handlerOpenSearch={handlerOpenSearch}
          handlerCloseSearch={handlerCloseSearch}
          searchStatus={searchStatus}
        />
        <div className="home-page">{loading ? <Loader /> : <SearchList listItems={listItemsProp} />}</div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  handlerOpenSearch: PropTypes.func,
  handlerResultList: PropTypes.func,
  handlerCloseSearch: PropTypes.func,
  searchStatus: PropTypes.string,
  listItems: PropTypes.array,
  loading: PropTypes.bool
};
