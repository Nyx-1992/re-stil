export default function Contact() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Kontakt</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Nachricht" required />
        <button type="submit">Absenden</button>
      </form>
    </main>
  );
}
