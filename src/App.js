import './assets/styles/App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Kasa from "./pages/Kasa";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="Wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/kasa/:id" element={<Kasa/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
