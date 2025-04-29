"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import commonStyles from "@/styles/common.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="ElderlyEase"
          width={180}
          height={60}
          className={styles.logo}
        />
      </Link>

      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navItem} ${styles.active}`}>
          Home
        </Link>
        <Link href="/services" className={styles.navItem}>
          Services
        </Link>
        <Link href="/about" className={styles.navItem}>
          About Us
        </Link>
        <Link href="/contact" className={styles.navItem}>
          Contact Us
        </Link>
        <Link href="/faq" className={styles.navItem}>
          FAQ
        </Link>
      </nav>

      <div className={styles.cta}>
        <Link
          href="/login"
          className={`${commonStyles.button} ${commonStyles.secondaryButton}`}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={`${commonStyles.button} ${commonStyles.primaryButton}`}
        >
          Sign up
        </Link>
      </div>

      <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>

      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          <button className={styles.mobileNavClose} onClick={toggleMobileMenu}>
            ✕
          </button>
          <Link
            href="/"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          <Link
            href="/faq"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            FAQ
          </Link>
          <Link
            href="/login"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={styles.mobileNavItem}
            onClick={toggleMobileMenu}
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
