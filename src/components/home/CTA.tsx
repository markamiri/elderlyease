import Link from "next/link";
import styles from "@/styles/cta.module.css";

const CTA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Join Our Caring Community</h2>
          <p className={styles.description}>
            At Nursing Care, we are dedicated to delivering compassionate and
            tailored support for you and your loved ones.
          </p>
        </div>
        <Link href="/signup" className={styles.button}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default CTA;
