import React from 'react';
import PropTypes from 'prop-types';

import './ListStyles.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            sort: props.sort,
            status: props.status,
            type: props.type,
        };
    }
    onChangeFunction = ( event ) => {
        event.preventDefault();
    }
    render() {
        const {post} = this.state;
        return (
            <div>
                <div>
                    <label htmlFor={"sort"}>Sort</label>
                    <select onChange={this.onChangeFunction} name="sort">
                        <option value="title">Title</option>
                        <option value="status">Status</option>
                        <option value="type">Type</option>
                    </select>
                    <label htmlFor={"status"}>Status</label>
                    <select onChange={this.onChangeFunction} name="status">
                        <option value="select">Select Status</option>
                        <option value="todo">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                    </select>
                    <label htmlFor={"type"}>Type</label>
                    <select onChange={this.onChangeFunction} name="type">
                        <option value="task">Task</option>
                        <option value="feature">Feature</option>
                        <option value="bug">Bug</option>
                    </select>
                </div>
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
                            <tr className={"listRow"} key={key}>
                                <td className={"listCol"}> {data.title}</td>
                                <td className={"listCol"}> {data.column}</td>
                                <td className={"listCol"}> {data.type}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>


        );
    }
}

List.propTypes = {
    post: PropTypes.array,
    sort: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
};

List.defaultProps = {
    sort: "title",
    status: "select",
    type: "select",
    post: null,
};

export default List;
