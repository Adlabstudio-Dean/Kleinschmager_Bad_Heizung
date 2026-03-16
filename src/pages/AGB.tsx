import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function AGB({ config }: { config: any }) {
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
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-4 text-slate-500 font-medium">Unsere rechtlichen Rahmenbedingungen für eine faire Zusammenarbeit</p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 prose prose-slate max-w-none text-slate-700">
          <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
          <p>Für alle Lieferungen und Leistungen der <strong className="text-slate-900">{config.name}</strong> gelten diese Allgemeinen Geschäftsbedingungen (AGB).</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Vertragspartner</h2>
          <p>Der Vertrag kommt zustande mit:<br />
          <strong className="text-slate-900">{config.name}</strong><br />
          {config.address}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Angebot und Vertragsschluss</h2>
          <p>Unsere Angebote sind freibleibend. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Ausführung der Leistung zustande.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Preise und Zahlungsbedingungen</h2>
          <p>Es gelten die in unseren Angeboten genannten Preise. Zahlungen sind sofort nach Rechnungsstellung ohne Abzug fällig, sofern nichts anderes vereinbart wurde.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Gewährleistung und Haftung</h2>
          <p>Wir übernehmen 5 Jahre Handwerksgarantie auf unsere Neuinstallationen (§ 438 Abs. 1 Nr. 2 BGB / § 634a Abs. 1 Nr. 2 BGB). Die Gewährleistung für Reparaturen beträgt 1 Jahr.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Eigentumsvorbehalt</h2>
          <p>Bis zur vollständigen Zahlung bleibt die gelieferte Ware unser Eigentum.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Gerichtsstand</h2>
          <p>Gerichtsstand ist Stuttgart.</p>
        </div>
      </div>
    </motion.main>
  );
}
