import './style.css'
import {useState, useRef} from "react";
import PropTypes from "prop-types";

const Collapse = ({title, description}) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef();

  return (
    <div className="collapse">
      <div className="title" onClick={() => setOpen(!isOpen)}>
        {title}
        <div className={ isOpen ? "animatedArrowClicked" : "animatedArrow" }>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
            <path fill='white'
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
          </svg>
        </div>
      </div>
      <div className="collapseAnimation" ref={contentRef}
           style={isOpen ? {height: contentRef.current.scrollHeight + 'px'} : {height: '0px'}}>
        {Array.isArray(description) ? (
          <div className="desc">
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : <div className="desc">{description}</div>}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
}
Collapse.defaultProps = {
  title: 'no title',
  description: ''
}

export default Collapse;