import React, { Component } from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
import { Filter } from './ContactsWidget/Filter';
import { ContactItem } from './ContactsWidget/ContactItem';
import { CONTACTS_KEY } from './constants';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const fetchedContacts =
      JSON.parse(localStorage.getItem(CONTACTS_KEY)) || [];
    this.setState({ contacts: fetchedContacts });
  }

  handlerSubmit = async (name, number, id) => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alrady in contacts.`);
      return;
    }

    const contact = {
      id,
      name,
      number,
    };

    this.setState(
      prevState => ({
        contacts: [contact, ...prevState.contacts],
      }),
      () =>
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts))
    );
  };

  onFilterChange = value => {
    this.setState({ filter: value });
  };

  handleDelete = e => {
    const { contacts } = this.state;
    const contactsAfterDelete = contacts.filter(
      contact => contact.id !== e.target.id
    );
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contactsAfterDelete));
    this.setState({ contacts: contactsAfterDelete });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.global__wrapper}>
        <ContactsForm handlerSubmit={this.handlerSubmit} />
        <Filter handlerFilter={this.onFilterChange} />
        <ul className={css.itemList}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              filter={this.state.filter}
              handlerDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}
