import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Firm from "./pages/Firm";
import TopBar from "./common/TopBar";
import SideBar from "./common/SideBar";
import Services from "./pages/Services";
import Acoustic from "./pages/AcousticDesign";

import firebase from "firebase/compat/app";
// import "firebase/auth";
import "firebase/compat/firestore";
import { BrowserRouter } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyCTtAWH0wVgARbppkKR1JcGMYNbAvyGX8Y",
  authDomain: "dv-app-a159c.firebaseapp.com",
  projectId: "dv-app-a159c",
  storageBucket: "dv-app-a159c.appspot.com",
  messagingSenderId: "103054831326",
  appId: "1:103054831326:web:5658460d44a7f6e3805c4f",
  measurementId: "G-48KCJB3HGW",
});

const firestore = firebase.firestore();
function App() {
  return (
    <BrowserRouter>
      {window.innerWidth > 700 ? <TopBar /> : <SideBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Firm" element={<Firm />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Acoustic" element={<Acoustic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
