import React from 'react';

export default ({id, text, done, toggleItem}) => {
  const onChange = () => {
    toggleItem(id);
  };
  return (
    <li className={done ? 'list__item list__item--done' : 'list__item'}>
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={onChange}
        className={done ? 'item__input item__input--done' : 'item__input'}
      />
      <div className="item__text">{text}</div>

    </li>
  );
};
