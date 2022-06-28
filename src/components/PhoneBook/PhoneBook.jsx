import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneBookForm } from '../PhoneBookForm/PhoneBookForm';
import { ContactList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitForm = (values, { resetForm }) => {
    const isInclude = this.state.contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      alert(` ${values.name} is already in contacts.`);
      return;
    }

    const profile = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    this.setState(prevState => {
      return {
        contacts: [profile, ...prevState.contacts],
      };
    });

    resetForm();
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  delateContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(person => person.id !== id),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookForm submitForm={this.submitForm} />
        <Filter onFilter={this.onFilter} filter={this.state.filter} />
        <ContactList
          contactsInfo={filtredContacts}
          delateContact={this.delateContact}
        />
      </div>
    );
  }
}
