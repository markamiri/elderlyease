"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/services.module.css";
import commonStyles from "@/styles/common.module.css";

const services = [
  {
    id: 1,
    title: "Home Support",
    description:
      "Our Home Support services adapt to your evolving needs, ensuring continuous and holistic care through personalized assistance, collaboration with other providers, and over 20 years of trusted experience.",
    bgColor: "rgba(79, 144, 242, 0.12)",
    icon: "/images/medal-icon.svg",
  },
  {
    id: 2,
    title: "Personal Care",
    description:
      "Personal Care services focus on delivering compassionate assistance tailored to daily needs, ensuring comfort, dignity, and well-being with expert professionals you can rely on.",
    bgColor: "#E4FFEA",
    icon: "/images/healthcare-icon.svg",
  },
  {
    id: 3,
    title: "Complex Care",
    description:
      "For specialized health needs, our Complex Care services provide expert support designed to manage and monitor intricate conditions, ensuring a seamless care experience.",
    bgColor: "rgba(58, 248, 226, 0.3)",
    icon: "/images/heart-hands-icon.svg",
  },
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={commonStyles.container}>
        <div className={styles.heading}>
          <div className={styles.badge}>Our Services</div>
          <h2 className={styles.title}>Discover our services</h2>
        </div>

        <div className={styles.container}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div
                className={styles.cardBg}
                style={{ backgroundColor: service.bgColor }}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
                <Link
                  href={`/services/${service.id}`}
                  className={styles.cardCta}
                >
                  Read more
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
