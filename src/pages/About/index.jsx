import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import about from "../../data/about";

const About = () => {
  return (
    <>
      <Banner alt="paysage montagneux"/>
      {about.map(({title, content}) => (
        <Collapse key={title} title={title} description={content} />
      ))
      }
    </>
  )
}

export default About;