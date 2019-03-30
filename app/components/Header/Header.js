import React from 'react';
import './style.scss';
import Batman from './images/batman-old.png';

import PropTypes from 'prop-types';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {

    const { handlerOpenSearch, searchStatus } = this.props;

    let formClassName = searchStatus !== 'opened' ? 'header__search-form' : 'header__search-form header__search-form--opened';
    let buttonType = searchStatus !== 'opened' ? 'submit' : 'reset';  


    return (
      <header className="header">
        <a className="header__logo" href="/">
          <img src={Batman} title="Batman is here" />
        </a>
        <form className={formClassName} method="get" action="" onSubmit={handlerOpenSearch}>
          <input type="text" placeholder="Search your movie here" />
          <button type={buttonType}  className="fas fa-search"></button>
        </form>
      </header>
    );
  }
}

Header.defaultProps = {
  handlerOpenSearch : () => {},
  searchStatus : ''
}

Header.propTypes = {
  handlerOpenSearch: PropTypes.func,
  searchStatus: PropTypes.string
}

export default Header;

