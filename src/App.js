import React from 'react';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToAnchor from './ScrollToAnchor';

const App = () => {
  return (
    <div className="grid">
      <ScrollToAnchor />
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
