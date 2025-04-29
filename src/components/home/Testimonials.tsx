"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/testimonials.module.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Medical Director",
    image: "/images/team/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Williams",
    title: "Care Coordinator",
    image: "/images/team/michael.jpg",
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Senior Caregiver",
    image: "/images/team/emma.jpg",
  },
  {
    id: 4,
    name: "Robert Davis",
    title: "Physical Therapist",
    image: "/images/team/robert.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    text: "The caregivers from ElderlyEase have been a blessing for my mother. They are professional, compassionate, and truly care about her wellbeing. I can finally rest easy knowing she's in good hands.",
    author: "Jennifer M.",
    rating: 5,
    avatar: "/images/avatars/jennifer.jpg",
  },
  {
    id: 2,
    text: "As someone who needed temporary care after surgery, I was impressed by the quality of service. The caregivers were punctual, respectful, and went above and beyond to ensure my comfort.",
    author: "David L.",
    rating: 5,
    avatar: "/images/avatars/david.jpg",
  },
  {
    id: 3,
    text: "Finding qualified care for my father with Alzheimer's was challenging until we discovered ElderlyEase. Their specialized caregivers have made a significant difference in his quality of life.",
    author: "Patricia K.",
    rating: 5,
    avatar: "/images/avatars/patricia.jpg",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Team</h2>
          <p className={styles.subtitle}>
            Our team of dedicated professionals is committed to providing
            exceptional care and support for elderly individuals and their
            families.
          </p>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={styles.teamSection}>
            <div className={styles.teamHeader}>
              <h3 className={styles.teamTitle}>Our Caregiving Team</h3>
            </div>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamMember}>
                  <div className={styles.teamMemberImage}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.teamMemberInfo}>
                    <h4 className={styles.teamMemberName}>{member.name}</h4>
                    <p className={styles.teamMemberTitle}>{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/about" className={styles.viewAllButton}>
                View All Team Members
              </Link>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <h3 className={styles.testimonialTitle}>Client Testimonials</h3>
            <div className={styles.starsContainer}>
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <span key={i} className={styles.star}>
                  ★
                </span>
              ))}
            </div>
            <p className={styles.testimonialText}>{activeTestimonial.text}</p>
            <p className={styles.testimonialAuthor}>
              {activeTestimonial.author}
            </p>

            <div className={styles.avatars}>
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id}
                  className={`${styles.avatar} ${
                    activeTestimonial.id === testimonial.id
                      ? styles.avatarActive
                      : ""
                  }`}
                  onClick={() => setActiveTestimonial(testimonial)}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
