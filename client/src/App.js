import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPage from "./pages/NavbarPage/NavbarPage.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
import FooterPage from "./pages/FooterPage/FooterPage.jsx"

function App() {
  return <div>
   
      <Router>
        
        <NavbarPage />
        
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
        </Routes>
      </Router>
      <FooterPage/>
</div>

     
    
  
}

export default App;
