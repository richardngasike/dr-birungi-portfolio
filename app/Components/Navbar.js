'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Sticky Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Desktop Logo – Signature */}
          <Link href="/" className={styles.navLogo} onClick={closeMenu}>
            <Image
              src="/images/signature.png"
              alt="Dr. Birungi Signature"
              width={200}
              height={100}
              priority
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.navMenu}>
            <li>
              <a href="tel:+256772342377" className={styles.navPhone}>
                Call
              </a>
            </li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          {/* Mobile Logo – Signature */}
          <Link href="/" className={styles.mobileLogo} onClick={closeMenu}>
            <Image
             src="/images/signature.png"
              alt="Dr. Birungi Signature"
              width={190}
              height={54}
              priority
              className={styles.logoImage}
            />
          </Link>

          <button
            onClick={closeMenu}
            className={styles.mobileCloseBtn}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          <li>
            <a href="tel:+256772342377" className={styles.mobileCallLink} onClick={closeMenu}>
              Call +256 772 342 377
            </a>
          </li>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/research" onClick={closeMenu}>Research</Link></li>
          <li><Link href="/publications" onClick={closeMenu}>Publications</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className={styles.mobileFooterNote}>
          <p>Global Lead, Macroeconomics & Fiscal Policy</p>
          <p>UNAIDS • PhD Health Economics (UCL)</p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className={styles.menuBackdrop} onClick={closeMenu} />}
    </>
  );
}