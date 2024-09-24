function ContactList({contacts, onDelete, onEdit}){
    return(
        <ul>
            {contacts.map((contact, index) => (
                <li key={index}>
                    {contact.name} - {contact.phone} - {contact.email}
                    <button onClick={() => onEdit(contact)}>Editar</button>
                    <button onClick={() => onDelete(contact)}>Excluir</button>
                </li>
            ))}
        </ul>
    )
}
export default ContactList