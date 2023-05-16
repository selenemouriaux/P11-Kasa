import './style.css'
import PropTypes from "prop-types";

const Title = ({ title, location }) => {
  return (
    <div className="titleBlock">
      <h2 className="houseTitle">{title}</h2>
      <span className="location">{location}</span>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string
}
Title.defaultProps = {
  title: 'nom de la maison',
  location: 'localisation'
}

export default Title;