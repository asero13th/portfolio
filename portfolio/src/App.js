import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div>
  <header className="bg-white shadow">
    <Navigation />
  </header>
  <section>
    <Home />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    
  </section>
</div>
  );
}

export default App;