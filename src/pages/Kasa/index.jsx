import {useParams} from "react-router-dom";
import logements from "../../data/logements.json";
import * as kasa from "../../features/KasaDetails";
import Collapse from "../../components/Collapse";
import NotFound from "../NotFound";
import './style.css'

const HouseFocus = () => {
  const {id} = useParams()
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) return (<NotFound/>);
  return (
    <div className="kasa">
      <div className="kasaCarousel">
        <kasa.Carousel pictures={logement.pictures} alt={logement.title}/>
      </div>
        <div className="kasaTitle">
          <kasa.Title title={logement.title} location={logement.location}/>
          <kasa.Tags tags={logement.tags}/>
        </div>
        <div className="kasaHost">
          <kasa.Host host={logement.host}/>
          <kasa.Rating rating={Number(logement.rating)}/>
        </div>
      <div className="kasaInfo">
        <Collapse title="Description" description={logement.description}/>
        <Collapse title="Équipements" description={logement.equipments}/>
      </div>
    </div>
  )
}

export default HouseFocus;