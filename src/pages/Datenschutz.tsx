import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Datenschutz({ config }: { config: any }) {
  return (
    <motion.main 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-32 pb-24 bg-slate-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Datenschutzerklärung</h1>
          <p className="mt-4 text-slate-500 font-medium">Sicherheit und Transparenz im Umgang mit Ihren Daten</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none text-slate-700">
          <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          <strong className="text-slate-900">{config.name}</strong><br />
          {config.address}<br />
          E-Mail: <a href={`mailto:${config.email}`} className="text-primary-600 hover:underline">{config.email}</a></p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Datenerfassung auf unserer Website</h2>
          <p>Wir erfassen Daten, wenn Sie das Kontaktformular ausfüllen. Diese Daten werden nur zur Bearbeitung Ihrer Anfrage genutzt und nicht ohne Ihre Einwilligung an Dritte weitergegeben.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies & Tracking</h2>
          <p>Unsere Website verwendet aus funktionalen Gründen Cookies, um die Nutzung zu erleichtern. Für optionale Tracking-Dienste holen wir Ihre vorherige Zustimmung ein.</p>
        </div>
      </div>
    </motion.main>
  );
}
