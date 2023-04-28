import React, { Component, useEffect, useState } from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
import { Filter } from './ContactsWidget/Filter';
import { ContactItem } from './ContactsWidget/ContactItem';
import { CONTACTS_KEY } from './constants';

import css from './App.module.css';
const storedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));

export const App = () => {
  const [contacts, setContacts] = useState(storedContacts || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmit = async (name, number, id) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alrady in contacts.`);
      return;
    }

    setContacts(prevState => [{ id, name, number }, ...prevState]);
  };

  const onFilterChange = value => {
    setFilter(value);
  };

  const handleDelete = e => {
    const contactsAfterDelete = contacts.filter(
      contact => contact.id !== e.target.id
    );

    setContacts(contactsAfterDelete);
  };

  return (
    <div className={css.global__wrapper}>
      <ContactsForm handlerSubmit={handlerSubmit} />
      <Filter handlerFilter={onFilterChange} />
      <ul className={css.itemList}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            filter={filter}
            handlerDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
