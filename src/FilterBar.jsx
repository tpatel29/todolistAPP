import React from 'react';
import PropTypes from 'prop-types';


class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: props.sort,
            status: props.status,
            type: props.type,
        };
    }
    onChangeFunction = ( event ) => {
        event.preventDefault();
        const { onChangeView } = this.props;
        onChangeView(event.target.value);
    }

    render() {
        return (

        );
    }

}

FilterBar.propTypes = {
    sort: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    onChangeView: PropTypes.func.isRequired,

};

FilterBar.defaultProps = {
    sort: "title",
    status: "select",
    type: "select",
};

export default FilterBar;
