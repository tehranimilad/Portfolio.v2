import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

function Nav() {
  
    const navigate = useNavigate()
    
    // Allow user to log out, clears local storage, sets login status to false, and then navigate back home.  
  
      return (
        <Navbar>
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
            <div>
            <a className="navIcons" href="https://docs.google.com/document/d/1MzWaSuGeCjDPhTjd3XrxExC7DQkJxuk7/edit?usp=sharing&ouid=117772898957068889268&rtpof=true&sd=true" target="_blank">
                <img
                src="https://images.squarespace-cdn.com/content/v1/55e9ce26e4b0f0e15f28cc03/1555539083647-ZCYEGI5QXJTJPT4U5524/Resume-logo.png"
                alt="Resume Logo"
                width="90"
                className="navImages"
                />
            </a>
            </div>
        </Navbar>
      );
    }
  
  export default Nav;