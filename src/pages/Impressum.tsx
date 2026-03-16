import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export default function Impressum({ config }: { config: any }) {
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
            <Info size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Impressum</h1>
          <p className="mt-4 text-slate-500 font-medium">Rechtliche Informationen über unseren Betrieb</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none text-slate-700">
          <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong className="text-slate-900">{config.name}</strong><br />
            {config.address}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Vertreten durch:</h2>
          <p>Geschäftsführer: <span className="font-semibold text-slate-900">{config.companyDetails?.managingDirector || 'Jens Kleinschmager'}</span></p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: <a href={`tel:${config.phone.replace(/\s/g, "")}`} className="hover:text-primary-600 transition-colors">{config.phone}</a><br />
            E-Mail: <a href={`mailto:${config.email}`} className="text-primary-600 hover:underline">{config.email}</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: {config.companyDetails?.registerCourt || 'Amtsgericht Stuttgart'}<br />
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <span className="font-mono text-slate-900">{config.companyDetails?.taxId || 'DE257595924'}</span>
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
