import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Droplets,
  Menu,
  X,
  Instagram,
  Facebook,
  Award,
  BadgeCheck,
} from 'lucide-react';

import Home from './pages/Home';
import Impressum from './pages/Impressum';
import AGB from './pages/AGB';
import Datenschutz from './pages/Datenschutz';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App({ config }: { config: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  };

  const NAV_ITEMS = [
    { label: 'Startseite', id: 'startseite' },
    { label: 'Leistungen', id: 'leistungen' },
    { label: 'Über Uns', id: 'ueber-uns' },
    { label: 'Bewertungen', id: 'bewertungen' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <ScrollToHash />
      
      {/* ── Top Bar ── */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-slate-900 text-slate-300 text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary-400" />
            <a href={"tel:" + config.phone.replace(/\s/g, "")} className="hover:text-white transition-colors">{config.phone}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-primary-400" />
            <a href={"mailto:" + config.email} className="hover:text-white transition-colors">{config.email}</a>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-slate-300 font-semibold">
          <span>Ihr Fachbetrieb für Sanitär und Heizung</span>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2 cursor-pointer">
              {config.logoUrl ? (
                <img src={config.logoUrl} alt={config.name} className="h-10 w-auto" />
              ) : (
                <>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-2 rounded-lg">
                    <Droplets size={24} />
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-slate-900">
                    {config.shortName}<span className="text-primary-600">Sanitär</span>
                  </span>
                </>
              )}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Kostenlose Beratung
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-primary-600 p-2"
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="block w-full text-center mt-4 bg-primary-600 text-white px-3 py-3 rounded-md font-medium"
                >
                  Kostenlose Beratung
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Main Content Routes ── */}
      <Routes>
        <Route path="/" element={<Home config={config} />} />
        <Route path="/impressum" element={<Impressum config={config} />} />
        <Route path="/agb" element={<AGB config={config} />} />
        <Route path="/datenschutz" element={<Datenschutz config={config} />} />
      </Routes>

      {/* ── 11. FOOTER ── */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              {config.logoUrl ? (
                <div className="mb-4 inline-block bg-white p-3 rounded-xl shadow-lg">
                  <img src={config.logoUrl} alt={config.name} className="h-12 w-auto object-contain" />
                </div>
              ) : (
                <div className="flex items-center space-x-2 mb-4">
                  <Droplets size={24} className="text-primary-500" />
                  <span className="text-2xl font-bold tracking-tight text-white">
                    {config.shortName}<span className="text-primary-500">Sanitär</span>
                  </span>
                </div>
              )}
              <p className="max-w-sm mb-4">
                Professionelle Sanitär- und Heizungslösungen für den Raum Stuttgart. Ihr Partner für Qualität und Zuverlässigkeit im Handwerk.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <BadgeCheck size={18} className="text-primary-400" />
                <span className="text-sm text-slate-400">Zertifizierter Meisterbetrieb (HWK Stuttgart)</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Award size={18} className="text-secondary-400" />
                <span className="text-sm text-slate-400">5 Jahre Handwerksgarantie</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Schnelllinks</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Startseite', id: 'startseite' },
                  { label: 'Leistungen', id: 'leistungen' },
                  { label: 'Über Uns', id: 'ueber-uns' },
                  { label: 'Bewertungen', id: 'bewertungen' },
                  { label: 'Kontakt', id: 'kontakt' },
                ].map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-primary-400 transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2">
                <li>Badsanierung & Wellness</li>
                <li>Energieeffiziente Heizsysteme</li>
                <li>Solar & Photovoltaik</li>
                <li>Gas- & Wasserinstallation</li>
                <li>Reparatur & Kundendienst</li>
                <li>Wartung & Sicherheitschecks</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} {config.name}. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4">
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CONTACT BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <a
          href={"tel:" + config.phone.replace(/\s/g, "")}
          className="relative flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-bold shadow-2xl transition-colors group"
          aria-label="Jetzt anrufen"
        >
          <Phone size={20} className="relative z-10" />
          <span className="relative z-10 text-sm">Jetzt anrufen</span>
        </a>
      </div>

    </div>
  );
}
