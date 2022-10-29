import React, { Component } from 'react';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default App;
