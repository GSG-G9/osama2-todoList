import React, { Component } from "react";
import "./AddItem.css";
class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value == "") {
      return false;
    } else {
      this.props.addItem(this.state);
      e.currentTarget.reset();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter your name please"
            id="name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="enter your age"
            id="age"
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
