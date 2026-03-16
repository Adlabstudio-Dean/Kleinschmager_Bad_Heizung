import React from 'react';

export default function Impressum({ config }: { config: any }) {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose max-w-none text-slate-700">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {config.name}<br />
            {config.address}
          </p>

          <h2>Vertreten durch:</h2>
          <p>Geschäftsführer: {config.companyDetails?.managingDirector || 'Jens Kleinschmager'}</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: {config.phone}<br />
            E-Mail: {config.email}
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: {config.companyDetails?.registerCourt || 'Amtsgericht Stuttgart'}<br />
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            {config.companyDetails?.taxId || 'DE257595924'}
          </p>
          
          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
