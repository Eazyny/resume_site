import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Ozony Elsevif - IT Professional | IT Support</title>
        <meta name="description" content="Professional IT resume showcasing skills in software development, cloud computing, and system architecture. View my certifications, experience, and get in touch." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;