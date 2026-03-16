import React from 'react';

export default function Datenschutz({ config }: { config: any }) {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose max-w-none text-slate-700">
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

          <h2>2. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          {config.name}<br />
          {config.address}<br />
          E-Mail: {config.email}</p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <p>Wir erfassen Daten, wenn Sie das Kontaktformular ausfüllen. Diese Daten werden nur zur Bearbeitung Ihrer Anfrage genutzt und nicht ohne Ihre Einwilligung an Dritte weitergegeben.</p>

          <h2>4. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>

          <h2>5. Cookies & Tracking</h2>
          <p>Unsere Website verwendet aus funktionalen Gründen Cookies, um die Nutzung zu erleichtern. Für optionale Tracking-Dienste holen wir Ihre vorherige Zustimmung ein.</p>
        </div>
      </div>
    </main>
  );
}
