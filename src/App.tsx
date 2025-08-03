import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/servicios/automatizacion';

  return (
    <div className="app-container relative z-0">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/automatizacion" element={<AutomatizacionPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;