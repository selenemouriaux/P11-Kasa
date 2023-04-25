import {Link} from "react-router-dom";
import Header from "../../layouts/Header";
import './style.css'
import Footer from "../../layouts/Footer";

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <div>
        <h2 className="notFound">
          404
        </h2>
        <h3 className="legend">
          Oups! La page que vous demandez n'existe pas.
        </h3>
        </div>
        <Link className="backHome" to="/">Retourner à la page d'accueil</Link>
      </div>
      <Footer />
    </>
  )
}

export default NotFound;