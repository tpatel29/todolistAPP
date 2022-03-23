import React from 'react';
import PropTypes from 'prop-types';

import './CardStyles.css';

function Cards(props) {
    const { post } = props;

    return (
        <div className="card">
            <h2>
                {post.title}
            </h2>
            <p>ID: {post.id}</p>
            <p>Type: {post.type}</p>
        </div>
    );
}

Cards.propTypes = {
    post: PropTypes.object,
};

Cards.defaultProps = {
    post: null,
};

export default Cards;
