"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, skewX: -5 },
  show: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const skills = [
  "React", "JavaScript", "CSS", "Node.js", "Python",
  "Git", "GDScript", "C++", "C#", "PowerShell", "GLSL", "Rust",
];

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      {/* ── HEADER SECTION ── */}
      <motion.section
        className={styles.hero}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Top eyebrow */}
        <motion.div variants={itemVariants} className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>SYSTEM ONLINE</span>
          <span className={styles.eyebrowLine} />
        </motion.div>

        {/* Main title */}
        <motion.h1 variants={itemVariants} className={styles.title}>
          <span className={styles.titleSub}>OPERATOR</span>
          <span className={styles.titleMain}>ULYXX3</span>
          <span className={styles.titleAccent}>PORTFOLIO</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={itemVariants} className={styles.tagline}>
          Développeur <span className={styles.dot}>·</span> Designer{" "}
          <span className={styles.dot}>·</span> Animateur 2D
        </motion.p>

        {/* Status badges */}
        <motion.div variants={itemVariants} className={styles.badges}>
          <span className={styles.badge} data-status="active">
            <span className={styles.badgeDot} />
            ACTIVE
          </span>
          <span className={styles.badge}>FULL ACCESS</span>
          <span className={styles.badge}>IMMEDIATE</span>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className={styles.cta}>
          <Link href="/projects" className={styles.ctaBtn} id="home-cta-missions">
            <span className={styles.ctaBtnIcon}>▶</span>
            MISSION ARCHIVE
          </Link>
          <Link href="/about" className={styles.ctaBtnSecondary} id="home-cta-profile">
            OPERATOR PROFILE
          </Link>
        </motion.div>
      </motion.section>

      {/* ── SKILLS PANEL ── */}
      <motion.section
        className={styles.skillsPanel}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
        aria-label="Skills"
      >
        <div className={styles.skillsHeader}>
          <span className={styles.skillsTitle}>TECH STACK</span>
          <span className={styles.skillsLine} />
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className={styles.skillTag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7 + i * 0.04,
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* ── TIMELINE STRIP ── */}
      <motion.section
        className={styles.timeline}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        aria-label="Timeline"
      >
        <div className={styles.timelineHeader}>OPERATOR TIMELINE</div>
        <div className={styles.timelineItems}>
          {[
            { year: "2023", label: "Discord Bot Development" },
            { year: "2024", label: "Web Foundations — HTML/CSS" },
            { year: "2025", label: "Advanced Web — React/JS" },
            {
              year: "2026",
              label: "App Dev · Shader Dev · Game Dev",
              current: true,
            },
          ].map((entry) => (
            <div
              key={entry.year}
              className={`${styles.timelineItem} ${entry.current ? styles.timelineCurrent : ""}`}
            >
              <span className={styles.timelineYear}>{entry.year}</span>
              <span className={styles.timelineDot} />
              <span className={styles.timelineLabel}>{entry.label}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
