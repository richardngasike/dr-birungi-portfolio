'use client';
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Sticky Top Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            Dr. Birungi
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li>
              <a href="tel:+256772342377" className="nav-phone">
                Call
              </a>
            </li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Hamburger Button (Turns into X) */}
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-logo" onClick={closeMenu}>
            Dr. Birungi
          </Link>

          {/* ONLY ONE CLOSE BUTTON — Clean & Functional */}
          <button
            onClick={closeMenu}
            className="mobile-close-btn"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <a href="tel:+256772342377" className="mobile-call-link" onClick={closeMenu}>
              Call +256 772 342 377
            </a>
          </li>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/research" onClick={closeMenu}>Research</Link></li>
          <li><Link href="/publications" onClick={closeMenu}>Publications</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="mobile-footer-note">
          <p>Global Lead, Macroeconomics & Fiscal Policy</p>
          <p>UNAIDS • PhD Health Economics (UCL)</p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="menu-backdrop active"
          onClick={closeMenu}
        />
      )}
    </>
  );
}