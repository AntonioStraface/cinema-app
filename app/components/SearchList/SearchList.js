import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Placeholder from '../../images/placeholder.png';

class SearchList extends React.Component {
  render() {
    const {listItems} = this.props;

    return (
      <section className="search-list">
        {listItems.map((item) => (
          <article className="search-list__item" key={item.imdbID}>
            <Link to={`/details/${item.imdbID}`}>
              <img alt={item.Title} src={item.Poster !== 'N/A' ? item.Poster : Placeholder} />
            </Link>
            <div className="search-list__item-info">
              <h3>{item.Title}</h3>
              <span>{item.Year}</span>
            </div>
          </article>
        ))}
      </section>
    );
  }
}

SearchList.defaultProps = {};

SearchList.propTypes = {
  listItems: PropTypes.array
};

export default SearchList;
