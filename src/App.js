import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from '../src/components/header/Header';
import Nav from '../src/components/nav/Nav';
import About from '../src/components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from '../src/components/portfolio/Portfolio';
import Contact from '../src/components/contact/Contact';

const App = () => {
  // const location = useLocation();
// TODO: make a 404 view and make header landed all not set params
  return (
    <>
      <BrowserRouter>
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Routes>
          {/* <Routes key={location.pathname} location={location} > */}
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  )
}

export default App;