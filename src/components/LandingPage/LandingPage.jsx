import About from "./About/About";
import Header from "./Header/Header";
import Works from "./Works/Works";
import Event from "./Events/Event";
import Blog from "./Blog/Blog";

import "../../App.css";

export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Event />
      <Blog />
    </>
  );
}
