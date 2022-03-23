import React from 'react';
import PropTypes from 'prop-types';

import './CardStyles.css';
import Cards from "./Cards";

function Table(props) {
    const { post } = props;
    return (
        <table className={"table1"} >
            <thead>
            <tr className={"tr"}>
                <th className={"th lightgray"}>To Do</th>
                <th className={"th"}>In Progress</th>
                <th className={"th lightgray"}>Review</th>
                <th className={"th"}>Done</th>
            </tr>
            </thead>
            <tbody>
            <tr className={"tr"}>
                <td className={"td lightgray "}>
                    {post.map((data, key) => {
                        if(data.column == "todo")
                        return (
                            <div key={key}>
                                <Cards post={data}/>
                            </div>
                        );
                    })}
                </td>
                <td className={"td"}>
                    {post.map((data, key) => {
                        if(data.column == "in-progress")
                            return (
                                <div key={key}>
                                    <Cards post={data}/>
                                </div>
                            );
                    })}
                </td>
                <td className={"td lightgray "}>
                    {post.map((data, key) => {
                        if(data.column == "review")
                            return (
                                <div key={key}>
                                    <Cards post={data}/>
                                </div>
                            );
                    })}
                </td>
                <td className={"td"}>
                    {post.map((data, key) => {
                        if(data.column == "done")
                            return (
                                <div key={key}>
                                    <Cards post={data}/>
                                </div>
                            );
                    })}
                </td>
            </tr>
            </tbody>
        </table>

    );
}

Table.propTypes = {
    post: PropTypes.array,
};

Table.defaultProps = {
    post: null,
};

export default Table;
