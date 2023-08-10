import React from 'react';
import './App.css';
import Header from './Componens/header/Header';
import Home from './Componens/home/Home';
import About from './Componens/about/About';
import Skills from './Componens/skills/Skills';
// import Services from './Componens/services/Services';
import Qualifiqation from './Componens/qualifiqation/Qualification';
import Work from './Componens/work/Work';
import Contact from './Componens/contact/Contact';
import Footer from './Componens/footer/Footer';
import ScrollUp from './Componens/scrollup/ScrollUp';


const App = () => {
  return (
   <>
   <Header />
   <main className="main">
   <Home />
   <About />
   <Skills />
   {/* <Services /> */}
   <Qualifiqation />
   <Work />
   <Contact />
   <Footer />
   <ScrollUp />
   </main>
   </>
  );
}

export default App;
