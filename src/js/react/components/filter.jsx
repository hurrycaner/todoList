import React from 'react';

const Filter = ({filter, changeFilter}) => {
  const onChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={onChange}
        /> All</label>
      <label>
        <input
          type="radio"
          value="done"
          checked={filter === 'done'}
          onChange={onChange}
        /> Done</label>
      <label>
        <input
          type="radio"
          value="pending"
          checked={filter === 'pending'}
          onChange={onChange}
        /> Pending</label>
    </div>
  );
};

export default Filter;
