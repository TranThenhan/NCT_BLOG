import About from './About/About';
import './App.css';
import Header from './Header/Header';
import TopBar from './TopBar/TopBar';
import Works from './Works/Works'
import Event from './Events/Event';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <About />
      <Works />
      <Event />
    </>
  );
}

export default App;
