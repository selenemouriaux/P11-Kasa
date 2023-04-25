import './style.css'
import {Link} from "react-router-dom";

const Card = (props) => {
  const { id, image, title } = props;
  return (
    <Link className="card" to={`/kasa/${id}`}>
      { image &&
        <img className="cardImg" src={image} alt={`photo du logement : ${title}`}/>
      }
      <span className="cardTitle">{title}</span>
    </Link>
  )
}

export default Card;