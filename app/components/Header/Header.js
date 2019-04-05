import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Batman from './images/batman-old.png';

class Header extends React.Component {
  render() {
    const { handlerOpenSearch, searchStatus, handlerResultList, handlerCloseSearch, showForm } = this.props;

    const formClassName =
      searchStatus !== 'opened' ? 'header__search-form' : 'header__search-form header__search-form--opened';

    return (
      <header className="header">
        <Link className="header__logo" to="/">
          <img src={Batman} title="Batman is here" alt="batman" />
        </Link>
        <h1 className="header__title">CINEMA APP</h1>
        {showForm ? (
          <form
            className={formClassName}
            method="get"
            action=""
            onSubmit={handlerOpenSearch}
            onReset={handlerCloseSearch}
          >
            <input type="text" onKeyUp={handlerResultList} placeholder="Search your movie here" />
            <button type="submit" className="fas fa-search" />
            <button type="reset" className="fas fa-times" />
          </form>
        ) : (null)}
      </header>
    );
  }
}

Header.defaultProps = {
  showForm: true,
  handlerOpenSearch: () => { },
  searchStatus: '',
  handlerResultList: () => { },
  handlerCloseSearch: () => { }
};

Header.propTypes = {
  showForm: PropTypes.bool,
  handlerOpenSearch: PropTypes.func,
  searchStatus: PropTypes.string,
  handlerResultList: PropTypes.func,
  handlerCloseSearch: PropTypes.func
};

export default Header;
