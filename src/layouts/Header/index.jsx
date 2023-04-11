import {Link} from "react-router-dom";
import logoMobile from '../../assets/images/kasaMobile.png'
import logoDesktop from '../../assets/images/kasaDesktop.png'
import style from './style.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img className="logoDesktop" src={logoDesktop} alt="logo du site Kasa"/>
        <img className="logoMobile" src={logoMobile} alt="logo du site Kasa"/>
      </div>
      <nav>
        <Link className="navItem" to="/">Accueil</Link>
        <Link className="navItem" to="/about">À Propos</Link>
      </nav>
    </div>
  )
}

export default Header;