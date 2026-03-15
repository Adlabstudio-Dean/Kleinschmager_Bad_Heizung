import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Droplets, 
  Flame, 
  Clock, 
  ShieldCheck, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const SERVICES = [
  {
    title: 'Sanitärreparaturen',
    description: 'Von tropfenden Wasserhähnen bis hin zu Rohrbrüchen – unsere Experten beheben alle Sanitärprobleme schnell und effizient.',
    icon: Droplets,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Heizungssysteme',
    description: 'Halten Sie Ihr Zuhause warm mit unseren umfassenden Dienstleistungen für Heizungsreparatur, -wartung und -installation.',
    icon: Flame,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Kessel- & Thermenservice',
    description: 'Spezialisierte Installation, Wartung und Notfallreparaturen von Heizkesseln, um Ihren Komfort zu gewährleisten.',
    icon: Wrench,
    color: 'text-slate-700',
    bgColor: 'bg-slate-200'
  },
  {
    title: '24/7 Notdienst',
    description: 'Sanitär- und Heizungsnotfälle können nicht warten. Wir sind rund um die Uhr für Sie da.',
    icon: Clock,
    color: 'text-red-500',
    bgColor: 'bg-red-100'
  }
];

const FEATURES = [
  { title: 'Zertifizierter Meisterbetrieb', description: 'Vollständig zertifizierte Fachleute, denen Sie in Ihrem Zuhause vertrauen können.', icon: ShieldCheck },
  { title: 'Transparente Preise', description: 'Keine versteckten Gebühren. Sie kennen die Kosten, bevor wir mit der Arbeit beginnen.', icon: CheckCircle2 },
  { title: 'Schnelle Reaktionszeit', description: 'Wir kommen pünktlich und bestens ausgerüstet, um Ihre Probleme zu lösen.', icon: Clock },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Müller',
    text: 'AquaHeat Pros hat uns gerettet, als unsere Heizung mitten im Winter ausfiel. Schnell, professionell und zu fairen Preisen!',
    rating: 5
  },
  {
    name: 'Michael Weber',
    text: 'Exzellenter Service! Der Klempner war bei einem Rohrbruch innerhalb einer Stunde da und hat ihn perfekt repariert. Sehr zu empfehlen.',
    rating: 5
  },
  {
    name: 'Emilia Schmidt',
    text: 'Sehr professionelles Team. Sie haben unser neues Heizungssystem schnell installiert und den Ort makellos hinterlassen.',
    rating: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-slate-900 text-slate-300 text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-blue-400" />
            <span>0800-AQUA-HEAT</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-blue-400" />
            <span>service@aquaheatpros.de</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-orange-400" />
          <span>24/7 Notdienst verfügbar</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('startseite')}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-2 rounded-lg">
                <Droplets size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                AquaHeat<span className="text-blue-600">Pros</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Startseite', id: 'startseite' },
                { label: 'Leistungen', id: 'leistungen' },
                { label: 'Warum Wir', id: 'warum-wir' },
                { label: 'Bewertungen', id: 'bewertungen' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Angebot anfordern
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 p-2"
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
                {[
                  { label: 'Startseite', id: 'startseite' },
                  { label: 'Leistungen', id: 'leistungen' },
                  { label: 'Warum Wir', id: 'warum-wir' },
                  { label: 'Bewertungen', id: 'bewertungen' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-3 rounded-md font-medium"
                >
                  Angebot anfordern
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="startseite" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Plumbing background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-6">
                NR. 1 IN DER REGION
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Experten für Sanitär- & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Heizungstechnik</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Schnelle, zuverlässige und professionelle Lösungen für Ihr Zuhause oder Unternehmen. Wir machen es gleich beim ersten Mal richtig, garantiert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Jetzt Termin vereinbaren
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <a 
                  href="tel:08002782432"
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm flex items-center justify-center"
                >
                  <Phone className="mr-2 text-blue-600" size={20} />
                  0800-AQUA-HEAT
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white" 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Customer"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="mt-1">Über 500 zufriedene Kunden vertrauen uns</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Unsere Leistungen</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Umfassende Lösungen für Ihr Zuhause</h3>
            <p className="text-lg text-slate-600">
              Von kleinen Lecks bis hin zu kompletten Systeminstallationen – unsere zertifizierten Techniker verfügen über das Fachwissen für jeden Auftrag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="warum-wir" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Warum Wir</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Wir setzen Maßstäbe in der Sanitär- und Heizungstechnik
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Mit über 15 Jahren Erfahrung haben wir unseren Ruf auf Ehrlichkeit, handwerklicher Qualität und beispiellosem Kundenservice aufgebaut. Wir behandeln Ihr Zuhause mit dem Respekt, den es verdient.
              </p>

              <div className="space-y-8">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <feature.icon size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Freundlicher und professioneller Installateur" 
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-2xl">15+ Jahre</p>
                  <p className="text-slate-500 text-sm font-medium">Erfahrung & Qualität</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="bewertungen" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Kundenbewertungen</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Überzeugen Sie sich selbst</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">Verifizierter Kunde</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info */}
              <div className="p-10 lg:p-16 text-white bg-blue-700/20">
                <h3 className="text-3xl font-bold mb-4">Bereit, Ihr Problem zu lösen?</h3>
                <p className="text-blue-100 mb-10 text-lg">
                  Füllen Sie das Formular aus oder rufen Sie uns direkt an. Wir sind bereit, Ihnen bei jedem Sanitär- oder Heizungsproblem zu helfen.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Rufen Sie uns 24/7 an</p>
                      <p className="text-xl font-semibold">0800-AQUA-HEAT</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Schreiben Sie uns</p>
                      <p className="text-xl font-semibold">service@aquaheatpros.de</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Standort</p>
                      <p className="text-xl font-semibold">Handwerkerstraße 123, 10115 Berlin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-10 lg:p-16 bg-white">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">Kostenloses Angebot anfordern</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Vorname</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Max" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nachname</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Mustermann" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Telefonnummer</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="0151 1234567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Benötigte Leistung</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                      <option>Sanitärreparatur</option>
                      <option>Heizungssystem</option>
                      <option>Kesselservice</option>
                      <option>Notdienst</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nachricht</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Beschreiben Sie Ihr Problem..."></textarea>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg mt-2">
                    Anfrage senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Droplets size={24} className="text-blue-500" />
                <span className="text-2xl font-bold tracking-tight text-white">
                  AquaHeat<span className="text-blue-500">Pros</span>
                </span>
              </div>
              <p className="max-w-sm mb-6">
                Ihre vertrauenswürdigen lokalen Experten für alle Sanitär- und Heizungsbedürfnisse. Professionell, zuverlässig und immer hilfsbereit.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Schnelllinks</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Startseite', id: 'startseite' },
                  { label: 'Leistungen', id: 'leistungen' },
                  { label: 'Warum Wir', id: 'warum-wir' },
                  { label: 'Bewertungen', id: 'bewertungen' },
                  { label: 'Kontakt', id: 'kontakt' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2">
                <li>Sanitärreparaturen</li>
                <li>Heizungsinstallation</li>
                <li>Kesselwartung</li>
                <li>Notdienste</li>
                <li>Rohrreinigung</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} AquaHeat Pros. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Datenschutzrichtlinie</a>
              <a href="#" className="hover:text-white transition-colors">Nutzungsbedingungen</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

