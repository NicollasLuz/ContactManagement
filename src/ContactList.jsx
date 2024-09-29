// src/components/ContactList.jsx
import React from 'react';

function ContactList({ contacts }) {
  return (
    <div id="View" className="tabcontent">
      <h1 className="TituloContatos">Contatos</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <p>Nome: {contact.name}</p>
            <p>Telefone: {contact.phone}</p>
            <p>E-mail: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;