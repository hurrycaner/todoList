import React from 'react';

const Filter = ({filter, changeFilter}) => {
  const onChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <div className="filter">
      <input
        type="radio"
        value="all"
        id="filter_all"
        checked={filter === 'all'}
        onChange={onChange}
        className="filter__input"
      />
      <label htmlFor="filter_all" className="filter__label">All</label>
      <input
        type="radio"
        value="done"
        id="filter_done"
        checked={filter === 'done'}
        onChange={onChange}
        className="filter__input"
      />
      <label htmlFor="filter_done" className="filter__label">Done</label>
      <input
        type="radio"
        value="pending"
        id="filter_pending"
        checked={filter === 'pending'}
        onChange={onChange}
        className="filter__input"
      />
      <label htmlFor="filter_pending" className="filter__label">Pending</label>
    </div>
  );
};

export default Filter;
