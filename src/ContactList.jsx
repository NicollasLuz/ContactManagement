// src/components/ContactList.jsx
import React from 'react';
import './Contacts.css';

function ContactList({ contacts }) {
  return (
    <div id="View" className="tabcontent">
      <h1 className="TituloContatos">Contatos</h1>
      <ul className="contatosContainer">      
        {contacts.map((contact, index) => (
          <li key={index} className="contactItem">
            <p>Nome: {contact.name} ⦿ Telefone: {contact.phone} ⦿ E-mail: {contact.email} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
