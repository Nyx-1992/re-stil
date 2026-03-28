export default function Book() {
  return (
    <section>
      <div className="card booking-card">
        <h2 className="booking-title">Buche deine Stange</h2>
        <ul className="booking-list">
          <li>Weekend (Fr–So): 15 € + 25% Umsatzbeteiligung</li>
          <li>Woche (7 Tage): 15 € + 25% Umsatzbeteiligung</li>
          <li>Monat (30 Tage): 50 € + 25% Umsatzbeteiligung</li>
        </ul>
        <div className="textbox booking-info">
          Buchung einfach online oder im Laden.<br />
          Zahlung per Karte oder Überweisung möglich.
        </div>
        <a href="mailto:hello@re-stil.de" className="button booking-btn">Jetzt anfragen</a>
      </div>
      <div className="textbox booking-how">
        <b>So funktioniert’s:</b> <br />
        Stange buchen, Artikel platzieren, QR-Code erhalten, verkaufen & Community erleben!
      </div>
    </section>
  );
}
