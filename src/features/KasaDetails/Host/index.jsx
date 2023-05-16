import './style.css'
import PropTypes from "prop-types";

const Host = ({ host }) => {
  return (
    <div className="hostBox">
      <div className="forceLineBreak"></div>
      <div className="hostId">{host.name}</div>
      <img className="hostImg" src={host.picture} alt={`visage de l'hôte, ${host.name}`}/>
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string
    }
  ),
}
Host.defaultProps = {
  host: {
    name: 'tartanpion',
    picture: 'https://i.pravatar.cc/300'
  }
}

export default Host;