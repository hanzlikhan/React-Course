// src/components/TodoItem.js
import React from "react";

function TodoItem({Name,Date}) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{Name}</div>
        <div className="col-4">{Date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
