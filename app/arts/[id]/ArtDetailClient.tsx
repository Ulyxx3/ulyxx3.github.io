"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ArtPiece } from "@/data/arts";
import styles from "./page.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const categoryColors: Record<string, string> = {
  Drawing: "#00a1f1",
  "2D Animation": "#f100a1",
  "Motion Graphics": "#a100f1",
};

interface Props {
  piece: ArtPiece;
  prev: ArtPiece | null;
  next: ArtPiece | null;
}

export default function ArtDetailClient({ piece, prev, next }: Props) {
  const accentColor = categoryColors[piece.category] ?? "#00a1f1";

  return (
    <div className={styles.wrapper}>
      {/* ── BACK BUTTON ── */}
      <motion.div
        className={styles.topBar}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <Link href="/arts" className={styles.backBtn} id="art-detail-back">
          <span className={styles.backArrow}>‹</span>
          ARTS ARCHIVE
        </Link>

        <span
          className={styles.categoryPill}
          style={{ background: accentColor }}
        >
          {piece.category}
        </span>
      </motion.div>

      {/* ── MAIN IMAGE ── */}
      <motion.div
        className={styles.imageFrame}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        style={{ "--accent": accentColor } as React.CSSProperties}
      >
        {/* Border glow corners */}
        <div className={styles.cornerTL} style={{ borderColor: accentColor }} />
        <div className={styles.cornerBR} style={{ borderColor: accentColor }} />

        {/* Image or placeholder */}
        {piece.videoUrl ? (
          <video
            src={piece.videoUrl}
            className={styles.mainMedia}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={piece.imageUrl}
            alt={piece.title}
            className={styles.mainMedia}
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        )}

        {/* Placeholder overlay (shown when image fails) */}
        <div className={styles.placeholder}>
          <span className={styles.placeholderIcon}>◈</span>
          <span className={styles.placeholderText}>IMAGE NOT SET</span>
          <span className={styles.placeholderHint}>
            Edit <code>data/arts.ts</code> → imageUrl
          </span>
        </div>

        {/* Year badge */}
        {piece.year && (
          <span className={styles.yearBadge}>{piece.year}</span>
        )}
      </motion.div>

      {/* ── INFO PANEL ── */}
      <motion.div
        className={styles.infoPanel}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.15 }}
      >
        {/* Title */}
        <h1 className={styles.title}>{piece.title}</h1>

        {/* Divider */}
        <div
          className={styles.divider}
          style={{ background: accentColor }}
        />

        {/* Description */}
        <p className={styles.description}>
          {piece.longDescription ?? piece.description}
        </p>

        {/* Tags */}
        {piece.tags && piece.tags.length > 0 && (
          <div className={styles.tags}>
            <span className={styles.tagsLabel}>TOOLS</span>
            <div className={styles.tagsList}>
              {piece.tags.map((tag) => (
                <span
                  key={tag}
                  className={styles.tag}
                  style={{ borderColor: `${accentColor}55`, color: accentColor }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <motion.div
        className={styles.navRow}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        {prev ? (
          <Link
            href={`/arts/${prev.id}`}
            className={styles.navBtn}
            id="art-detail-prev"
          >
            <span className={styles.navArrow}>‹</span>
            <span className={styles.navInfo}>
              <span className={styles.navHint}>PREVIOUS</span>
              <span className={styles.navName}>{prev.title}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/arts/${next.id}`}
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            id="art-detail-next"
          >
            <span className={styles.navInfo}>
              <span className={styles.navHint}>NEXT</span>
              <span className={styles.navName}>{next.title}</span>
            </span>
            <span className={styles.navArrow}>›</span>
          </Link>
        ) : (
          <div />
        )}
      </motion.div>
    </div>
  );
}
