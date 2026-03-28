export default function Contact() {
  return (
    <section>
      <div className="card contact-card">
        <h2 className="contact-title">Kontakt</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Nachricht" rows={5} required />
          <button type="submit" className="button contact-btn">Absenden</button>
        </form>
      </div>
      <div className="textbox contact-info">
        Oder schreib uns direkt an: <br />
        <a href="mailto:hello@re-stil.de" className="contact-mail">hello@re-stil.de</a>
      </div>
    </section>
  );
}
