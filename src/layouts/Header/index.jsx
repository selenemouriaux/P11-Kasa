import {Link, useLocation} from "react-router-dom";
import logoMobile from '../../assets/images/kasaMobile.png'
import logoDesktop from '../../assets/images/kasaDesktop.png'
import './style.css'
import about from "../../assets/images/about-backgroud.jpg";
import home from "../../assets/images/home-background.jpg";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="Header">
      <div className="logo">
        <img className="logoDesktop" src={logoDesktop} alt="logo du site Kasa"/>
        <img className="logoMobile" src={logoMobile} alt="logo du site Kasa"/>
      </div>
      <nav className="navMenu">
        <Link className={/^\/$/.test(pathname) ? "navItem active" : "navItem"} to="/">Accueil</Link>
        <Link className={/^\/about/.test(pathname) ? "navItem active" : "navItem"} to="/about">À Propos</Link>
      </nav>
    </div>
  )
}

export default Header;