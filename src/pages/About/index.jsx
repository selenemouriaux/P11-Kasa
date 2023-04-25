import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import about from "../../data/about";

const About = () => {
  return (
    <>
      <Header/>
      <Banner alt="paysage montagneux"/>
      {about.map(({title, content}) => (
        <Collapse title={title}>
          {content}
        </Collapse>
      ))
      }
      <Footer/>
    </>
  )
}

export default About;