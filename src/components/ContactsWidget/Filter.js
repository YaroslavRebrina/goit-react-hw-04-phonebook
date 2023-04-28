import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handlerFilter }) => {
  const handlerInputFilter = e => {
    handlerFilter(e.target.value);
  };

  return (
    <label className={css.filter}>
      <input
        placeholder="filter"
        type="text"
        name="filter"
        onChange={handlerInputFilter}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
};
