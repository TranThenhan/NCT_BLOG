import About from './About/About';
import './App.css';
import Header from './Header/Header';
import TopBar from './TopBar/TopBar';
import Works from './Works/Works'
import Event from './Events/Event';
import Blog from './Blog/Blog';


function App() {
  return (
    <>
      <TopBar />
      <Header />
      <About />
      <Works />
      <Event />
      <Blog />
    </>
  );
}

export default App;
