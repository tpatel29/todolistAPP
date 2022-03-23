import React from 'react';
import PropTypes from 'prop-types';


class Views extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: props.view,

        };
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><button value={"grid"} onClick={this.onFormWork}>Grid View</button></li>
                    <li><button value={"list"} onClick={this.onFormWork}>List View</button></li>
                    <li><button value={"addTask"} onClick={this.onFormWork}>Add Task</button></li>
                </ul>
            </nav>
        );
    }

     onFormWork = ( event ) => {
        event.preventDefault();
        const { onChangeView } = this.props;
         onChangeView(event.target.value);
    }
}

Views.propTypes = {
    view: PropTypes.string,
    onChangeView: PropTypes.func.isRequired,

};

Views.defaultProps = {
    view: 'list',
};

export default Views;
