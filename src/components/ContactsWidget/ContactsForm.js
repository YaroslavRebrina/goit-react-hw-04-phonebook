import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactsForm.module.css';


export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { handlerSubmit } = this.props;
    handlerSubmit(name, number, nanoid());
    e.target.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameId = nanoid();
  numberId = nanoid();

  render() {
    const { name, number } = this.props;
    return (
      <>
        <form className={css.form} onSubmit={this.onSubmit}>
          <label htmlFor={this.nameId}>
            <input
              className={css.input}
              onChange={this.handlerInput}
              placeholder="name"
              type="text"
              name="name"
              value={name}
              id={this.nameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan"
              required
            />
          </label>

          <label htmlFor={this.numberId}>
            <input
              className={css.input}
              onChange={this.handlerInput}
              placeholder="tel"
              type="tel"
              name="number"
              value={number}
              id={this.numberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add phone number</button>
        </form>
      </>
    );
  }
}
