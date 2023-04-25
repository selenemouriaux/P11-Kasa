import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import './style.css'
import logements from '../../data/logements.json'


const Home = () => {
  return (
    <>
      <Header/>
      <Banner title="Chez vous, partout et ailleurs" alt="paysage, récifs montagneux de bord de mer"/>
      <div className="cardsBox">
        {logements.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} image={cover} />
          )
        )}
      </div>
      <Footer/>
    </>
  )
}

export default Home;