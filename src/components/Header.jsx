import {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Login from "./Login";
import LoggedIn from "./LoggedIn";


function Header({loggedIn,setLoggedIn, facade}) {
  const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

  return (
    <>
      <nav className="topnav">
        <div className="nav-menu">
          <div>
          {facade.hasUserAccess('user', loggedIn) &&
            <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/walker">Hundelufter</NavLink>
            <NavLink to="/owner">Ejer</NavLink>
            <NavLink to="/dog">Hund</NavLink>
            </div>
          }
          { facade.hasUserAccess('admin', loggedIn) &&
          <NavLink to="/admin">Admin</NavLink>
          }
          <div className="login-container">
          {!loggedIn ? (<Login setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} />
                </div>)}
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;