import React, { Component } from "react";
import { notes } from "./notes";
import CardList from "./components/CardList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from "./components/navbar";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: notes,
      searchfield: "",
      // note: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // const { notes } = this.state;
    event.preventDefault();
    const { notes } = this.state,
      name = this.refs.name.value,
      category = this.refs.category.value,
      example = this.refs.example.value,
      description = this.refs.description.value;
    this.setState(
      {
        notes: [
          ...notes,
          {
            name,
            category,
            example,
            description,
          },
        ],
      },
      () => {
        this.refs.name.value = "";
        this.refs.category.value = "";
        this.refs.example.value = "";
        this.refs.description.value = "";
      }
    );
    console.log(notes);
  }

  onSearchChange = (event) => {
    console.log("log");
    this.setState({ searchfield: event.target.value });
  };

  removeNote = (event) => {
    var array = [...this.state.people];
    var index = array.indexOf(event.target.value);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ people: array });
    }
  };

  render() {
    const { notes, searchfield } = this.state;
    const filteredNotes = notes.filter((note) => {
      return note.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        <React.Fragment>
          <Router>
            <NavigationBar></NavigationBar>
          </Router>
        </React.Fragment>
        <div className="center mw7 mw-7-ns br3 hidden ba b--black-10 mv4">
          <h2 className="tc mt3">Add a note</h2>
          <form onSubmit={this.handleSubmit}>
            <label className="input-reset center pa2 db w-90">
              Name:
              <input
                className="input-reset ba b--black-20 pa2 db w-50"
                ref="name"
                type="text"
              />
            </label>
            <label className="input-reset center pa2 db w-90">
              Category:
              <select
                className="input-reset ba b--black-20 pa2 db w-50"
                ref="category"
                type="text"
                defaultValue="select category"
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="HTML">HTML</option>
                <option value="ES6">ES6</option>
                <option value="Javascript">Javascript</option>
                <option value="Advanced Javascript">Advanced Javascript</option>
                <option value="Javascript Concepts">Javascript Concepts</option>
                <option value="Debugging">Debugging</option>
                <option value="Terminal Commands">Terminal Commands</option>
                <option value="GIT">GIT</option>
                <option value="React">React</option>
                <option value="Redux">Redux</option>
              </select>
            </label>
            <label className="input-reset center pa2 db w-90">
              Example:
              <textarea
                className="input-reset ba b--black-20 pa2 db w-100"
                ref="example"
                type="text"
                rows="5"
              />
            </label>
            <label className="input-reset center pa2 db w-90">
              Description:
              <textarea
                className="input-reset ba b--black-20 pa2 db w-100"
                ref="description"
                type="text"
                rows="5"
              />
            </label>
            <input
              className="center pa2 db w-30 mb3"
              type="submit"
              value="Add"
            />
          </form>
        </div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList notes={filteredNotes} />
      </div>
    );
  }
}

export default App;
