import "./Header.css";
import logo from "/assets/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="BOTICA NATURAL" />
      </Link>
      <nav>
        <Link to="/plantas">
          <button>Plantas</button>
        </Link>
        <Link to="/remedios">
          <button>Remedios</button>
        </Link>
      </nav>
    </header>
  );
};
