import { Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";

import LandingPage from "./components/LandingPage/LandingPage";
import BlogPage from "./components/BlogPage/BlogPage";
import EventsPage from "./components/EventsPage/EventsPage";

function App() {
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/events" element={<EventsPage />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
