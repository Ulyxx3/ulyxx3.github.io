import type { Metadata } from "next";
import "./globals.css";
import P3Background from "@/components/P3Background/P3Background";
import NavHub from "@/components/NavHub/NavHub";
import ClientLayout from "@/components/ClientLayout/ClientLayout";

export const metadata: Metadata = {
  title: "ULYXX3 — Developer · Designer · Animator",
  description:
    "Portfolio of Ulyxx3 — Développeur, designer et animateur 2D. Créateur de sites web, d'animations 2D, de vidéos et de projets de jeux vidéo.",
  keywords: [
    "developer",
    "designer",
    "2D animator",
    "game dev",
    "portfolio",
    "React",
    "Godot",
    "Rust",
  ],
  openGraph: {
    title: "ULYXX3 — Developer · Designer · Animator",
    description:
      "Portfolio of Ulyxx3 — Développeur, designer et animateur 2D.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* Background layer (z-index: 0) */}
        <P3Background />

        {/* Noise + scanlines (z-index: 1-2) */}
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />

        {/* Corner decorations */}
        <div className="corner-decoration top-left" aria-hidden="true" />
        <div className="corner-decoration bottom-right" aria-hidden="true" />

        {/* Navigation sidebar */}
        <NavHub />

        {/* Page content with Framer Motion transitions */}
        <ClientLayout>{children}</ClientLayout>

        {/* Status bar */}
        <div className="status-bar" aria-label="System status">
          <span>
            <span className="dot" />
            ACTIVE
          </span>
          <span>CLEARANCE: FULL ACCESS</span>
          <span>AVAILABILITY: IMMEDIATE</span>
        </div>
      </body>
    </html>
  );
}
