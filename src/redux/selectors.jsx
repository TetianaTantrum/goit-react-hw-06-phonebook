export const getVisibleContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
