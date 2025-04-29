"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHandHoldingHeart, FaUsers, FaLightbulb } from "react-icons/fa";
import styles from "@/styles/about.module.css";
import commonStyles from "@/styles/common.module.css";
import Button from "@/components/ui/Button";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About ElderlyEase</h2>
          <p className={styles.subtitle}>
            We're dedicated to improving the quality of life for seniors through
            innovative technology solutions and compassionate care.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about-seniors.jpg"
              alt="Seniors enjoying technology"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p className={styles.text}>
              At ElderlyEase, we understand the unique challenges that seniors
              face in today's fast-paced digital world. Founded in 2023, our
              mission is to bridge the technology gap for the elderly and
              provide them with tools that enhance their independence, safety,
              and connection with loved ones.
            </p>

            <p className={styles.text}>
              Our team consists of healthcare professionals, tech experts, and
              dedicated caregivers who are passionate about creating meaningful
              solutions for seniors and their families. We believe that
              technology should be accessible to everyone, regardless of age or
              technical ability.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>Seniors Helped</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
            </div>

            <div
              className={`${commonStyles.textCenter} ${styles.ctaContainer}`}
            >
              <Link href="/about">
                <Button variant="secondary">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.missionContainer}>
          <h3 className={styles.missionTitle}>Our Mission & Values</h3>
          <p className={styles.missionText}>
            We strive to enhance the quality of life for seniors through
            innovative, accessible technology and compassionate support,
            empowering them to maintain independence and connection in the
            digital age.
          </p>

          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaHandHoldingHeart />
              </div>
              <h4 className={styles.valueTitle}>Compassion</h4>
              <p className={styles.valueDescription}>
                We approach every interaction with empathy, understanding, and
                genuine care for the unique needs of seniors.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaUsers />
              </div>
              <h4 className={styles.valueTitle}>Inclusivity</h4>
              <p className={styles.valueDescription}>
                We believe in creating solutions that are accessible to all
                seniors, regardless of technical ability or background.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaLightbulb />
              </div>
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueDescription}>
                We continuously develop and improve our solutions to address the
                evolving needs of seniors in a changing world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
