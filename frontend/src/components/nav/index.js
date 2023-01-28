import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

function Nav() {
  
    const navigate = useNavigate()
    
    // Allow user to log out, clears local storage, sets login status to false, and then navigate back home.  
  
      return (
        <nav>
          <div>
            <a className="navIcons" href="https://www.linkedin.com/in/miladtehrani/" target="_blank">
                <img
                src="https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png"
                alt="Linked in Logo"
                width="50"
                className="navImages"
                />
            </a>
            </div>
            <div>
            <a href="https://www.github.com/tehranimilad" className="navIcons" target="_blank">
            <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            width="50"
            className="navImages"
            />
            </a> 
            </div>
        </nav>
      );
    }
  
  export default Nav;