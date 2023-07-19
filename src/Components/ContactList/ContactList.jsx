import React from 'react';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className="list-group ">
      {contacts.map(contact => (
        <li
          key={contact.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {contact.name}: {contact.number}
          <button
            type="button"
            className="btn btn-danger btn-sm ml-auto"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
