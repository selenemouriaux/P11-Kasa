import './style.css'
import PropTypes from "prop-types";
import Host from "../Host";

const Tags = ({tags}) => {
  return (
    <div className="tagsList">
      {tags.map((tag) => (
        <span key={tag} className="tag">{tag}</span>
      ))
      }
    </div>
  )
}

Host.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}
Host.defaultProps = {
  tags: []
}

export default Tags;