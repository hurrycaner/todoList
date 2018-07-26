import React from 'react';

export default ({id, text, done, toggleItem}) => {
  const onChange = () => {
    toggleItem(id);
  };
  return (
    <li className={done ? 'todo__item todo__item--done' : 'todo__item'}>
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={onChange}
      />
      {text}
    </li>
  );
};
