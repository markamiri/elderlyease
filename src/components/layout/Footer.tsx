import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "Homepage", href: "/" },
      { label: "Featured", href: "/featured" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Sign In", href: "/login" },
      { label: "Sign Up", href: "/signup" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Style Guide", href: "/style-guide" },
      { label: "License", href: "/license" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="ElderlyEase"
                width={180}
                height={60}
                className={styles.logo}
              />
            </Link>
            <p className={styles.description}>
              Unlocking Financial Success: Explore investment insights, evolving
              strategies and sustainable growth with us.
            </p>
            <div className={styles.socialLinks}>
              <Link href="https://facebook.com" className={styles.socialIcon}>
                <span>FB</span>
              </Link>
              <Link href="https://twitter.com" className={styles.socialIcon}>
                <span>TW</span>
              </Link>
              <Link href="https://linkedin.com" className={styles.socialIcon}>
                <span>IN</span>
              </Link>
              <Link href="https://instagram.com" className={styles.socialIcon}>
                <span>IG</span>
              </Link>
            </div>
          </div>

          <div className={styles.linksContainer}>
            {footerLinks.map((group, index) => (
              <div key={index} className={styles.linkGroup}>
                <h3 className={styles.linkGroupTitle}>{group.title}</h3>
                <div className={styles.linksList}>
                  {group.links.map((link, i) => (
                    <div key={i} className={styles.linkItem}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.copyright}>
          © 2024 ElderlyEase All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
