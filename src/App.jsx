import { useState } from 'react';
import AddContactForm from './addContactForm';
import ContactList from './ContactList';
import Navbar from './NavBar';
import  './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('Add'); // Estado para a aba ativa

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      {activeTab === 'Add' && <AddContactForm setContacts={setContacts} />}
      {activeTab === 'View' && <ContactList contacts={contacts} />}
    </div>
  );
}

export default App;
