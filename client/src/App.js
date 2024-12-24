import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPage from "./pages/NavbarPage/NavbarPage.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
import FooterPage from "./pages/FooterPage/FooterPage.jsx"
import ContactUs from "./pages/ContactUsPage/ContactUsPage.jsx"
import AboutUs from "./pages/AboutUsPage/AboutUsPage.jsx"
import Video from "./pages/VideoPage/VideoPage.jsx"
function App() {
  return <div>
   
      <Router>
        <NavbarPage />
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/contactus" exact element={<ContactUs/>}/>
          <Route path="/about" exact element={<AboutUs/>}/>
          <Route path="/join-group/:groupId" exact element={<Video/>}/>
        </Routes>
        <FooterPage/>
      </Router>
      
</div>

     
    
  
}

export default App;
