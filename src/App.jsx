import './App.css';
import addContactForm from './addContactForm';
import Navbar from './NavBar'; // Import the Navbar component

function App() {
  return (
    <>
      <Navbar /> 
      {addContactForm(addContactForm)}
    </>
  )
}

export default App;