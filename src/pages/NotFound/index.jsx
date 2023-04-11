import {Link} from "react-router-dom";
import Header from "../../layouts/Header";
import style from './style.css'

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <h2 className="notFound">
          404
        </h2>
        <h3>
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <Link className="backToHome" to="/">Retourner à la page d'accueil</Link>
      </div>
    </>
  )
}

export default NotFound;