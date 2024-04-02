import "./Header.css";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="BOTICA NATURAL" />
      </Link>
      <div className="titulo">
        BUSCA EL REMEDIO PARA TUS PEQUEÑAS DOLENCIAS CON PLANTAS
      </div>

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
