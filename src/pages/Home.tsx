import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'motion/react';
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
  CheckCircle2,
  Wind,
  Sparkles,
  CalendarCheck,
  MessageSquare,
  HardHat,
  Instagram,
  Facebook,
  Award,
  ThumbsUp,
  BadgeCheck,
} from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Badsanierung & Wellness',
    description: 'Individuelle Wohlfühlbäder, Renovierungen, Wanne-in-Wanne-Systeme und exklusive Badmöbel aus einer Hand.',
    icon: Droplets,
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
    cta: 'Mehr erfahren →',
  },
  {
    title: 'Energieeffiziente Heizsysteme',
    description: 'Planung und umweltfreundlicher Einbau von Gasheizungen, Fußbodenheizungen und Kaminsanierungen.',
    icon: Flame,
    color: 'text-secondary-500',
    bgColor: 'bg-secondary-50',
    cta: 'Mehr erfahren →',
  },
  {
    title: 'Solar & Photovoltaik',
    description: 'Zukunftsweisende Nutzung erneuerbarer Energien mit modernen Solarthermie- und Photovoltaiksystemen.',
    icon: Sparkles,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    cta: 'Mehr erfahren →',
  },
  {
    title: 'Gas- & Wasserinstallation',
    description: 'Professionelle Sanitärinstallationen, Wasseraufbereitung und sichere Verlegung aller Medienleitungen im Haus.',
    icon: HardHat,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    cta: 'Mehr erfahren →',
  },
  {
    title: 'Reparatur & Kundendienst',
    description: 'Schnelle Problemlösung und verlässlicher Kundendienst durch unsere erfahrenen Servicetechniker.',
    icon: Wrench,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    cta: 'Mehr erfahren →',
  },
  {
    title: 'Wartung & Sicherheitschecks',
    description: 'Gassicherheitschecks für Ihre Gasleitungen und maßgeschneiderte Wartungsverträge für Ihre Heizung.',
    icon: ShieldCheck,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    cta: 'Mehr erfahren →',
  },
];

const COUNTERS = [
  { value: 17, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 1000, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 100, suffix: '%', label: 'Qualität & Service' },
  { value: 1, suffix: 'A', label: 'Beratung & Planung' },
];

const TIMELINE = [
  {
    year: '1987',
    title: 'Die Gründung',
    description: 'Heinrich Maurer gründet den Betrieb in Stuttgart-Vaihingen. Drei Mitarbeiter, ein Transporter, unbegrenzte Leidenschaft.',
  },
  {
    year: '1995',
    title: 'Meisterbetrieb',
    description: 'Sohn Klaus übernimmt Teile des Betriebs und erwirbt den Meistertitel. Das Team wächst auf 12 Fachleute.',
  },
  {
    year: '2008',
    title: 'Modernisierung',
    description: 'Investition in erneuerbare Energien. Solarthermie und Wärmepumpen werden zum neuen Schwerpunkt.',
  },
  {
    year: '2023',
    title: 'Heute & Morgen',
    description: 'Die dritte und vierte Generation führt das Unternehmen in die digitale Zukunft — mit denselben Werten wie 1987.',
  },
];

const FEATURES = [
  { title: 'Zertifizierter Meisterbetrieb', description: 'Vollständig zertifizierte Fachleute, denen Sie in Ihrem Zuhause vertrauen können.', icon: BadgeCheck },
  { title: 'Transparente Preise', description: 'Keine versteckten Gebühren. Sie kennen die Kosten, bevor wir mit der Arbeit beginnen.', icon: CheckCircle2 },
  { title: 'Schnelle Reaktionszeit', description: 'Wir kommen pünktlich und bestens ausgerüstet, um Ihre Probleme zu lösen.', icon: Clock },
  { title: 'Qualitätsgarantie', description: '5 Jahre Gewährleistung auf alle unsere Installationen und Reparaturen.', icon: Award },
];

const BRAND_PARTNERS = [
  'Viessmann', 'Vaillant', 'Hansgrohe', 'Duravit', 'Grohe', 'Villeroy & Boch', 'Buderus', 'Junkers'
];

const TESTIMONIALS = [
  {
    name: 'Kunde',
    location: 'Stuttgart',
    text: 'Zuverlässig, schnell und sehr kompetent. Unser Heizungsausfall wurde umgehend behoben. Tolles Team!',
    rating: 5,
  },
  {
    name: 'M. Hofmann',
    location: 'Stuttgart',
    text: 'Das neue Bad ist ein Traum! Herr Kleinschmager hat uns von Anfang an super beraten und die Umsetzung war einwandfrei.',
    rating: 5,
  },
  {
    name: 'A. Berger',
    location: 'Stuttgart',
    text: 'Pünktlich, sauber und faire Preise. Kann ich jedem in Stuttgart empfehlen.',
    rating: 5,
  },
];

const JOURNEY_STEPS = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Kontakt aufnehmen',
    desc: 'Rufen Sie uns an oder füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden.',
  },
  {
    num: '02',
    icon: CalendarCheck,
    title: 'Kostenlose Beratung',
    desc: 'Wir beraten Sie vor Ort, stellen Fragen, hören zu — und erstellen ein transparentes Angebot.',
  },
  {
    num: '03',
    icon: HardHat,
    title: 'Professionelle Umsetzung',
    desc: 'Termingerechte, saubere Ausführung mit 5-Jahres-Qualitätsgarantie auf alle Arbeiten.',
  },
];

// ─── Animated Counter ──────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  const formatted = value >= 1000 ? display.toLocaleString('de-DE') : display;

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

// ─── Home ───────────────────────────────────────────────────────────────────

export default function Home({ config }: { config: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const motionProps = (initial: object, animate: object, transition?: object) =>
    prefersReducedMotion ? {} : { initial, animate, transition };

  const whileInViewProps = (initial: object, whileInView: object, transition?: object) =>
    prefersReducedMotion
      ? {}
      : { initial, whileInView, viewport: { once: true }, transition };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <main className="w-full">

        {/* ── 1. HERO ── */}
        <section id="startseite" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-slate-50 to-secondary-50/30" />
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-100 rounded-full blur-[100px] opacity-30 -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <motion.div {...motionProps({ opacity: 0, y: 30 }, { opacity: 1, y: 0 }, { duration: 0.6 })}>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold tracking-wide mb-6">
                  <Star size={14} fill="currentColor" /> MEISTERBETRIEB SEIT 1987
                </span>
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                  Mit uns wird Ihr{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    Traumbad
                  </span>{' '}
                  Wirklichkeit.
                </h1>
                <p className="text-xl text-slate-600 mb-4 leading-relaxed font-medium">
                  Ihr Meisterbetrieb seit {config.foundingYear} —<br className="hidden sm:block" />
                  Haustechnik, auf die Sie sich verlassen können.
                </p>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  Schnelle, zuverlässige und professionelle Lösungen für Sanitär und Heizung in {config.serviceArea}. Wir machen es richtig — beim ersten Mal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('kontakt')}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Jetzt Termin vereinbaren
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                  <a
                    href={"tel:" + config.phone.replace(/\s/g, "")}
                    className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm flex items-center justify-center"
                  >
                    <Phone className="mr-2 text-primary-600" size={20} />
                    {config.phone}
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Zuverlässiger Meisterbetrieb</p>
                    <p className="mt-0.5">Zahlreiche zufriedene Kunden in {config.serviceArea}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 2. TRUST COUNTERS ── */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {COUNTERS.map((counter, i) => (
                <motion.div
                  key={i}
                  {...whileInViewProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.5, delay: i * 0.1 })}
                >
                  <div className="text-4xl lg:text-5xl font-extrabold mb-2">
                    <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                  </div>
                  <p className="text-primary-100 font-medium text-sm lg:text-base">{counter.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. SERVICES ── */}
        <section id="leistungen" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Unsere Leistungen</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Was wir für Sie tun können</h3>
              <p className="text-lg text-slate-600">
                Vom Traumbad bis zum Notdienst — wir begleiten Sie durch alle Aufgaben rund um Sanitär und Heizung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  {...whileInViewProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 })}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all group cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                  <button
                    onClick={() => scrollToSection('kontakt')}
                    className={`text-sm font-semibold ${service.color} hover:underline flex items-center gap-1`}
                  >
                    {service.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. GENERATIONAL STORY / TIMELINE ── */}
        <section id="ueber-uns" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div {...whileInViewProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.5 })}>
                <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Über Uns</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Erfahrung & Innovation</h3>
                <p className="text-slate-400 text-lg">Ein Meisterbetrieb, der mit der Zeit geht</p>
              </motion.div>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-800 -translate-x-1/2" />

              <div className="space-y-12">
                {config.timeline.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    {...whileInViewProps({ opacity: 0, x: index % 2 === 0 ? -30 : 30 }, { opacity: 1, x: 0 }, { duration: 0.6, delay: index * 0.1 })}
                    className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'}`}
                  >
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} pb-8 lg:pb-0`}>
                      <span className="inline-block text-4xl font-extrabold text-primary-500 mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed max-w-md lg:ml-auto">{item.description}</p>
                    </div>
                    <div className={`relative hidden lg:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                      <div className="w-5 h-5 rounded-full bg-primary-500 ring-4 ring-primary-500/20 absolute ${index % 2 === 0 ? '-left-[2.75rem]' : 'right-[calc(100%-2.75rem)]'}" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US ── */}
        <section id="warum-wir" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...whileInViewProps({ opacity: 0, x: -30 }, { opacity: 1, x: 0 }, { duration: 0.6 })}>
                <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Warum Wir</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                  Qualität, die man spürt — Vertrauen, das bleibt.
                </h3>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  Seit 1987 stehen wir dafür, dass jeder Auftrag so ausgeführt wird, als wäre es unser eigenes Zuhause. Keine Kompromisse, keine Überraschungen.
                </p>

                <div className="space-y-8">
                  {FEATURES.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                          <feature.icon size={20} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-slate-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...whileInViewProps({ opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, { duration: 0.6 })}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-3xl transform rotate-3 scale-105 opacity-10 blur-xl" />
                <div className="relative bg-slate-900 rounded-3xl p-10 text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary-500/20 text-primary-400 p-3 rounded-full">
                      <ThumbsUp size={28} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold">Meisterbetrieb</p>
                      <p className="text-slate-400 text-sm">für Haustechnik in {config.serviceArea}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      '✓ Zertifizierter Sanitärbetrieb',
                      '✓ Langjährige Erfahrung seit 2007',
                      '✓ Schneller & kompetenter Service',
                      '✓ Transparente Preisgestaltung',
                    ].map((item, i) => (
                      <p key={i} className="text-slate-300 font-medium">{item}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 6. BRAND PARTNERS ── */}
        <section className="py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">
              Unsere Markenpartner
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {BRAND_PARTNERS.map((brand, i) => (
                <motion.div
                  key={i}
                  {...whileInViewProps({ opacity: 0 }, { opacity: 1 }, { duration: 0.4, delay: i * 0.06 })}
                  className="text-slate-400 hover:text-slate-700 transition-colors font-bold text-lg lg:text-xl"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. TESTIMONIALS ── */}
        <section id="bewertungen" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Kundenbewertungen</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Was unsere Kunden sagen</h3>
              <p className="text-slate-500">Echte Bewertungen von echten Kunden aus der Region Stuttgart.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={index}
                  {...whileInViewProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.5, delay: prefersReducedMotion ? 0 : index * 0.08 })}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin size={10} /> {t.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <Star size={16} fill="currentColor" />
                Bewerten Sie uns bei Google!
              </a>
            </div>
          </div>
        </section>

        {/* ── 8. FÖRDERBERATUNG BANNER ── */}
        <section className="py-16 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-sm font-semibold text-secondary-200 uppercase tracking-widest mb-2">Staatliche Förderung</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Bis zu 70 % Förderung für Ihre neue Heizung!</h2>
                <p className="text-secondary-100 text-lg max-w-xl">
                  KfW- und BAFA-Förderprogramme können einen Großteil Ihrer Investition übernehmen. Wir beraten Sie kostenlos.
                </p>
                <div className="flex items-center gap-6 mt-4 text-secondary-100 text-sm font-medium">
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} /> KfW</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} /> BAFA</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} /> BEW</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="bg-white text-secondary-600 hover:bg-secondary-50 font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Jetzt beraten lassen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. 3-STEP JOURNEY ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">So einfach geht's</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">In 3 Schritten zu Ihrem Wunschergebnis</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 z-0" style={{ left: '20%', right: '20%' }} />

              {JOURNEY_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  {...whileInViewProps({ opacity: 0, y: 20 }, { opacity: 1, y: 0 }, { duration: 0.5, delay: i * 0.15 })}
                  className="relative z-10 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary-50 border-4 border-primary-100 flex flex-col items-center justify-center mx-auto mb-6 group-hover:border-primary-400 transition-colors">
                    <step.icon size={32} className="text-primary-600" />
                  </div>
                  <span className="text-5xl font-extrabold text-primary-100 absolute -top-3 left-1/2 -translate-x-1/2 select-none">{step.num}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-14">
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
              >
                Jetzt Schritt 1 starten
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* ── 10. CONTACT ── */}
        <section id="kontakt" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Info */}
                <div className="p-10 lg:p-16 text-white bg-primary-700/20">
                  <h3 className="text-3xl font-bold mb-4">Starten Sie noch heute Ihr Projekt.</h3>
                  <p className="text-primary-100 mb-10 text-lg">
                    Füllen Sie das Formular aus oder rufen Sie uns direkt an. Wir antworten innerhalb von 24 Stunden.
                  </p>
                  <address className="not-italic space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/30 flex items-center justify-center">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm">Rufen Sie uns an</p>
                        <a href={"tel:" + config.phone.replace(/\s/g, "")} className="block text-xl font-semibold hover:underline">{config.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/30 flex items-center justify-center">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm">E-Mail</p>
                        <a href={"mailto:" + config.email} className="text-xl font-semibold hover:underline">{config.email}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/30 flex items-center justify-center">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm">Standort</p>
                        <p className="text-xl font-semibold">{config.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/30 flex items-center justify-center">
                        <Clock size={24} />
                      </div>
                      <div>
                        <p className="text-primary-200 text-sm">Öffnungszeiten</p>
                        <p className="text-base font-semibold">Mo – Fr: 7:30 – 16:30 Uhr</p>
                        <p className="text-sm text-primary-200">Wochenende geschlossen</p>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Form */}
                <div className="p-10 lg:p-16 bg-white">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Kostenlose Beratung anfordern</h4>
                  <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="vorname" className="block text-sm font-medium text-slate-700 mb-1">Vorname <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="vorname" type="text" required autoComplete="given-name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all" placeholder="Max" />
                      </div>
                      <div>
                        <label htmlFor="nachname" className="block text-sm font-medium text-slate-700 mb-1">Nachname <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="nachname" type="text" required autoComplete="family-name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all" placeholder="Mustermann" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-slate-700 mb-1">Telefonnummer <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input id="telefon" type="tel" required autoComplete="tel" inputMode="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all" placeholder="0711 1234567" />
                    </div>
                    <div>
                      <label htmlFor="leistung" className="block text-sm font-medium text-slate-700 mb-1">Benötigte Leistung</label>
                      <select id="leistung" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all bg-white">
                        <option>Badsanierung & Wellness</option>
                        <option>Energieeffiziente Heizsysteme</option>
                        <option>Solar & Photovoltaik</option>
                        <option>Gas- & Wasserinstallation</option>
                        <option>Reparatur & Kundendienst</option>
                        <option>Wartung & Sicherheitschecks</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="nachricht" className="block text-sm font-medium text-slate-700 mb-1">Nachricht</label>
                      <textarea id="nachricht" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Beschreiben Sie Ihre Anfrage..." />
                    </div>
                    {formState === 'success' ? (
                      <div role="alert" className="w-full bg-green-50 border border-green-200 text-green-800 font-semibold py-4 rounded-lg text-center flex items-center justify-center gap-2">
                        <CheckCircle2 size={20} /> Vielen Dank! Wir melden uns innerhalb von 24 Stunden.
                      </div>
                    ) : (
                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="w-full bg-secondary-500 hover:bg-secondary-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg mt-2 flex items-center justify-center gap-2"
                      >
                        {formState === 'loading' ? (
                          <><span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" aria-hidden="true" /> Wird gesendet…</>
                        ) : 'Anfrage senden →'}
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
  );
}
