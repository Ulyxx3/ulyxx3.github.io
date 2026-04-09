"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, skewX: -3 },
  show: {
    opacity: 1,
    y: 0,
    skewX: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      {/* ── PAGE HEADER ── */}
      <motion.div
        className={styles.pageHeader}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.pageTag}>SECTION 02</span>
        <h1 className={styles.pageTitle}>MISSION ARCHIVE</h1>
        <div className={styles.titleUnderline} />
        <p className={styles.pageDesc}>
          {projects.length} missions logged · Select a file to deploy
        </p>
      </motion.div>

      {/* ── GRID ── */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, i) => {
          const isHovered = hoveredId === project.name;
          const completionColor =
            project.completion === 100
              ? "#00f1a1"
              : project.completion >= 50
              ? "#00a1f1"
              : "#f1a100";

          return (
            <motion.article
              key={project.name}
              variants={cardVariant}
              className={styles.card}
              onMouseEnter={() => setHoveredId(project.name)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              id={`mission-${project.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              {/* Cut-in flash on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className={styles.cutIn}
                    initial={{ x: "-100%", opacity: 0.6 }}
                    animate={{ x: "150%", opacity: 0 }}
                    exit={{}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>

              {/* Card header */}
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={styles.completionBadge}
                  style={{ color: completionColor, borderColor: completionColor }}
                >
                  {project.completion}%
                </span>
              </div>

              {/* Name */}
              <h2 className={styles.cardName}>{project.name}</h2>
              <p className={styles.cardDesc}>{project.desc}</p>

              {/* Tech tags */}
              <div className={styles.techRow}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ background: completionColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.completion}%` }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.6 }}
                />
              </div>

              {/* GitHub link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  id={`mission-github-${project.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                >
                  <FaGithub className={styles.githubIcon} />
                  <span>VIEW ON GITHUB</span>
                </a>
              )}

              {/* Hover glow border */}
              <motion.div
                className={styles.cardGlow}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
