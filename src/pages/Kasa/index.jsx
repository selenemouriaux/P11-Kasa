import { useParams } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const HouseFocus = () => {
  const { id } = useParams()
  return (
    <>
      <Header/>
      <h2>
        PAGE : FOCUS ON HOUSE #{ id }
      </h2>
      <Footer/>
    </>
  )
}

export default HouseFocus;