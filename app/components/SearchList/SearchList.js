import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import Placeholder from './images/placeholder.png';

class SearchList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {

        const { listItems } = this.props;

        return (
            <section className="search-list">
                {listItems.map((item) =>
                    <article className="search-list__item" key={item.imdbID}>
                        <a>
                            <img src={item.Poster !== "N/A" ? item.Poster : Placeholder} />
                        </a>
                        <div className="search-list__item-info">
                            <h3>{item.Title}</h3>
                            <span>{item.Year}</span>
                        </div>
                    </article>)}
            </section>
        );
    }
}

SearchList.defaultProps = {

}

SearchList.propTypes = {
    listItems: PropTypes.array
}

export default SearchList;

