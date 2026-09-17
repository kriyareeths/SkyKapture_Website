import { BrowserRouter, Routes, Route } from "react-router-dom";
import font from "./NewFonts/Futura Now Headline.woff"
import HomePage from "./components/Home/HomePage";
import ProjectPage from "./pages/Project/ProjectPage";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import ApproachPage from "./pages/Project/ApproachPage";
import MrVinothResidence from "./pages/Project/ProjectDetail/MrVinothResidence";
import Skykaptureinteriors from "./pages/Project/ProjectDetail/Skykaptureinteriors";
import MrsanthosResidence from "./pages/Project/ProjectDetail/MrsanthosResidence";
import PriyaResidence from "./pages/Project/ProjectDetail/PriyaResidence";
import KrithikaResidence from "./pages/Project/ProjectDetail/KrithikaResidence";
import Paramanresidence from "./pages/Project/ProjectDetail/Paramanresidence";
import BharatPetroleum from "./pages/Project/ProjectDetail/BharatPetroleum";
import DhiyaJewellery from "./pages/Project/ProjectDetail/DhiyaJewellery";
import OurStudioHome from "./pages/OurStudio/OurStudioHome";
import ContactPage from "./pages/Contactus/ContactPage";
import ScrollToTop from "./pages/Project/ProjectDetail/ScrollToTop";
import "./App.css"
import BlogHome from "./pages/Insights/BlogHome";

function App() {
  return (
    <BrowserRouter>
<ScrollToTop />

     <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/Approach" element={<ApproachPage />} />
        <Route path="/projects/mr-vinoth-residence" element={<MrVinothResidence/>} />
        <Route path="/projects/sky-kapture-interiors-office" element={<Skykaptureinteriors />} />
        <Route path="/projects/mr-santhosh-residence" element={<MrsanthosResidence />} />
        <Route path="/projects/mrs-priya-residence" element={<PriyaResidence />} />
        <Route path="/projects/krithika-residence" element={<KrithikaResidence />} />
        <Route path="/projects/mr-paraman-residence" element={<Paramanresidence />} />
        <Route path="/projects/dhiya-bridal-rental-jewellery" element={<DhiyaJewellery />} />
        <Route path="/projects/bharat-petroleum-corporation-limited" element={<BharatPetroleum />} />
        <Route path = "/our-studio" element = {<OurStudioHome />} />
        <Route path="/insights" element = {<BlogHome/>}/>
        <Route path="/start-a-project" element = {<ContactPage/>}/>
      </Routes>
       <Footer />
       
    </BrowserRouter>
  );
}

export default App;