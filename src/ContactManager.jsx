// ContactManager.js
import React, { useState } from "react";
import AddContactForm from "./addContactForm";
import ContactList from "./ContactList";

function ContactManager() {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]); // Adiciona o novo contato
    };

    return (
        <div>
            <h1>Gerenciamento de Contatos</h1>
            <AddContactForm onAdd={addContact} contacts={contacts} /> {/* Passa a variável contacts como prop */}
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactManager;