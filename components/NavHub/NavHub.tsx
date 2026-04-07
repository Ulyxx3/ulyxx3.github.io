"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./NavHub.module.css";

interface NavItem {
  id: string;
  label: string;
  sublabel: string;
  href: string;
  index: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "HOME", sublabel: "Main Terminal", href: "/", index: 0 },
  { id: "about", label: "OPERATOR", sublabel: "Profile", href: "/about", index: 1 },
  { id: "projects", label: "MISSION", sublabel: "Archive", href: "/projects", index: 2 },
  { id: "arts", label: "ARTS &", sublabel: "Animation", href: "/arts", index: 3 },
  { id: "comms", label: "COMMS", sublabel: "Socials", href: "/comms", index: 4 },
];

export default function NavHub() {
  const pathname = usePathname();

  const activeIndex = NAV_ITEMS.findIndex((item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  });

  const navigate = useCallback(
    (direction: 1 | -1) => {
      const next = (activeIndex + direction + NAV_ITEMS.length) % NAV_ITEMS.length;
      const item = NAV_ITEMS[next];
      window.location.href = item.href;
    },
    [activeIndex]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") navigate(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {/* Left side label */}
      <div className={styles.sideLabel}>
        <span className={styles.sideLabelText}>ULYXX3</span>
        <span className={styles.sideLabelSub}>PORTFOLIO v2.0</span>
      </div>

      {/* Nav items */}
      <ul className={styles.list} role="list">
        {NAV_ITEMS.map((item) => {
          const isActive = item.index === activeIndex;
          return (
            <li key={item.id} className={styles.listItem}>
              <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
                id={`nav-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={styles.indicator}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className={styles.linkIndex}>
                  0{item.index + 1}
                </span>
                <span className={styles.linkContent}>
                  <span className={styles.linkLabel}>{item.label}</span>
                  <span className={styles.linkSub}>{item.sublabel}</span>
                </span>
                {isActive && (
                  <motion.div
                    className={styles.activeBar}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.87, 0, 0.13, 1] }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Keyboard hint */}
      <div className={styles.keyHint} aria-hidden="true">
        <kbd className={styles.key}>↑</kbd>
        <kbd className={styles.key}>↓</kbd>
        <span>Navigate</span>
        <kbd className={styles.key}>↵</kbd>
        <span>Select</span>
      </div>
    </nav>
  );
}
