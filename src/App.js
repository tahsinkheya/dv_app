import MainPage from "./pages/MainPage"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Firm from "./pages/Firm"
import TopBar from "./common/TopBar"
import SideBar from "./common/SideBar"
import Services from "./pages/Services"
import Acoustic from "./pages/AcousticDesign"

import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		
		<BrowserRouter>
		 {window.innerWidth > 700 ? <TopBar/>:<SideBar/>}
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/Firm" element={<Firm />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/Acoustic" element={<Acoustic />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
