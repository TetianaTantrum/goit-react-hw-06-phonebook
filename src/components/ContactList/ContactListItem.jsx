import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Item>
        {contact.name}: {contact.number}
      </Item>
      <Button type="submit" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
