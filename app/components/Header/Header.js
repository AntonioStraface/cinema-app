import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import Batman from './images/batman-old.png';

class Header extends React.Component {
  render() {
    const {handlerOpenSearch, searchStatus, handlerResultList, handlerCloseSearch} = this.props;

    const formClassName =
      searchStatus !== 'opened' ? 'header__search-form' : 'header__search-form header__search-form--opened';

    return (
      <header className="header">
        <a className="header__logo" href="/">
          <img src={Batman} title="Batman is here" alt="batman" />
        </a>
        <h1 className="header__title">CINEMA APP</h1>
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
      </header>
    );
  }
}

Header.defaultProps = {
  handlerOpenSearch: () => {},
  searchStatus: '',
  handlerResultList: () => {},
  handlerCloseSearch: () => {}
};

Header.propTypes = {
  handlerOpenSearch: PropTypes.func,
  searchStatus: PropTypes.string,
  handlerResultList: PropTypes.func,
  handlerCloseSearch: PropTypes.func
};

export default Header;
