import './style.css'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  const { id, image, title } = props;
  return (
    <Link className="card" to={`/kasa/${id}`}>
      { image &&
        <img className="cardImg" src={image} alt={`Intérieur du logement : ${title}`}/>
      }
      <span className="cardTitle">{title}</span>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}
Card.defaultProps = {
  id: '',
  image: '',
  title: 'no title',
}

export default Card;