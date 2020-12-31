import { Component } from "react";
import TodoItem from "../src/component/TodoItem/TodoItem";
import AddItem from "../src/component/AddItem/AddItem";
class App extends Component {
  state = {
    items: [],
  };

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-Center">Todo List</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
