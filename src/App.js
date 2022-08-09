import { Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import LandingPage from "./components/LandingPage/LandingPage";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import BlogPage from "./components/BlogPage/BlogPage";
import EventsPage from "./components/EventsPage/EventsPage";

function App() {
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/aboutme" element={<AboutMePage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/events" element={<EventsPage />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
