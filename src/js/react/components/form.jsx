import React from 'react';

export default ({inputChange, inputKeyPress, text, saveTask}) => (
  <div className="todo__input">
    <input
      type="text"
      id="todoInput"
      onChange={inputChange}
      onKeyPress={inputKeyPress}
      value={text}
    />
    <button id="addTodo" onClick={saveTask}>Add</button>
  </div>
)
