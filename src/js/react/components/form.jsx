import React from 'react';

export default ({inputChange, inputKeyPress, text, saveTask}) => (
  <div className="form">
    <input
      type="text"
      className="form__input"
      onChange={inputChange}
      onKeyPress={inputKeyPress}
      value={text}
    />
    <button className="form__button" onClick={saveTask}>Add</button>
  </div>
)
