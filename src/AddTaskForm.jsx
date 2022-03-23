import React from 'react';
import PropTypes from 'prop-types';



class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            type: "task",


        };
    }

    onFormWork = ( event ) => {
        event.preventDefault();

        const { onFormSubmit } = this.props;
        const { type, title  } = this.state;
        onFormSubmit(type, title);

    }

    render() {
        const { title, type } = this.state;
        return (
            <div>
                <form onSubmit={this.onFormWork}>

                    <label htmlFor={"title"}>Title</label>
                    <input defaultValue={title} onChange={(e) => this.setState({ title: e.target.value })} type={"text"}/>


                    <label htmlFor={"type"}>Type</label>
                    <select defaultValue={type} onChange={(e) => this.setState({ type: e.target.value })} name="type">
                        <option value="task">Task</option>
                        <option value="feature">Feature</option>
                        <option value="bug">Bug</option>
                    </select>
                    <input type={"submit"}/>
                </form>
            </div>

        );
    }
}

AddTaskForm.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
};

AddTaskForm.defaultProps = {
    title: "",
    type: "feature",
    posts: null,
};

export default AddTaskForm;
