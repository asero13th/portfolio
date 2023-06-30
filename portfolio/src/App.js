import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div>
      <header className="bg-white shadow">
          <Navigation />
      </header>
      <section className=" bg-white">
        <Home />
        <About />
    
       
      
      </section>
    </div>
  );
}

export default App;