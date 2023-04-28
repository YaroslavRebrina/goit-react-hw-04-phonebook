import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handlerInputFilter = e => {
    this.props.handlerFilter(e.target.value);
  };

  render() {
    return (
      <label className={css.filter}>
        <input
          placeholder="filter"
          type="text"
          name="filter"
          onChange={this.handlerInputFilter}
        ></input>
      </label>
    );
  }
}
