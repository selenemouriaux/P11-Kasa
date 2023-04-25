import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import home from '../../assets/images/home-background.jpg'
import about from '../../assets/images/about-backgroud.jpg'
import './style.css'

const Banner = (props) => {
  const { pathname } = useLocation();
  let image
  image = /^\/about/.test(pathname) ? about : home
  const { title, alt } = props;
  return (
    <div className={/^\/about/.test(pathname) ? "banner maxedOut" : "banner"}>
      <img className="bannerImg" src={image} alt={alt}/>
      { title && <h1 className="bannerTitle">{title}</h1> }
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string
}
Banner.defaultProps = {
  title: '',
  alt: 'image de fond de la bannière'
}

export default Banner;