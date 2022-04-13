import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
