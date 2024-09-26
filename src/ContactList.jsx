import React from "react";

function ContactList({ contacts }) {
    return (
        <div className="tabcontent" id="View">
            <h2>Lista de Contatos</h2>
            {contacts.length === 0 ? (
                <p>Nenhum contato encontrado.</p>
            ) : (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            {contact.name} - {contact.phone} - {contact.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ContactList;
