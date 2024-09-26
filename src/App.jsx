// App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import addContactForm from './addContactForm';
import Navbar from './NavBar'
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar /> 
      <addContactForm/>
    
  </React.StrictMode>
);

export default App; 