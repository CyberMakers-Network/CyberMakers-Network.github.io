import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contributors from '../components/Contributors';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const App = () => {
  const { themeName } = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Contributors />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
