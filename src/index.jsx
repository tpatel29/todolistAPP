import React from 'react';
import ReactDOM from 'react-dom';

import PostAPI from './PostAPI';
import Views from "./Views";
import Table from "./Table"
import List from "./List"
import AddTaskForm from "./AddTaskForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "grid",
      posts: [],
      error: null,
    };
  }
  componentDidMount() {
    this.getNewPosts();
    console.log("ComponentDidMOUNT");
  }

  componentDidUpdate(prevProps, prevState) {
    const { view, posts } = this.state;

    console.log("ComponentDidUpdate", posts);
    if (prevState.view !== view) {
      this.render()
    }
  }

  async getNewPosts() {
    try {
      const response = await PostAPI.getPosts();
      this.setState({ posts: response });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  onFormChange = (view) => {
    this.setState({ view });
  };

  onFormSubmit = (type, title ) => {
    const { posts } = this.state;
    posts.push({
        "id": posts.length,
        "title": title,
        "type": type,
        "column": "todo"})
    this.setState({post: posts, view: "grid"} );
    console.log("This is the POST after making a submit: ", this.state.posts)
  };

  render() {
    const { posts, view, error } = this.state;
    //this.getNewPosts();

    console.log("This was rendered");
    if (view == "grid") {
      return (
        <div>
          <h1 className={"Titleheader"}>TO DO LIST APP</h1>
          <Views onChangeView={this.onFormChange} view={view}/>
          <h1>Task Dashboard</h1>
          <Table post={posts}></Table>


        </div>
      );
    }
    else if (view == "list") {
      return (
          <div>
            <h1 className={"Titleheader"}>TO DO LIST APP</h1>
            <Views onChangeView={this.onFormChange} view={view}/>
            <h1>Task List</h1>
            <List post={posts}></List>
          </div>
      );
    }
    else if (view == "addTask"){
      return (
          <div>
            <h1 className={"Titleheader"}>TO DO LIST APP</h1>
            <Views onChangeView={this.onFormChange} view={view}/>
            <h1>Add Task Form</h1>
            <AddTaskForm onFormSubmit={this.onFormSubmit} posts={posts} />

          </div>
      );
    }
    if (error) {
      return (
        <h2>ERROR: {error}</h2>
      )
    }

    return <h2>Loading...</h2>

  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
