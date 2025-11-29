import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import SiteNotice from './components/SiteNotice';

type Page = 'home' | 'privacy' | 'site-notice';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Check initial hash
    const checkHash = () => {
      if (window.location.hash === '#/privacy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#/site-notice') {
        setCurrentPage('site-notice');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={goHome} />;
  }

  if (currentPage === 'site-notice') {
    return <SiteNotice onBack={goHome} />;
  }

  return (
    <div className="min-h-screen bg-off-white font-sans selection:bg-sand selection:text-deep-teal">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;