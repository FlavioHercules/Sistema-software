'use client';

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectsPage from '@/pages/ProjectsPage';
import QuotePage from '@/pages/QuotePage';
import ContactPage from '@/pages/ContactPage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function AppRoutes() {
  const location = useLocation();
  useScrollReveal(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-[60vh] pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/orcamento" element={<QuotePage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-tech-950 text-white">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}