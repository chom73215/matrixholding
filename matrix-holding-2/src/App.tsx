import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/MatrixBackground';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ecosystem } from './pages/Ecosystem';
import { News } from './pages/News';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen bg-[#050505] text-[#F0F6FC] selection:bg-[#00F0FF]/30 selection:text-white flex flex-col font-sans overflow-x-hidden">
          {/* Animated Digital Matrix Background */}
          <MatrixBackground density="normal" interactive={true} />

          {/* Global Scroll Fix */}
          <ScrollToTop />

          {/* Global Futuristic Navbar */}
          <Navbar />

          {/* Main Content Pages */}
          <main className="flex-grow z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/news" element={<News />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Futuristic Footer */}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
