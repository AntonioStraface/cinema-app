import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {

    const { handlerOpenSearch, searchStatus } = this.props;

    let formClassName = searchStatus !== 'opened' ? 'header__search-form' : 'header__search-form header__search-form--opened';

    return (
      <header className="header">
        <a href="/" className="header__logo">LOGO</a>
        <form className={formClassName} method="get" action="" onSubmit={handlerOpenSearch}>
          <input type="text" placeholder="Search your movie here" />
          <button type="submit">lmlwemrflwme</button>
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

