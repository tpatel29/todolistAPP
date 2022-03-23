import React from 'react';
import PropTypes from 'prop-types';

import './ListStyles.css';

function List(props) {
    const { post } = props;
    return (
        <table className={"listTable"}>
            <thead>
            <tr>
                <th className={"listHeader"}>Title</th>
                <th className={"listHeader"}>Status</th>
                <th className={"listHeader"}>Type</th>
            </tr>
            </thead>
            <tbody>
            {post.map((data, key) => {
                    return (
                        <tr className={"listRow"}  key={key}>
                            <td className={"listCol"}> {data.title}</td>
                            <td className={"listCol"}> {data.column}</td>
                            <td className={"listCol"}> {data.type}</td>
                        </tr>
                    );
            })}
            </tbody>
        </table>


    );
}

List.propTypes = {
    post: PropTypes.array,
};

List.defaultProps = {
    post: null,
};

export default List;
