import React from "react";
import "./TodoItem.css";
const TodoItem = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>there is no items</p>
  );
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Title</span>
        <span className="age title">Description</span>
        <span className="action title">-</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItem;
