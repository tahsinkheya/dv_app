import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Firm from "./pages/Firm";
import TopBar from "./common/TopBar";
import SideBar from "./common/SideBar";
import Services from "./pages/Services";
import Acoustic from "./pages/AcousticDesign";
import "firebase/compat/firestore";
import { BrowserRouter } from "react-router-dom";
import People from "./pages/People";
import AcousticMain from "./components/accoustics/AcousticMain";
import ArchitectureMain from "./components/architecture/ArchitectureMain";
import Architecture from "./pages/Architecture";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Interior from "./pages/Interior";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      {window.innerWidth > 700 ? <TopBar /> : <SideBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Firm" element={<Firm />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Acoustic" element={<Acoustic />} />
        <Route path="/Architecture" element={<Architecture />} />
        <Route path="/ArchitectureDesign" element={<ArchitectureMain />} />
        <Route path="/AcousticDesign" element={<AcousticMain />} />
        <Route path="/People" element={<People />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Interior" element={<Interior />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
