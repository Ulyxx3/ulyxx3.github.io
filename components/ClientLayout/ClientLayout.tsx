"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./ClientLayout.module.css";

const EASE: [number, number, number, number] = [0.87, 0, 0.13, 1];

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 40,
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  },
  enter: {
    opacity: 1,
    x: 0,
    clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    clipPath: "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)",
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        className={styles.main}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
