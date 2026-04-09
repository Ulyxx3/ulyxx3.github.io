"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitch,
  FaDiscord,
  FaYoutube,
  FaSteam,
  FaSpotify,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiBluesky, SiKofi } from "react-icons/si";
import { socials } from "@/data/socials";
import styles from "./page.module.css";

// Map icon string names to actual components
const iconMap: Record<string, React.ReactElement> = {
  FaGithub: <FaGithub />,
  FaXTwitter: <FaXTwitter />,
  FaInstagram: <FaInstagram />,
  FaPinterest: <FaPinterest />,
  FaTiktok: <FaTiktok />,
  FaTwitch: <FaTwitch />,
  FaDiscord: <FaDiscord />,
  FaYoutube: <FaYoutube />,
  FaSteam: <FaSteam />,
  FaSpotify: <FaSpotify />,
  SiBluesky: <SiBluesky />,
  SiVirtualbox: <span style={{ fontSize: 20 }}>V</span>,
  SiGamedeveloper: <span style={{ fontSize: 20 }}>B</span>,
  SiKofi: <SiKofi />,
};

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const cardVar: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE },
  },
};

export default function CommsPage() {
  return (
    <div className={styles.wrapper}>
      {/* ── PAGE HEADER ── */}
      <motion.div
        className={styles.pageHeader}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.pageTag}>SECTION 04</span>
        <h1 className={styles.pageTitle}>COMMS — RÉSEAUX SOCIAUX</h1>
        <div className={styles.titleUnderline} />
        <p className={styles.pageDesc}>
          Canaux établis · {socials.length} liens actifs
        </p>
      </motion.div>

      {/* ── SOCIAL GRID ── */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socials.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVar}
            className={styles.card}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            id={`social-${social.id}`}
            style={{ "--accent": social.color } as React.CSSProperties}
          >
            <div className={styles.cardIcon} style={{ color: social.color }}>
              {iconMap[social.icon] ?? <span>?</span>}
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardLabel}>{social.label}</span>
              <span className={styles.cardUsername}>{social.username}</span>
            </div>
            <span className={styles.cardArrow}>›</span>

            {/* Bottom accent line */}
            <div
              className={styles.accentLine}
              style={{ background: social.color }}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
