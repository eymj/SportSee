import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="SportSee" />
      <nav>
        <div>Accueil</div>
        <div>Profil</div>
        <div>Réglage</div>
        <div>Communauté</div>
      </nav>
    </header>
  );
}

export default Header;
