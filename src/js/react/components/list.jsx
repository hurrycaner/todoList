import React from 'react';

import Item from './item';

const List = ({list, loading, toggleItem}) => (
  <ul className={loading ? 'todo todo--loading' : 'todo'}>
    {list.map(item => {
      return (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          toggleItem={toggleItem}
        />
      );
    })}
  </ul>
);

export default List;
