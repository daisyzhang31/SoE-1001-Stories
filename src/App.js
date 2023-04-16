import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Mission from "./pages/Mission/Mission";
import Stories from "./pages/Stories/Stories";
import StoryDetail from "./pages/storyDetail/StoryDetail";
import Volunteer from "./pages/Volunteer/Volunteer";
import Contact from "./pages/contact/Contact";
import Outreach from "./pages/Outreach/Outreach";
import Team from "./pages/Team/Team";
import StoryTeller from "./pages/Storyteller/StoryTeller";


function App() {


   http: return (
     <>
       <BrowserRouter>
         <Header />
         <Routes>
           <Route path="/SoE-1001-Stories" element={<Home />} />
           <Route path="/mission" element={<Mission />} />
           <Route path="/stories" element={<Stories />} />
           <Route path="/stories/:id" element={<StoryDetail />} />
           <Route path="/volunteer" element={<Volunteer />} />
           <Route path="/storyteller" element={<StoryTeller />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/outreach" element={<Outreach />} />
           <Route path="/team" element={<Team />} />
         </Routes>
         <Footer />
       </BrowserRouter>
     </>
   );
}

export default App;
