import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSearch = event => {
    this.setState({ filter: event.target.value }); // Обновление значения поля поиска
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    if (name.trim() !== '' && number.trim() !== '') {
      // Проверяем, есть ли уже контакт с таким именем
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      if (existingContact) {
        alert('Contact with this name already exists.');
        return;
      }

      const newUser = {
        name,
        number,
        id: uuidv4(),
      };
      this.createUser(newUser);
      this.setState({ name: '', number: '' }); // Сброс значений полей после добавления контакта
    } else {
      alert('Please enter a valid name and number.');
    }
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: uuidv4(),
    };
    console.log('newUser', newUser);

    // Обновляем состояние contacts, добавляя новый контакт
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div>
        <ContactForm
          handleNameChange={this.handleNameChange}
          handleSubmit={this.handleSubmit}
          handleNumberChange={this.handleNumberChange}
          handleSearch={this.handleSearch}
          filter={filter}
        />

        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
