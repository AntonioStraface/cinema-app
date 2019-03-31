import React from 'react';
import './style.scss';
import Batman from './images/batman-old.png';

import PropTypes from 'prop-types';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {

    const { handlerOpenSearch, searchStatus, handlerResultList,handlerCloseSearch } = this.props;

    let formClassName = searchStatus !== 'opened' ? 'header__search-form' : 'header__search-form header__search-form--opened';
    console.count()

    return (
      <header className="header">
        <a className="header__logo" href="/">
          <img src={Batman} title="Batman is here" />
        </a>
        <h1 className="header__title">CINEMA APP</h1>
        <form 
          className={formClassName} 
          method="get" 
          action="" 
          onSubmit={handlerOpenSearch} 
          onReset={handlerCloseSearch}>
          <input type="text" autoFocus={true} onKeyUp={handlerResultList} placeholder="Search your movie here" />
          <button type="submit" className="fas fa-search"></button>
          <button type="reset"  className="fas fa-times"></button>
        </form>
      </header>
    );
  }
}

Header.defaultProps = {
  handlerOpenSearch : () => {},
  hanlerCloseSearch: () => {},
  handlerResultList: () => {},
  searchStatus : ''
}

Header.propTypes = {
  handlerOpenSearch: PropTypes.func,
  handlerResultList: PropTypes.func,
  handlerCloseSearch: PropTypes.func,
  searchStatus: PropTypes.string
}

export default Header;

