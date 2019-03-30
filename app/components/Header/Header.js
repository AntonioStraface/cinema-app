import React from 'react';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  
  render() {

    const {handlerOnInput} = this.props; 

    return (
      <header className="header">
          <a href="/" className="header__logo">LOGO</a>
          <form className="header__search-form" method="get" action="">
            <input type="text" placeholder="Search your movie here" />
            <button type="submit">{handlerOnInput}</button>
          </form>
      </header>
    );
  }
}

export default Header;
