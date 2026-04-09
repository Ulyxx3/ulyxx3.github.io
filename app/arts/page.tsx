"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { arts } from "@/data/arts";
import styles from "./page.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVar: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const categoryColors: Record<string, string> = {
  Drawing: "#00a1f1",
  "2D Animation": "#f100a1",
  "Motion Graphics": "#a100f1",
};

export default function ArtsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      {/* ── PAGE HEADER ── */}
      <motion.div
        className={styles.pageHeader}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.pageTag}>SECTION 03</span>
        <h1 className={styles.pageTitle}>ARTS & ANIMATION ARCHIVE</h1>
        <div className={styles.titleUnderline} />
        <p className={styles.pageDesc}>
          Visual works compendium — Edit{" "}
          <code className={styles.code}>data/arts.ts</code> to add your pieces
        </p>
      </motion.div>

      {/* ── CATEGORY LEGEND ── */}
      <motion.div
        className={styles.legend}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {Object.entries(categoryColors).map(([cat, color]) => (
          <span
            key={cat}
            className={styles.legendItem}
            style={{ borderColor: color, color }}
          >
            {cat}
          </span>
        ))}
      </motion.div>

      {/* ── GALLERY GRID ── */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {arts.map((piece) => {
          const accentColor = categoryColors[piece.category] ?? "#00a1f1";
          const isHovered = hovered === piece.id;

          return (
            <motion.div
              key={piece.id}
              variants={itemVar}
              className={styles.artCardWrapper}
              onMouseEnter={() => setHovered(piece.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            >
              <Link
                href={`/arts/${piece.id}`}
                className={styles.artCard}
                id={`art-${piece.id}`}
                style={{ "--accent": accentColor } as React.CSSProperties}
              >
                {/* ─ Thumbnail area ─ */}
                <div className={styles.thumb}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className={styles.thumbImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Placeholder if image missing */}
                  <div className={styles.thumbPlaceholder}>
                    <span className={styles.thumbIcon}>◈</span>
                  </div>

                  {/* Cut-in overlay on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className={styles.cutInOverlay}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ borderColor: accentColor }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Category badge */}
                  <span
                    className={styles.categoryBadge}
                    style={{ background: accentColor }}
                  >
                    {piece.category}
                  </span>

                  {/* View label on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        className={styles.viewLabel}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ borderColor: accentColor, color: accentColor }}
                      >
                        VIEW ›
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* ─ Info area ─ */}
                <div className={styles.info}>
                  <h2 className={styles.artTitle}>{piece.title}</h2>
                  <p className={styles.artDesc}>{piece.description}</p>
                  {piece.year && (
                    <span className={styles.yearTag}>{piece.year}</span>
                  )}
                </div>

                {/* Hover border glow */}
                <motion.div
                  className={styles.cardGlow}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  style={{ borderColor: accentColor, boxShadow: `0 0 24px ${accentColor}55` }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          );
        })}

        {/* ── ADD NEW placeholder card ── */}
        <motion.div variants={itemVar} className={styles.addCard}>
          <span className={styles.addIcon}>+</span>
          <span className={styles.addLabel}>Add new piece</span>
          <span className={styles.addHint}>Edit data/arts.ts</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
