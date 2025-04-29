"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/how-it-works.module.css";

const steps = [
  {
    id: 1,
    icon: "📋",
    title: "Tell Us Your Needs",
    description: "We'll assess your unique care requirements.",
  },
  {
    id: 2,
    icon: "👥",
    title: "Get Matched with Qualified Caregivers",
    description: "We pair you with the right caregiver for your needs.",
  },
  {
    id: 3,
    icon: "📅",
    title: "Schedule & Manage Care Easily",
    description: "Easily schedule and manage your care appointments.",
  },
  {
    id: 4,
    icon: "🔄",
    title: "Ongoing Support & Adjustments",
    description: "We continuously adjust care to meet your changing needs.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>How We Care</div>
          <h2 className={styles.title}>How it works?</h2>
          <p className={styles.description}>
            As we age, we all need support, and that's where Home Instead steps
            in. Our skilled Care Professionals provide high-quality,
            personalized care.
          </p>
        </div>

        <div className={styles.content}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.stepIcon}>
                <span style={{ fontSize: "24px", color: "white" }}>
                  {step.icon}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <Link href="/signup" className={styles.cta}>
          Create Your Account
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
