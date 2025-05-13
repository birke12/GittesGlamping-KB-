import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import UserCard from "./userCard/UserCard";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, login, logout, isAuthenticated } = useAuth(); // ✅ Add login
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {location.pathname !== "/" && (
        <a href="/">
          <img src="/headerImages/logo.png" alt="logoet" />
        </a>
      )}

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul
        onClick={toggleMenu}
        className={isOpen ? "nav-links open" : "nav-links"}
      >
        <li>
          <NavLink to="/ophold">Opholde</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/aktiviter">Aktiviter</NavLink>
        </li>
        <li>
          <NavLink to="/minliste">Min liste</NavLink>
        </li>
        <li>
          <NavLink to="/backoffice">Backoffice</NavLink>
        </li>

        {/* ✅ Always show UserCard — it handles both states internally */}
        <li>
          <UserCard user={user} login={login} logout={logout} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
