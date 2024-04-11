import "./Header.css";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

export const Header = ({ onResetSearch }) => {
  const handleReset = () => {
    onResetSearch();
  };
  return (
    <header>
      <Link to="/" onClick={handleReset}>
        <img src={logo} alt="BOTICA NATURAL" />
      </Link>
      <div className="titulo">
        BUSCA EL REMEDIO PARA TUS PEQUEÑAS DOLENCIAS CON PLANTAS
      </div>

      <nav>
        <Link to="/plantas" onClick={handleReset}>
          <button>Plantas</button>
        </Link>
        <Link to="/remedios" onClick={handleReset}>
          <button>Remedios</button>
        </Link>
      </nav>
    </header>
  );
};
