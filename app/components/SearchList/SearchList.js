import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class SearchList extends React.Component { // eslint-disable-line react/prefer-stateless-function

    render() {

        const { listItems } = this.props;

        console.log(listItems)

        return (
            <section className="search-list">
                {listItems.map((item, index) =>
                    <article className="search-list__item" key={item.imdbID}>
                        <img src={item.Poster} />
                        <div className="search-list__item__info">
                            <h3>{item.Title}</h3>
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

