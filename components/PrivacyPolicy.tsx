import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sage hover:text-deep-teal transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <article className="prose prose-lg max-w-none">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-teal mb-2">Datenschutzerklärung</h1>
          <p className="text-sage mb-12">Stand: 1. März 2025</p>

          {/* Table of Contents */}
          <section className="bg-sand-light/30 p-6 rounded-xl mb-12">
            <h2 className="font-serif text-xl text-deep-teal mb-4">Inhaltsübersicht</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Verantwortlicher</li>
              <li>Übersicht der Verarbeitungen</li>
              <li>Maßgebliche Rechtsgrundlagen</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Übermittlung von personenbezogenen Daten</li>
              <li>Internationale Datentransfers</li>
              <li>Allgemeine Informationen zur Datenspeicherung und Löschung</li>
              <li>Rechte der betroffenen Personen</li>
              <li>Geschäftliche Leistungen</li>
              <li>Bereitstellung des Onlineangebots und Webhosting</li>
              <li>Einsatz von Cookies</li>
              <li>Kontakt- und Anfrageverwaltung</li>
              <li>Newsletter und elektronische Benachrichtigungen</li>
              <li>Webanalyse, Monitoring und Optimierung</li>
              <li>Onlinemarketing</li>
              <li>Präsenzen in sozialen Netzwerken (Social Media)</li>
              <li>Plug-ins und eingebettete Funktionen sowie Inhalte</li>
            </ul>
          </section>

          {/* Verantwortlicher */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Verantwortlicher</h2>
            <div className="text-gray-700 space-y-1">
              <p>Jonas Bartl</p>
              <p>Isarecker Feld 12</p>
              <p>85368 Wang</p>
              <p>Deutschland</p>
              <p className="mt-4">E-Mail-Adresse: <a href="mailto:jb@jonasbartl.de" className="text-sand hover:text-deep-teal">jb@jonasbartl.de</a></p>
              <p>Impressum: <a href="https://www.jonasbartl.de/impressum" target="_blank" rel="noopener noreferrer" className="text-sand hover:text-deep-teal">https://www.jonasbartl.de/impressum</a></p>
            </div>
          </section>

          {/* Übersicht der Verarbeitungen */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Übersicht der Verarbeitungen</h2>
            <p className="text-gray-700 mb-4">Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>

            <h3 className="font-semibold text-deep-teal mt-6 mb-3">Arten der verarbeiteten Daten</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Bestandsdaten</li>
              <li>Zahlungsdaten</li>
              <li>Kontaktdaten</li>
              <li>Inhaltsdaten</li>
              <li>Vertragsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten</li>
              <li>Protokolldaten</li>
            </ul>

            <h3 className="font-semibold text-deep-teal mt-6 mb-3">Kategorien betroffener Personen</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Leistungsempfänger und Auftraggeber</li>
              <li>Interessenten</li>
              <li>Kommunikationspartner</li>
              <li>Nutzer</li>
              <li>Geschäfts- und Vertragspartner</li>
            </ul>

            <h3 className="font-semibold text-deep-teal mt-6 mb-3">Zwecke der Verarbeitung</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten</li>
              <li>Kommunikation</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Direktmarketing</li>
              <li>Reichweitenmessung</li>
              <li>Tracking</li>
              <li>Büro- und Organisationsverfahren</li>
              <li>Zielgruppenbildung</li>
              <li>Organisations- und Verwaltungsverfahren</li>
              <li>Feedback</li>
              <li>Marketing</li>
              <li>Profile mit nutzerbezogenen Informationen</li>
              <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
              <li>Informationstechnische Infrastruktur</li>
              <li>Öffentlichkeitsarbeit</li>
              <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
            </ul>
          </section>

          {/* Maßgebliche Rechtsgrundlagen */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Maßgebliche Rechtsgrundlagen</h2>
            <p className="text-gray-700 mb-4">
              <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
              <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
              <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> – Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</li>
              <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
            </p>
          </section>

          {/* Sicherheitsmaßnahmen */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Sicherheitsmaßnahmen</h2>
            <p className="text-gray-700 mb-4">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-gray-700">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
            </p>
          </section>

          {/* Übermittlung von personenbezogenen Daten */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Übermittlung von personenbezogenen Daten</h2>
            <p className="text-gray-700">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
            </p>
          </section>

          {/* Internationale Datentransfers */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Internationale Datentransfers</h2>
            <p className="text-gray-700">
              <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO).
            </p>
          </section>

          {/* Allgemeine Informationen zur Datenspeicherung und Löschung */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
            <p className="text-gray-700 mb-4">
              Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
            </p>
            <h3 className="font-semibold text-deep-teal mt-6 mb-3">Aufbewahrung und Löschung von Daten</h3>
            <p className="text-gray-700 mb-3">Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>10 Jahre</strong> – Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen.</li>
              <li><strong>8 Jahre</strong> – Buchungsbelege, wie z. B. Rechnungen und Kostenbelege.</li>
              <li><strong>6 Jahre</strong> – Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen.</li>
              <li><strong>3 Jahre</strong> – Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und Rechte zu berücksichtigen.</li>
            </ul>
          </section>

          {/* Rechte der betroffenen Personen */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Rechte der betroffenen Personen</h2>
            <p className="text-gray-700 mb-4">Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.</li>
              <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
              <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
              <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
              <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
              <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</li>
              <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.</li>
            </ul>
          </section>

          {/* Geschäftliche Leistungen */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Geschäftliche Leistungen</h2>
            <p className="text-gray-700 mb-4">
              Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf die Kommunikation mit den Vertragspartnern (oder vorvertraglich), etwa zur Beantwortung von Anfragen.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten, Zahlungsdaten, Kontaktdaten, Vertragsdaten.</li>
              <li><strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber, Interessenten, Geschäfts- und Vertragspartner.</li>
              <li><strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten, Kommunikation, Büro- und Organisationsverfahren.</li>
              <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
          </section>

          {/* Bereitstellung des Onlineangebots und Webhosting */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
            <p className="text-gray-700 mb-4">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-, Kommunikations- und Verfahrensdaten, Protokolldaten.</li>
              <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
              <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Informationstechnische Infrastruktur, Sicherheitsmaßnahmen.</li>
              <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
            </ul>
          </section>

          {/* Einsatz von Cookies */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-deep-teal mb-4">Einsatz von Cookies</h2>
            <p className="text-gray-700 mb-4">
              Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften.
            </p>
            <h3 className="font-semibold text-deep-teal mt-6 mb-3">Speicherdauer</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Temporäre Cookies (Session-Cookies):</strong> Werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät geschlossen hat.</li>
              <li><strong>Permanente Cookies:</strong> Bleiben auch nach dem Schließen des Endgeräts gespeichert. Die Speicherdauer kann bis zu zwei Jahre betragen.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out):</strong> Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.
            </p>
          </section>

          {/* Generator Credit */}
          <section className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
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

export default PrivacyPolicy;
