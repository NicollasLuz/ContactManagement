import './Navbar.css';
import Tab from './Tab';

function Navbar() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Tab />
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        className="bi bi-search" 
        viewBox="0 0 16 16"
        >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </form>
  </div>
  );
};

export default Navbar;