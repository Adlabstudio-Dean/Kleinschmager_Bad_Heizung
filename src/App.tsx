import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
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
  ChevronRight,
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash, location.key]);

  return null;
}

export default function App({ config }: { config: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Show floating CTA after scrolling 400px (past hero section)
      setShowFloatingCTA(window.scrollY > 400);

      // Check if near bottom to avoid covering legal links
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.scrollY + window.innerHeight;
      const threshold = 120; // Distance from bottom to start moving up
      
      if (scrollHeight - scrollPos < threshold) {
        setBottomOffset(threshold - (scrollHeight - scrollPos));
      } else {
        setBottomOffset(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-slate-900 text-slate-300 text-sm z-50 relative">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-primary-400" />
            <a href={"tel:" + config.phone.replace(/\s/g, "")} className="hover:text-white transition-colors cursor-pointer">{config.phone}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-primary-400" />
            <a href={"mailto:" + config.email} className="hover:text-white transition-colors cursor-pointer">{config.email}</a>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-slate-300 font-semibold">
          <span>Ihr Fachbetrieb für Sanitär und Heizung</span>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 cursor-pointer group">
              {config.logoUrl ? (
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={config.logoUrl} 
                  alt={config.name} 
                  className="h-10 w-auto object-contain" 
                />
              ) : (
                <>
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-2 rounded-lg"
                  >
                    <Droplets size={24} />
                  </motion.div>
                  <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">
                    {config.shortName}<span className="text-primary-600 group-hover:text-primary-500">Sanitär</span>
                  </span>
                </>
              )}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors cursor-pointer relative group px-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => scrollToSection('kontakt')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                Kostenlose Beratung
              </motion.button>
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
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-2 pb-8 space-y-1">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-4 text-lg font-semibold text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => scrollToSection('kontakt')}
                  className="block w-full text-center mt-6 bg-primary-600 hover:bg-primary-700 text-white px-4 py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  Kostenlose Beratung
                </motion.button>
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
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mb-6 inline-block bg-white p-3 rounded-2xl shadow-xl"
                >
                  <img src={config.logoUrl} alt={config.name} className="h-12 w-auto object-contain" />
                </motion.div>
              ) : (
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 mb-6 cursor-default"
                >
                  <Droplets size={28} className="text-primary-500" />
                  <span className="text-3xl font-bold tracking-tight text-white">
                    {config.shortName}<span className="text-primary-500">Sanitär</span>
                  </span>
                </motion.div>
              )}
              <p className="max-w-sm mb-6 text-slate-400 text-lg leading-relaxed">
                Professionelle Sanitär- und Heizungslösungen für den Raum Stuttgart. Ihr Partner für Qualität und Zuverlässigkeit im Handwerk.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook, label: 'Facebook' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="#" 
                    aria-label={social.label} 
                    className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 transition-all shadow-lg cursor-pointer"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <BadgeCheck size={18} />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">Zertifizierter Meisterbetrieb (HWK Stuttgart)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary-500/10 flex items-center justify-center text-secondary-400">
                    <Award size={18} />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">5 Jahre Handwerksgarantie</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Schnelllinks</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Startseite', id: 'startseite' },
                  { label: 'Leistungen', id: 'leistungen' },
                  { label: 'Über Uns', id: 'ueber-uns' },
                  { label: 'Bewertungen', id: 'bewertungen' },
                  { label: 'Kontakt', id: 'kontakt' },
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)} 
                      className="hover:text-primary-400 transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Leistungen</h4>
              <ul className="space-y-4">
                {[
                  'Badsanierung & Wellness',
                  'Energieeffiziente Heizsysteme',
                  'Solar & Photovoltaik',
                  'Gas- & Wasserinstallation',
                  'Reparatur & Kundendienst',
                  'Wartung & Sicherheitschecks'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {service}
                  </li>
                ))}
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
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              bottom: `calc(${bottomOffset}px + 1.5rem)` 
            }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed left-4 right-4 md:left-auto md:right-8 z-50 flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={"tel:" + config.phone.replace(/\s/g, "")}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl transition-all group cursor-pointer overflow-hidden border border-white/20"
              aria-label="Jetzt anrufen"
            >
              <Phone size={22} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 text-lg">Jetzt unterstützen</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
