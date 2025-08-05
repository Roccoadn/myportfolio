import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Techs from './components/Techs/Techs';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Techs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
};

export default App;
