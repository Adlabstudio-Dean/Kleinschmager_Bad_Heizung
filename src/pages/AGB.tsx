import React from 'react';

export default function AGB({ config }: { config: any }) {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose max-w-none text-slate-700">
          <h2>1. Geltungsbereich</h2>
          <p>Für alle Lieferungen und Leistungen der {config.name} gelten diese Allgemeinen Geschäftsbedingungen (AGB).</p>
          
          <h2>2. Vertragspartner</h2>
          <p>Der Vertrag kommt zustande mit:<br />
          {config.name}<br />
          {config.address}</p>

          <h2>3. Angebot und Vertragsschluss</h2>
          <p>Unsere Angebote sind freibleibend. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Ausführung der Leistung zustande.</p>

          <h2>4. Preise und Zahlungsbedingungen</h2>
          <p>Es gelten die in unseren Angeboten genannten Preise. Zahlungen sind sofort nach Rechnungsstellung ohne Abzug fällig, sofern nichts anderes vereinbart wurde.</p>

          <h2>5. Gewährleistung und Haftung</h2>
          <p>Wir übernehmen 5 Jahre Handwerksgarantie auf unsere Neuinstallationen (§ 438 Abs. 1 Nr. 2 BGB / § 634a Abs. 1 Nr. 2 BGB). Die Gewährleistung für Reparaturen beträgt 1 Jahr.</p>

          <h2>6. Eigentumsvorbehalt</h2>
          <p>Bis zur vollständigen Zahlung bleibt die gelieferte Ware unser Eigentum.</p>

          <h2>7. Gerichtsstand</h2>
          <p>Gerichtsstand ist Stuttgart.</p>
        </div>
      </div>
    </main>
  );
}
