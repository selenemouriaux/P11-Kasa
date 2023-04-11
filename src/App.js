import './assets/styles/App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Kasa from "./pages/Kasa";

const App = () => {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kasa/:id" element={<Kasa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
