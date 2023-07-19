import React from 'react';

export default function ContactForm({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  handleSearch,
  filter,
}) {
  return (
    <form onSubmit={handleSubmit} className="p-3 bg-light">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameChange}
        />
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          name="number"
          className="form-control"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumberChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Add Contact
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={filter}
        onChange={handleSearch}
      />
    </form>
  );
}
