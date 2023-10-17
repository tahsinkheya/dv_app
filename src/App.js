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

function App() {
  return (
    <BrowserRouter>
      {window.innerWidth > 700 ? <TopBar /> : <SideBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Firm" element={<Firm />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Acoustic" element={<Acoustic />} />
        <Route path="/AcousticDesign" element={<AcousticMain />} />
        <Route path="/People" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
