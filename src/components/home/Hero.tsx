"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/hero.module.css";
import commonStyles from "@/styles/common.module.css";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: 1,
    icon: "/images/icons/medal-icon.svg",
    text: "Qualified Caregivers",
  },
  {
    id: 2,
    icon: "/images/icons/healthcare-icon.svg",
    text: "Personal Care Assistance",
  },
  {
    id: 3,
    icon: "/images/icons/heart-hands-icon.svg",
    text: "Emotional Support",
  },
  {
    id: 4,
    icon: "/images/icons/secure-platform-icon.svg",
    text: "Secure Platform",
  },
];

const Hero = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [connectorLines, setConnectorLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  // Calculate connector lines positions based on card positions
  useEffect(() => {
    const updateConnectorLines = () => {
      if (!cardsContainerRef.current || window.innerWidth <= 768) {
        setConnectorLines([]);
        return;
      }

      const newConnectorLines = [];
      const cards = cardRefs.current.filter((card) => card !== null);

      for (let i = 0; i < cards.length - 1; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];

        if (currentCard && nextCard) {
          const currentRect = currentCard.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();
          const containerRect =
            cardsContainerRef.current.getBoundingClientRect();

          // Calculate positions relative to the container
          const x1 = currentRect.right - containerRect.left;
          const y1 =
            currentRect.top + currentRect.height / 2 - containerRect.top;
          const x2 = nextRect.left - containerRect.left;
          const y2 = nextRect.top + nextRect.height / 2 - containerRect.top;

          newConnectorLines.push({ x1, y1, x2, y2 });
        }
      }

      setConnectorLines(newConnectorLines);
    };

    // Update on window resize and after initial render
    window.addEventListener("resize", updateConnectorLines);
    // Small delay to ensure card positions are accurate
    setTimeout(updateConnectorLines, 100);

    return () => window.removeEventListener("resize", updateConnectorLines);
  }, []);

  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-bg.jpg"
        alt="Background Pattern"
        fill
        className={styles.heroBg}
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div className={styles.heroContent}>
        <h1 className={styles.heading}>
          Connect with Quality In-Home Care Solutions
        </h1>
        <p className={styles.subheading}>
          Emphasizing ease of use, trustworthiness, and tailored matches for
          care receivers and career growth for caregivers.
        </p>
        <div className={styles.ctaContainer}>
          <Link
            href="/signup"
            className={`${commonStyles.button} ${commonStyles.primaryButton}`}
          >
            Get Started
          </Link>
          <Link
            href="/caregivers"
            className={`${commonStyles.button} ${commonStyles.secondaryButton}`}
            style={{ borderColor: "white", color: "white" }}
          >
            Start Your Career
          </Link>
        </div>
      </div>

      <div className={styles.cardsContainer} ref={cardsContainerRef}>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={styles.card}
            ref={(el: HTMLDivElement | null) => {
              cardRefs.current[index] = el;
            }}
          >
            <div className={styles.cardIcon}>
              <div className={styles.cardIconInner}>
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <p className={styles.cardText}>{feature.text}</p>
          </div>
        ))}

        {/* Responsive connector lines between cards */}
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        >
          {connectorLines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              className={styles.connectorLine}
              strokeDasharray="6,6"
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default Hero;
