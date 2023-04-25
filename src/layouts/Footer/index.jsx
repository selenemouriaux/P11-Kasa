import {Link} from "react-router-dom";
import logoMobile from '../../assets/images/kasaMobileReversed.png'
import './style.css'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="logo">
          <img src={logoMobile} alt="logo du site Kasa"/>
        </div>
        <Link className="rights" to="/">&copy; 2020 Kasa. All rights reserved</Link>
      </div>
    </>
  )
}

export default Footer;