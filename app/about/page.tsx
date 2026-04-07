"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./page.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const skillStats = [
  { label: "React / JavaScript", level: 90 },
  { label: "CSS / Web Design", level: 92 },
  { label: "Node.js / Python", level: 78 },
  { label: "Rust / C++ / C#", level: 70 },
  { label: "GDScript / Godot", level: 75 },
  { label: "GLSL / Shaders", level: 62 },
  { label: "Git / DevOps", level: 80 },
  { label: "2D Animation", level: 70 },
];

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* ── PAGE HEADER ── */}
      <motion.div
        className={styles.pageHeader}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.pageTag}>SECTION 01</span>
        <h1 className={styles.pageTitle}>OPERATOR PROFILE</h1>
        <div className={styles.titleUnderline} />
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* ── BIO CARD ── */}
        <motion.div variants={item} className={styles.bioCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardLabel}>PERSONNEL FILE</span>
            <span className={styles.cardDivider} />
            <span className={styles.cardId}>ID: ULX-003</span>
          </div>
          <div className={styles.bioAvatar}>
            <span className={styles.avatarInitial}>U</span>
            <div className={styles.avatarRing} />
            <div className={styles.avatarRing2} />
          </div>
          <h2 className={styles.bioName}>ULYXX3</h2>
          <p className={styles.bioBio}>
            Développeur, designer et animateur 2D. Créateur de sites web,
            d&apos;animations 2D, de vidéos et de projets de jeux vidéo. Mon but
            est de créer des contenus de qualité avec un design moderne et
            professionnel.
          </p>
          <div className={styles.bioStatus}>
            <div className={styles.statusRow}>
              <span className={styles.statusKey}>STATUS</span>
              <span className={`${styles.statusVal} ${styles.statusActive}`}>
                <span className={styles.statusDot} />
                ACTIVE
              </span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.statusKey}>CLEARANCE</span>
              <span className={styles.statusVal}>FULL ACCESS</span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.statusKey}>AVAILABILITY</span>
              <span className={styles.statusVal}>IMMEDIATE</span>
            </div>
          </div>
        </motion.div>

        {/* ── STATS PANEL ── */}
        <motion.div variants={item} className={styles.statsPanel}>
          <div className={styles.cardHeader}>
            <span className={styles.cardLabel}>SKILL PARAMETERS</span>
            <span className={styles.cardDivider} />
          </div>
          <div className={styles.statsList}>
            {skillStats.map((stat, i) => (
              <div key={stat.label} className={styles.statRow}>
                <span className={styles.statLabel}>{stat.label}</span>
                <div className={styles.statBarTrack}>
                  <motion.div
                    className={styles.statBarFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.level}%` }}
                    transition={{
                      delay: 0.4 + i * 0.07,
                      duration: 0.6,
                      ease: [0.87, 0, 0.13, 1],
                    }}
                  />
                </div>
                <span className={styles.statValue}>{stat.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── TIMELINE ── */}
        <motion.div variants={item} className={styles.timelineCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardLabel}>OPERATOR TIMELINE</span>
            <span className={styles.cardDivider} />
          </div>
          <div className={styles.timeline}>
            {[
              {
                year: "2023",
                title: "Discord Bot Development",
                desc: "First ventures into programming via Discord bots.",
                current: false,
              },
              {
                year: "2024",
                title: "Web Foundations",
                desc: "HTML, CSS — the building blocks of the web.",
                current: false,
              },
              {
                year: "2025",
                title: "Advanced Web Dev",
                desc: "React, JavaScript — interactive, component-driven UIs.",
                current: false,
              },
              {
                year: "2026",
                title: "Full Stack & Game Dev",
                desc: "App Dev (C#/C++/Python), Shader Dev (GLSL), Game Dev (Godot).",
                current: true,
              },
            ].map((entry) => (
              <div
                key={entry.year}
                className={`${styles.tlEntry} ${entry.current ? styles.tlCurrent : ""}`}
              >
                <div className={styles.tlLeft}>
                  <span className={styles.tlYear}>{entry.year}</span>
                  <div className={styles.tlDot} />
                  <div className={styles.tlLine} />
                </div>
                <div className={styles.tlRight}>
                  <span className={styles.tlTitle}>{entry.title}</span>
                  <span className={styles.tlDesc}>{entry.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
