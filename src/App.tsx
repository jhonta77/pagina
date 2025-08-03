import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AutomatizacionPage from './pages/AutomatizacionPage';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Services />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container relative z-0">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/automatizacion" element={<AutomatizacionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;