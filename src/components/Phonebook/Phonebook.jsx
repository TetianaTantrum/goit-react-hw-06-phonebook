// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Section } from './Phonebook.styled';

export default function Phonebook() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const addContact = newContact => {
  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(`You have already got ${newContact.name}.`);
  //     return;
  //   }
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   console.log(contacts);
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = contactId => {
  //   const contacts2 = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(contacts2);
  // };
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  //   return;
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const getContactCount = visibleContacts => {
  //   return visibleContacts.length;
  // };
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
      // value={filter} count={getContactCount} onChange={changeFilter}
      />
      <ContactList />
      {/* visibleContacts={getVisibleContacts}
        onDelete={deleteContact} */}
    </Section>
  );
}
