import React from 'react';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, filter, number, id, handlerDelete }) => {
  return name.toLowerCase().includes(filter.toLowerCase()) ? (
    <li key={id} className={css.item}>
      <p className={css.itemChild}>{name}</p>
      <p className={css.itemChild}>{number}</p>
      <button
        className={css.itemButton}
        id={id}
        type="button"
        onClick={handlerDelete}
      >
        Delete
      </button>
    </li>
  ) : null;
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};
