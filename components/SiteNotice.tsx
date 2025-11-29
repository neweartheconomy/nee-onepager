import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SiteNoticeProps {
  onBack: () => void;
}

const SiteNotice: React.FC<SiteNoticeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Simple header */}
      <header className="bg-deep-teal py-6">
        <div className="container mx-auto px-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="flex items-center gap-2">
            <img
              src="/nee_logo.svg"
              alt="New Earth Economy"
              className="h-10 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sage hover:text-deep-teal transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <article className="prose prose-lg max-w-none">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-teal mb-8">Impressum</h1>

          <p className="text-gray-600 italic mb-8">
            Dieses Impressum gilt auch für alle Social Media Kanäle (z.B.: LinkedIn, Instagram, YouTube)
          </p>

          {/* Angaben gemäß § 5 DDG */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Angaben gemäß § 5 DDG:</h2>
            <div className="text-gray-700 space-y-1">
              <p>Jonas Bartl</p>
              <p>Isarecker Feld 12</p>
              <p>85368 Wang</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Kontakt:</h2>
            <p className="text-gray-700">
              E-Mail: <a href="mailto:jb@jonasbartl.de" className="text-sand hover:text-deep-teal">jb@jonasbartl.de</a>
            </p>
          </section>

          {/* USt-ID */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="text-gray-700">DE314862456</p>
          </section>

          {/* Redaktionelle Verantwortung */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Redaktionelle Verantwortung</h2>
            <div className="text-gray-700 space-y-1">
              <p>Jonas Bartl</p>
              <p>Isarecker Feld 12</p>
              <p>85368 Wang</p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-700 mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand hover:text-deep-teal break-all"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-gray-700">
              Meine E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Urheberrecht</h2>
            <p className="text-gray-700">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-gray-700">
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Quellenangaben */}
          <section className="mb-8">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Quellenangaben für die verwendeten Bilder:</h2>
            <p className="text-gray-700">Canva Pro</p>
          </section>

          {/* Source */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Quelle: <a href="https://www.e-recht24.de/" target="_blank" rel="noopener noreferrer" className="hover:text-sand">https://www.e-recht24.de/</a>
            </p>
          </section>
        </article>

        {/* Back button at bottom */}
        <div className="mt-16 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-sand text-deep-teal font-bold rounded-full hover:bg-deep-teal hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-deep-teal text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          © 2025 New Earth Economy
        </div>
      </footer>
    </div>
  );
};

export default SiteNotice;
