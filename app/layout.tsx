
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header style={{ background: 'var(--beige)', borderBottom: '1px solid var(--olive)' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <Image src="/logo.png" alt="Re:Stil Logo" width={40} height={40} />
              <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--olive)' }}>Re:Stil</span>
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/book">Book</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/community">Community</Link>
              <Link href="/sustainability">Sustainability</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/how-it-works">How it works</Link>
            </div>
          </nav>
        </header>
        <main style={{ minHeight: '80vh' }}>{children}</main>
        <footer style={{ background: 'var(--beige)', borderTop: '1px solid var(--olive)', textAlign: 'center', padding: '1rem', color: 'var(--terracotta)' }}>
          © {new Date().getFullYear()} Re:Stil. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
