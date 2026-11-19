import React from 'react';
import { ArrowLeft, Shield, FileText, Cookie } from 'lucide-react';

export type LegalRoute =
  | '/termini-e-condizioni'
  | '/privacy-policy'
  | '/cookie-policy';

interface LegalPageProps {
  route: LegalRoute;
  onNavigate: (path: string) => void;
}

export function LegalPage({ route, onNavigate }: LegalPageProps) {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <main className="flex-1 py-16 md:py-24 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="inline-flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors rounded-full border border-white/15 hover:border-white/40 px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Torna alla home</span>
          </a>

          <nav
            aria-label="Documenti legali"
            className="flex flex-wrap items-center gap-2 text-xs"
          >
            <a
              href="/termini-e-condizioni"
              onClick={(e) => handleLinkClick(e, '/termini-e-condizioni')}
              className={`px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                route === '/termini-e-condizioni'
                  ? 'bg-white text-black border-white font-medium'
                  : 'border-white/15 text-white/70 hover:text-white hover:border-white/35'
              }`}
            >
              Termini e condizioni
            </a>
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className={`px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                route === '/privacy-policy'
                  ? 'bg-white text-black border-white font-medium'
                  : 'border-white/15 text-white/70 hover:text-white hover:border-white/35'
              }`}
            >
              Privacy policy
            </a>
            <a
              href="/cookie-policy"
              onClick={(e) => handleLinkClick(e, '/cookie-policy')}
              className={`px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                route === '/cookie-policy'
                  ? 'bg-white text-black border-white font-medium'
                  : 'border-white/15 text-white/70 hover:text-white hover:border-white/35'
              }`}
            >
              Cookie policy
            </a>
          </nav>
        </div>

        <article className="relative overflow-hidden bg-[#080b0f]/85 border border-white/15 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] card-specular-edge" />

          {route === '/termini-e-condizioni' && <TermsContent />}
          {route === '/privacy-policy' && <PrivacyContent />}
          {route === '/cookie-policy' && <CookieContent />}
        </article>
      </div>
    </main>
  );
}

function TermsContent() {
  return (
    <div className="space-y-8 text-white/80 text-sm sm:text-base leading-relaxed">
      <header className="border-b border-white/10 pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50">
          <FileText className="w-3.5 h-3.5" />
          <span>Ultimo aggiornamento: 20 novembre 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-title text-balance">
          Termini e condizioni di utilizzo
        </h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          1. Oggetto
        </h2>
        <p>
          Il sito web LO/OP, disponibile all'indirizzo{' '}
          <a
            href="https://loop.valentinapalazzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            https://loop.valentinapalazzo.com/
          </a>
          , presenta attività, workshop, percorsi di mentorship ed eventi
          dedicati al benessere, alla progettazione delle abitudini e alla
          respirazione funzionale.
        </p>
        <p>
          Il sito consente agli utenti di richiedere informazioni attraverso un
          apposito modulo di contatto.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          2. Utilizzo del modulo di contatto
        </h2>
        <p>
          L'utente può utilizzare il modulo per richiedere informazioni sulle
          attività di LO/OP, inserendo nome e cognome, indirizzo email e un
          messaggio opzionale. Il modulo prepara l'invio diretto tramite il
          client di posta elettronica dell'utente verso{' '}
          <a
            href="mailto:vale.palazzo@gmail.com"
            className="text-white underline underline-offset-4 hover:text-white/80 font-mono text-xs sm:text-sm"
          >
            vale.palazzo@gmail.com
          </a>
          .
        </p>
        <p>
          L'invio della richiesta non comporta alcun obbligo di acquisto,
          iscrizione o partecipazione a eventi e non costituisce una
          prenotazione.
        </p>
        <p>
          I dati forniti vengono utilizzati esclusivamente per rispondere alla
          richiesta e ricontattare l'utente in relazione alla stessa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          3. Correttezza delle informazioni
        </h2>
        <p>
          L'utente si impegna a fornire informazioni veritiere e a non
          utilizzare il modulo per inviare contenuti illeciti, offensivi o
          lesivi dei diritti di terzi.
        </p>
        <p>
          Si raccomanda di non inserire nel messaggio informazioni personali
          particolarmente delicate, come dati relativi alla salute, diagnosi o
          condizioni mediche.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          4. Natura delle attività
        </h2>
        <p>
          Le informazioni e i contenuti presenti sul sito hanno finalità
          divulgative, formative ed educative.
        </p>
        <p>
          Le attività proposte non costituiscono prestazioni mediche, diagnosi,
          trattamenti sanitari o prescrizioni terapeutiche e non sostituiscono il
          parere di un professionista sanitario qualificato.
        </p>
        <p>
          La partecipazione alle attività pratiche di respirazione e movimento è
          volontaria. L'utente è invitato a valutare la propria condizione
          individuale e a rivolgersi a un professionista sanitario in caso di
          dubbi o condizioni che possano rendere inappropriata una determinata
          pratica.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          5. Proprietà intellettuale
        </h2>
        <p>
          I contenuti presenti sul sito, inclusi testi, immagini, materiali
          didattici, presentazioni e marchi, sono protetti dalla normativa
          applicabile in materia di proprietà intellettuale.
        </p>
        <p>
          È vietata la riproduzione, distribuzione o utilizzazione commerciale
          dei contenuti senza preventiva autorizzazione dei rispettivi
          titolari.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          6. Limitazione di responsabilità
        </h2>
        <p>
          I responsabili del progetto si impegnano a mantenere le informazioni
          presenti sul sito accurate e aggiornate, senza tuttavia garantire
          l'assenza di errori o interruzioni del servizio.
        </p>
        <p>
          Non sono responsabili per eventuali danni derivanti da un utilizzo
          improprio delle informazioni o dei contenuti pubblicati sul sito.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          7. Modifiche
        </h2>
        <p>
          I presenti termini possono essere aggiornati nel tempo. La versione
          applicabile è quella pubblicata sul sito al momento della
          consultazione.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          8. Contatti
        </h2>
        <p>
          Per informazioni relative al sito e alle attività LO/OP è possibile
          scrivere a:
        </p>
        <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-white">
          <li>
            <a
              href="mailto:vale.palazzo@gmail.com"
              className="underline underline-offset-4 hover:text-white/80"
            >
              vale.palazzo@gmail.com
            </a>
          </li>
          <li>
            <a
              href="mailto:gabriele.respirofunzionale@gmail.com"
              className="underline underline-offset-4 hover:text-white/80"
            >
              gabriele.respirofunzionale@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-8 text-white/80 text-sm sm:text-base leading-relaxed">
      <header className="border-b border-white/10 pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50">
          <Shield className="w-3.5 h-3.5" />
          <span>Ultimo aggiornamento: 20 novembre 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-title text-balance">
          Informativa sul trattamento dei dati personali
        </h1>
        <p className="text-xs sm:text-sm font-medium text-white/65">
          Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          1. Titolare del trattamento
        </h2>
        <p>
          Il titolare del trattamento dei dati personali raccolti attraverso il
          sito LO/OP, disponibile all'indirizzo{' '}
          <a
            href="https://loop.valentinapalazzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            https://loop.valentinapalazzo.com/
          </a>
          , è:
        </p>
        <div className="bg-[#0a0d12] border border-white/10 rounded-xl p-4 sm:p-5 space-y-1.5 text-sm">
          <p className="font-semibold text-white">Valentina Palazzo</p>
          <p>P. IVA: 13006440013</p>
          <p>Indirizzo: Corso Regina Margherita 161, Torino (TO)</p>
          <p>
            Email:{' '}
            <a
              href="mailto:vale.palazzo@gmail.com"
              className="text-white underline underline-offset-4 hover:text-white/80 font-mono text-xs sm:text-sm"
            >
              vale.palazzo@gmail.com
            </a>
          </p>
        </div>
        <p>
          Per qualsiasi richiesta relativa al trattamento dei dati personali è
          possibile scrivere all'indirizzo email sopra indicato.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          2. Dati personali raccolti e modalità di invio
        </h2>
        <p>
          Attraverso il modulo di contatto presente sul sito vengono raccolti
          esclusivamente i seguenti dati personali:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-white/80">
          <li>Nome e cognome;</li>
          <li>Indirizzo email;</li>
          <li>Contenuto del messaggio inviato volontariamente dall'utente.</li>
        </ul>
        <p>
          Il sito non memorizza tali dati su un proprio database né li trasmette
          a servizi terzi di raccolta moduli: il modulo precompila l'email
          direttamente nel client di posta dell'utente verso{' '}
          <span className="font-mono text-xs sm:text-sm text-white">
            vale.palazzo@gmail.com
          </span>
          . Non vengono richiesti dati ulteriori né dati relativi alla salute.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          3. Finalità e base giuridica del trattamento
        </h2>
        <p>
          I dati personali ricevuti via email vengono trattati esclusivamente
          per rispondere alle richieste ricevute tramite il sito.
        </p>
        <p>
          La base giuridica del trattamento è costituita dall'esecuzione di
          misure precontrattuali adottate su richiesta dell'interessato, ai
          sensi dell'art. 6, par. 1, lett. b) del GDPR.
        </p>
        <p>
          I dati non vengono utilizzati per finalità di marketing, newsletter,
          profilazione o comunicazioni promozionali non richieste.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          4. Modalità di trattamento
        </h2>
        <p>
          I dati personali sono trattati con strumenti informatici e telematici,
          secondo principi di liceità, correttezza, trasparenza e
          minimizzazione, adottando misure adeguate a proteggerli da accessi
          non autorizzati, perdita o divulgazione.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          5. Conservazione dei dati
        </h2>
        <p>
          Le richieste ricevute e i relativi dati di contatto vengono conservati
          per un periodo massimo di <strong>12 mesi</strong> dalla ricezione,
          salvo che un'ulteriore conservazione sia necessaria per adempiere a
          obblighi di legge o tutelare i diritti del titolare.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          6. Comunicazione dei dati a terzi
        </h2>
        <p>I dati personali non vengono venduti né diffusi.</p>
        <p>
          I messaggi inviati tramite il client di posta vengono gestiti tramite
          il fornitore di posta elettronica utilizzato dal titolare per
          ricevere e rispondere alle email e possono essere comunicati alle
          autorità competenti nei soli casi previsti dalla legge.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          7. Diritti dell'interessato
        </h2>
        <p>
          L'utente può esercitare in qualsiasi momento i diritti previsti dagli
          artt. 15-22 del GDPR (accesso, rettifica, cancellazione, limitazione,
          opposizione e portabilità nei casi applicabili), scrivendo a{' '}
          <a
            href="mailto:vale.palazzo@gmail.com"
            className="text-white underline underline-offset-4 hover:text-white/80 font-mono text-xs sm:text-sm"
          >
            vale.palazzo@gmail.com
          </a>
          .
        </p>
        <p>
          L'interessato ha inoltre diritto di proporre reclamo al Garante per la
          protezione dei dati personali (
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            www.garanteprivacy.it
          </a>
          ).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          8. Natura del conferimento dei dati
        </h2>
        <p>
          Il conferimento dei dati richiesti è facoltativo, ma necessario per
          poter gestire la richiesta e rispondere all'utente. Il mancato
          conferimento comporta l'impossibilità di dare seguito alla richiesta.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          9. Modifiche all'informativa
        </h2>
        <p>
          La presente informativa può essere aggiornata in caso di modifiche al
          sito o alle modalità di trattamento dei dati. La versione aggiornata
          sarà pubblicata su questa pagina.
        </p>
      </section>
    </div>
  );
}

function CookieContent() {
  return (
    <div className="space-y-8 text-white/80 text-sm sm:text-base leading-relaxed">
      <header className="border-b border-white/10 pb-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-white/50">
          <Cookie className="w-3.5 h-3.5" />
          <span>Ultimo aggiornamento: 20 novembre 2026</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-title text-balance">
          Cookie policy
        </h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          1. Cosa sono i cookie
        </h2>
        <p>
          I cookie sono piccoli file di testo che i siti web possono memorizzare
          sul dispositivo dell'utente durante la navigazione per garantire il
          corretto funzionamento del sito o raccogliere informazioni sull'uso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          2. Cookie e tracciamenti sul sito LO/OP
        </h2>
        <p>
          Il sito LO/OP non installa cookie di profilazione, analisi
          statistica, marketing o tracciamento commerciale, né integra script o
          embed di terze parti che installano cookie durante la navigazione. I
          caratteri tipografici sono ospitati localmente sullo stesso dominio.
        </p>
        <p>
          Possono essere utilizzati esclusivamente cookie o risorse tecniche
          strettamente necessarie alla navigazione e all'erogazione tecnica del
          sito; per tale motivo non è richiesto un banner di consenso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          3. Collegamenti a siti esterni
        </h2>
        <p>
          Il sito contiene link diretti verso piattaforme esterne (ad esempio
          Luma per l'iscrizione agli eventi e Instagram per i contenuti social).
          Cliccando su tali collegamenti l'utente esce dal sito LO/OP e si
          applicano esclusivamente le informative privacy e cookie delle
          rispettive piattaforme.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          4. Gestione dei cookie
        </h2>
        <p>
          L'utente può gestire o disabilitare i cookie attraverso le
          impostazioni del proprio browser.
        </p>
        <p>
          La disabilitazione dei cookie tecnici potrebbe compromettere il
          corretto funzionamento di alcune funzionalità del sito.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          5. Contatti
        </h2>
        <p>
          Per informazioni relative all'utilizzo dei cookie è possibile
          contattare il titolare del trattamento all'indirizzo email:{' '}
          <a
            href="mailto:vale.palazzo@gmail.com"
            className="text-white underline underline-offset-4 hover:text-white/80 font-mono text-xs sm:text-sm"
          >
            vale.palazzo@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
